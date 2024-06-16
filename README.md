# Jobtrack-AI [WIP]
Simple job tracking app built with usage of GeminiAI API, currently work in progress.

## Prerequisites
Currently app runs only with geminiAI API set up. You will need to set up API key for it on [Google AI Studio](https://ai.google.dev/aistudio) and currently it has free tier for most of countries except Poland (and few others) and for that reason i am unable to host preview.

For this prototype i used Gemini 1.5 Flash model as it allows adding istructions. Model tuning is still TBA but i plan on revisiting prompts to achieve better results.

## NuxtHub
NuxtHub is a deployment and administration platform for Nuxt, powered by Cloudflare.
Deploy your app with a database, key-value and blob storage with zero configuration, on your Cloudflare account.
NuxtHub lets you affordably run your high performance Nuxt apps everywhere.

It is a new solution from Nuxt team, i decided to give it a try but it is not needed to run this project.

https://hub.nuxt.com/

## TODO
- [ ] local NLP using nlp.js to work offline
- [ ] option to use either openAI, geminiAI or none
    - [x] geminiAPI (add, edit, delete)
- [ ] manual interation
    - [ ] adding jobs
    - [x] editing jobs
    - [x] removing jobs
- [ ] company details, auto data generation, file storage
- [x] persistent localstorage data
- [ ] cloud storage, data sync for cross platform usage
- [ ] pdf CV/cover letter generation