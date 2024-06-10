import { ZodTypeAny, z } from "zod"
import dotenv from 'dotenv'
dotenv.config()
import {GoogleGenerativeAI} from "@google/generative-ai";

const determineSchemaType = (schema: any): string => {
    if(!schema.hasOwnProperty("type")) {
        if(Array.isArray(schema)) {
            return "array"
        } else {
            return typeof schema
        }
    }
    return schema.type
}
const jsonSchemaToZod = (schema: any): ZodTypeAny => {
    const type = determineSchemaType(schema)
    switch (type) {
        case "string": {
            return z.string().nullable()
        }
        case "number": {
            return z.number().nullable()
        }
        case "boolean": {
            return z.boolean().nullable()
        }
        case "array": {
            return z.array(jsonSchemaToZod(schema.items)).nullable()
        }
        case "object": {
            const shape: Record<string, ZodTypeAny> = {}
            for (const key in schema) {
                if(key !== "type") {
                    shape[key] = jsonSchemaToZod(schema[key])
                }
            }
            return z.object(shape)
        }
        default:
            throw new Error(`unsupported data type ${type}`)
    }
}

export default defineEventHandler(async (event) => {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: "You are an AI that converts data into the attached JSON format. You respond with nothing but valid JSON based on the input data. Your ooutput should directly be valid JSON, nothing added before and after. You will begin the opening curly brace and end with the closing curly brace. Only if you absolutely cannot determine a field, use the value null. Try to guess the action - if message doesn't mention editing an entry, it probably is an insert action etc."
      })
      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "application/json"
      }

    const body = await readBody(event)

    // validate request
    const genericSchema = z.object({
        data: z.string(),
        format: z.object({}).passthrough()
    })

    const {data, format} = genericSchema.parse(body)
    
    // create schema from expected format
    const dynamicSchema = jsonSchemaToZod(format)

    type PromiseExec<T> = (
        resolve:(value: T) => void,
        reject: (reason?: any) => void
    ) => void;

    class RetryablePromise<T> extends Promise<T> {
        static async retry<T>(attempts: number, func: PromiseExec<T>): Promise<T> {
            return new RetryablePromise<T>(func).catch((error) => {
                console.error(`retrying due to error: ${error}`)
                return attempts > 0 
                    ? RetryablePromise.retry(attempts - 1, func)
                    : RetryablePromise.reject(error)
            })
        }
    }
    // retry mechanism
    const validationResult = await RetryablePromise.retry<object>(3, async (resolve, reject) => {
        try {
            // i just applied to Colorous Factory in Piła as front-end developer and i expect to earn 10000 PLN gross monthly
            // gemini API
            const chatSession = model.startChat({
                generationConfig,
                history: [
                    {
                        role: "user",
                        parts: [
                            {text: "Expected JSON format:\n{\n    company: {type: \"string\"},\n    location: {type: \"string\"},\n    position: {type: \"string\"},\n    level: {type: \"string\"},\n    salary: {type: \"number\"},\n    contract: {type: \"string\"},\n    action: {type: \"string\"},\n    status: {type: \"string\"},\n}"},
                        ]
                    }
                ],
            })
            const result = await chatSession.sendMessage(data)
            // validate
            const validationResult = dynamicSchema.parse(JSON.parse(result.response.text()) || "")

            return resolve(validationResult)
        } catch (err) {
            reject(err)
        }
    })

    return validationResult
})

