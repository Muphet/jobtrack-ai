<template>
  <div class="chat" :class="from === 'AI' ? 'chat-start' : 'chat-end'">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
        <img alt="Tailwind CSS chat bubble component"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
      </div>
    </div>
    <div class="chat-header">
      <span v-if="from">{{ from }}</span>
    </div>
    <div class="chat-bubble" :class="accent" v-html="text"></div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  from: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: true
  },
  accent: {
    type: String,
    required: false
  }
})
</script>

<style></style>