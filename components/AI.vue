<template>
  <div id="ai-bar" class="p-4 border-b border-slate-700/50 relative">
      <label class="input input-bordered flex items-center gap-2">
        <input type="text" class="grow" placeholder="input action" v-model="actionInput" @keypress.enter="process"/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
          <path fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd" />
        </svg>
      </label>
      <div v-show="aiWorking" class="dropdown-content z-50 w-full p-2 shadow-lg">
        <div class="chat chat-end">
          <div class="chat-bubble">{{ lastInput }}</div>
        </div>
        <Message from="AI" text="I have processed your input and added this entry:" />
        <Message v-if="answer" from="AI" :text="answer" />
      </div>
    </div>
</template>

<script lang="ts" setup>
const aiWorking = ref(false)
const actionInput = ref("")
const lastInput = ref("")
const answer = ref()
const process = async (e: any) => {
  aiWorking.value = true
  lastInput.value = actionInput.value
  
  if (lastInput.value !== "") {
    const {data: body} = await useFetch("/api/json", {
      method: "post",
      body: { 
        data: lastInput.value,
        format: {
          "company": {"type": "string"},
          "location": {"type": "string"},
          "position": {"type": "string"},
          "level": {"type": "string"},
          "salary": {"type": "number"},
          "contract": {"type": "string"},
          "action": {"type": "string"},
          "status": {"type": "string"}
        }
      }
    })
    const {company, location, position, level, contract, salary, status, action} = body.value
    answer.value = `Action: ${action}<br/>Company: ${company}<br/>Position: ${position}<br/>Salary: ${salary} PLN/mo<br/>Status: ${status}`;
  }

  actionInput.value = ""
}
</script>

<style>

</style>