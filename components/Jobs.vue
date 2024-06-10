<template>
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
      <Item v-for="i in items" :key="i.id" :item="i"/>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import type { Job } from '~/types/Job';
const items = ref<Job[]>([
  { id: 1, name: "Company 1", location: "London", position: "Vue.js Developer", tag: "mid", salary: 12345, contract: "permanent", time: "2024-06-11Z01:17:34", status: "interview" },
  { id: 2, name: "Company 2", location: "London", position: "Front-end Developer", tag: "mid", salary: 0, contract: "b2b", time: "2024-06-10Z01:00:00", status: "rejected" },
  { id: 3, name: "Company 3", location: "Paris", position: "Front-end Developer", tag: "junior", salary: 0, contract: "permanent", time: "2024-06-10Z01:00:00", status: "applied" }
])
</script>

<style></style>