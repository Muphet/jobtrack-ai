<template>
  <tr @contextmenu.prevent="openmenu" class="cursor-pointer relative" :class="isEditing?'bg-base-300':'hover:bg-base-200'">
    <td>
      <div class="flex items-center gap-3">
        <div class="avatar">
          <div class="mask mask-squircle w-12 h-12">
            <img src="/google.svg"
              alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div v-if="!isEditing">
          <div class="font-bold">{{item.name}}</div>
          <div class="text-sm opacity-50">{{ item.location }}</div>
        </div>
        <div v-else class="flex flex-col space-y-1">
          <input type="text" v-model="_name" placeholder="name"/>
          <input type="text" v-model="_location" placeholder="location"/>
        </div>
      </div>
    </td>
    <td>
      <div v-if="!isEditing" class="flex flex-col">
        <span>{{ item.position }}</span>
        <span class="badge badge-ghost badge-sm" v-if="item.tag">{{ item.tag }}</span>
      </div>
      <div v-else class="flex flex-col space-y-1">
        <input type="text" v-model="_position" placeholder="position"/>
        <select name="" v-model="_tag">
          <option value="junior">junior</option>          
          <option value="mid">mid</option>          
          <option value="senior">senior</option>          
        </select>
      </div>
    </td>
    <td>
      <span v-if="!isEditing">{{item.salary == 0 ? 'TBD' : item.salary}}</span>
      <input v-else type="number" v-model="_salary" placeholder="salary"/>
    </td>
    <td>{{ $dayjs(item.time).utc().toString() }}</td>
    <th>
      <div v-if="!isEditing" class="badge" :class="badgeColors[item.status]">{{ item.status }}</div>
      <select v-else name="" v-model="_status">
        <option value="applied">applied</option>
        <option value="rejected">rejected</option>
        <option value="interview">interview</option>
        <option value="accepted">accepted</option>
      </select>
    </th>
  </tr>
  <div v-if="isEditing" class="absolute right-0 space-x-1 z-10">
    <button class="btn btn-neutral btn-xs text-error px-2 rounded-none">
      reject
    </button>
    <button class="btn btn-neutral btn-xs text-accent px-2 rounded-none">
      accept
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { Job } from '~/types/Job';
import { useJobsStore } from '#imports';
const store = useJobsStore()

const dayjs = useDayjs()
dayjs.locale('en')
const badgeColors = {
  "applied": "badge-info",
  "rejected": "badge-error",
  "interview": "badge-warning",
  "accepted": "badge-success"
}

const props = defineProps<{
  item: Job
}>()

const {name,location,position,tag,salary,status} = props.item
const _name = ref(name)
const _location = ref(location)
const _position = ref(position)
const _tag = ref(tag)
const _salary = ref(salary)
const _status = ref(status)

const openmenu = (event:any) => {
  store.openContext(event, props.item)
}

const isEditing = computed(() => {
  return store.editing === props.item.id
})
</script>