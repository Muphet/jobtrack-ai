<template>
  <label class="swap swap-rotate btn btn-ghost">
    <input type="checkbox" class="theme-controller" value="dark" :checked="checked" v-model="checked" @click="toggleColorMode"/>
    <Icon class="swap-on" name="material-symbols:dark-mode-outline" size="24"/>
    <Icon class="swap-off" name="material-symbols:sunny-outline" size="24"/>
  </label>
</template>

<script lang="ts" setup>
import {useStorage} from "@vueuse/core"
const colorMode = useColorMode()
const checked = ref(false)
const darkMode = useStorage('dark-mode', true);
//TODO: replace tailwind darkmode with daisyUI themes
const toggleColorMode = () => {
  darkMode.value = !darkMode.value
  if(darkMode.value) {
    colorMode.preference = 'dark'
  } else {
    colorMode.preference = 'light'
  }
}
onMounted(() => {
  checked.value = !darkMode.value
})
</script>