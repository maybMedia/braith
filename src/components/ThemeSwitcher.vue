// ThemeSwitcher.vue
<script lang="ts">
import { ref, watch } from 'vue'

export default {
  setup() {
    const theme = ref(localStorage.getItem('theme') || 'light')

    watch(theme, (newTheme) => {
      document.body.classList.toggle('dark', newTheme === 'dark')
    })

    const handleThemeSwitch = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', theme.value)
    }

    return {
      theme,
      handleThemeSwitch,
    }
  },
}
</script>

<template>
  <div>
    <button class="theme-switcher-button" aria-label="Switch theme" @click="handleThemeSwitch">
      <svg v-if="theme === 'dark'" src="../assets/icons/moon.svg" width="24" height="24"></svg>
      <svg v-else src="../assets/icons/sun.svg" width="24" height="24"></svg>
    </button>
  </div>
</template>

<style scoped>
.theme-switcher-button {
  background-color: var(--color-tertiary);
  border: none;
  width: 3rem;
  height: 3rem;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  cursor: pointer;
  color: var(--color-primary);
}
</style>
