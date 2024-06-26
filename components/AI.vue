<template>
  <div id="ai-bar" class="p-4 border-b border-slate-700/50 relative w-full flex flex-col">
      <label class="input input-bordered flex items-center gap-2">
        <input type="text" class="grow" placeholder="input action" v-model="actionInput" @keypress.enter="process"/>
        <button class="btn btn-sm btn-ghost btn-square">
          <Icon name="mdi:microphone" size="22"/>
        </button>
        <button @click="process" class="btn btn-sm btn-ghost btn-square">
          <Icon name="ri:send-plane-fill" size="22"/>
        </button>
      </label>
      <div v-show="aiWorking" class="dropdown-content w-full p-2 shadow-lg max-h-96 overflow-y-auto">
        <Message v-for="(m, index) in messages" :key="index" :from="m.by" :text="m.message" :accent="m.accent"/>
        <Message from="AI" text="<span class='loading loading-dots loading-xs'></span>" v-show="isTyping"/>
      </div>
      <button v-if="messages.length" @click="aiWorking=!aiWorking" class="mx-auto btn btn-accent-content btn-sm swap swap-rotate">
        <input type="checkbox" :checked="aiWorking"/>
        <Icon name="mdi:chevron-double-down" class="text-accent swap-off" size="24"/>
        <Icon name="mdi:chevron-double-up" class="text-accent swap-on" size="24"/>
      </button>
    </div>
</template>

<script lang="ts" setup>
import { useJobsStore } from '~/stores/jobs';
import type {Message} from "~/types/Message"
const store = useJobsStore()
const aiWorking = ref(false)
const actionInput = ref("")
const lastInput = ref("")
const isTyping = ref(false)
const messages = ref<Message[]>([])
const process = async (e: any) => {
  aiWorking.value = true
  lastInput.value = actionInput.value
  
  if (lastInput.value !== "") {
    messages.value = [...messages.value, {message: lastInput.value}]
    isTyping.value = true
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
    let {company, location, position, level, contract, salary, status, action} = body.value

    switch(action){
      case 'insert': {
        if (status === 'null') status = 'applied';
        isTyping.value = false
        messages.value = [...messages.value, {by: 'AI', message: `Action: ${action}<br/>Company: ${company}<br/>Position: ${position}<br/>Salary: ${salary} PLN/mo<br/>Status: ${status}`, accent: 'chat-bubble-accent'}]
        store.addJob({
          name: company,
          location,
          position,
          tag: level,
          contract,
          salary,
          status
        })
        break;
      }
      case 'update': {
        let item = store.findByName(company)
        if(item) {
          isTyping.value = false
          messages.value = [...messages.value, {by: 'AI', message: `Updating ${item.name}'s values.`, accent: 'chat-bubble-accent'}]
          item = {
            ...item,
            location: location ?? item.location,
            position: position ?? item.position,
            tag: level ?? item.tag,
            contract: contract ?? item.contract,
            salary: salary ?? item.salary,
            status: status ?? item.status
          }
          store.editJob(item)
        }
        break;
      }
      case 'delete': {
        let item = store.findByName(company)
        if (item) {
          isTyping.value = false
          store.removeJob(item.id)
          messages.value = [...messages.value, {by: 'AI', message: `Removing ${item.name} from the store.`, accent: 'chat-bubble-error'}]
        }
        break;
      }
    }
  }

  actionInput.value = ""
}
</script>

<style>

</style>