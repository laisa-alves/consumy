<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

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
    ref="target"
  >
    <div class="mt-[80px] mb-[88px] flex flex-col py-4 px-6 overflow-y-auto">
      <button @click="sidebarStore.isSidebarOpen = false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="mt-3">
        <p class="text-xs">Pedido realizado em</p>
        <p class="text-base mt-1">Nome da loja</p>
      </div>

      <!-- Item -->
      <div>
        <div class="mt-4 border-b border-black">
          <p class="text-xs mb-1">Categoria</p>
        </div>
        <div class="flex items-center justify-between mt-4">
          <p class="text-sm"><span>1x</span> Produto 1</p>
          <p class="text-sm">R$ 10,00</p>
        </div>
        <div class="flex mt-1 gap-3">
          <p class="text-xs">Editar</p>
          <p class="text-xs">Remover</p>
        </div>
      </div>
    </div>

    

    <!-- Footer -->
    <div class="fixed w-full bottom-0 right-0 left-0 py-1 px-6 bg-white">
      <!-- Total -->
      <div class="flex justify-between font-medium">
        <p>Total</p>
        <p>R$ 20,00</p>
      </div>
      <!-- Button -->
      <div class="mt-4">
        <button class="w-full bg-black text-white py-2 rounded-md">Finalizar compra</button>
      </div>
    </div>
  </aside>
</template>
