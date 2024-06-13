<template>
  <div class="p-4">
    <table class="table table-pin-rows">
      <thead>
        <tr class="bg-base-200">
          <th>Name</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Application time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <Item v-for="i in filtered" :key="i.id" :item="i"/>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { useJobsStore } from '~/stores/jobs';
const store = useJobsStore();

const filtered = computed(() => {
  return store.getAllJobs.toSorted((a,b) => a.time < b.time ? 1 : -1)
})
</script>