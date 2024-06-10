<template>
  <div class="chat chat-start">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img alt="Tailwind CSS chat bubble component"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
    <div class="chat-header">
      {{ from }}
      <time class="text-xs opacity-50">Execution time: 0.122ms</time>
    </div>
    <div class="chat-bubble chat-bubble-accent" v-html="text"></div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  from: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<style></style>