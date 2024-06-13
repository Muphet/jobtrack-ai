<template>
  <div class="flex flex-col inset-0 h-screen w-screen overflow-hidden">
    <div class="flex z-[1] p-4 h-16 w-full justify-between items-center border-b border-slate-700/50">
      <div class="flex items-center space-x-2">
        <span>JobTrack-AI</span>
        <button class="btn btn-accent-content btn-sm text-accent" @click="addTestItem">
          <Icon name="material-symbols:add-circle-rounded"/>
          Add test entry
        </button>
      </div>
      <div class="flex items-center">
        <ThemeSelector />
        <LangSelector />
        <div class="divider divider-horizontal divider-neutral"></div>
        <User />
      </div>
    </div>
    <AI />
    <main class="overflow-x-auto">
      <Jobs />
      <ContextMenu />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useJobsStore } from './stores/jobs';
const store = useJobsStore()
const addTestItem = () => {
  store.addJob({})
}
</script>