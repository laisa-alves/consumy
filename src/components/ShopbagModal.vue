<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue';

// Responsive sidebar
const target = ref(null)
const sidebarStore = useSidebarStore()

onClickOutside(target, () => {
  sidebarStore.isSidebarOpen = false
})

</script>

<template>
  <aside
    class="absolute right-0 top-0 z-10 flex h-screen w-96 flex-col overflow-y-hidden bg-red-50 drop-shadow-sm duration-300 ease-linear"
    :class="{
      'translate-x-0': sidebarStore.isSidebarOpen,
      'translate-x-full': !sidebarStore.isSidebarOpen
    }"
  >
    oi
  </aside>
</template>
