<template>
  <tr class="cursor-pointer hover:bg-base-200">
    <td>
      <div class="flex items-center gap-3">
        <div class="avatar">
          <div class="mask mask-squircle w-12 h-12">
            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
              alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div class="font-bold">{{item.name}}</div>
          <div class="text-sm opacity-50">{{ item.location }}</div>
        </div>
      </div>
    </td>
    <td>
      {{ item.position }}
      <br />
      <span class="badge badge-ghost badge-sm">{{ item.tag }}</span>
    </td>
    <td>{{item.salary}}</td>
    <td>{{ $dayjs(item.time).utc().toString() }}</td>
    <th>
      <div class="badge" :class="badgeColors[item.status]">{{ item.status }}</div>
    </th>
  </tr>
</template>

<script lang="ts" setup>
const dayjs = useDayjs()
dayjs.locale('en')
const badgeColors = {
  "applied": "badge-info",
  "rejected": "badge-error",
  "interview": "badge-warning",
  "accepted": "badge-success"
}

defineProps<{
  item: Job
}>()
</script>