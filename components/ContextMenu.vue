<template>
  <div
    v-if="getShowContext" 
    @click="close" @contextmenu.prevent.stop
    class="fixed inset-0 w-full h-full bg-transparent z-10 cursor-pointer"
  >
    <div class="absolute menu bg-base-200 w-56 rounded-box" :style="style">
      <li class="menu-title">{{ item.name }}</li>
      <li><a>Edit</a></li>
      <li @click="deleteJob" class="text-error"><a>Delete</a></li>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useJobsStore, type Job } from '#imports';
const store = useJobsStore()

const {getShowContext} = storeToRefs(store)

const item = computed(() => {
  return store.getContextData.item
})

const style = computed(() => {
  let {top: fromTop, left: fromLeft} = store.getContextData
  // move context menu to the left or top if it doesn't fit on screen
  const xmax = window.innerWidth
  const ymax = window.innerHeight
  const menuWidth = 224
  const menuHeight = 124
  xmax - fromLeft < menuWidth ? fromLeft = fromLeft - menuWidth : fromLeft
  ymax - fromTop < menuHeight ? fromTop = fromTop - menuHeight : fromTop
  return {
    top: fromTop+'px',
    left: fromLeft+'px'
  }
})
const close = () => {
  store.closeContext()
}
const deleteJob = () => {
  store.removeJob(item.value.id)
}
</script>