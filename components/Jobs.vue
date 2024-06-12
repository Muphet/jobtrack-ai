<template>
  <div class="overflow-x-auto">
    <table class="table">
      <thead>
        <tr>
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
    <button class="btn" @click="addJobListing()">add element</button>
  </div>
</template>

<script lang="ts" setup>
import type { Job, contractType, statusType, tagType } from '~/types/Job';
import { useJobsStore } from '~/stores/jobs';
import {v4 as uuidv4} from 'uuid'
const store = useJobsStore();

const addJobListing = (
  name:string = 'company name',
  location:string = 'location',
  position:string = 'position',
  tag:tagType = null,
  salary:number = 0,
  contract:contractType = 'permanent',
  time:string = new Date().toString(),
  status:statusType = 'applied'
) => {
  let id = uuidv4() as string;
  let newJob = {
    id, name, location, position, tag, salary, contract, time, status
  }
  store.addJob(newJob)
}
const removeJobListing = (id:string) => {
  if (!id) return;
  store.removeJob(id)
}
const editJobListing = (job:Job) => {
  if (!job) return;
  store.editJob(job);
}

const filtered = computed(() => {
  return store.getAllJobs.toSorted((a,b) => a.time < b.time ? 1 : -1)
})
</script>