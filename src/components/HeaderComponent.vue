<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { RouterLink } from 'vue-router'

const { toggleSidebar } = useSidebarStore()
</script>

<template>
  <header class="sticky top-0 z-50 flex w-full bg-white drop-shadow-sm">
    <div
      class="flex flex-grow items-center justify-between gap-6 py-4 px-4 shadow-sm md:px-6 2xl:px-11"
    >
      <!-- Logo -->
      <a href="/">
        <img src="@/assets/image/deliverme.svg" alt="Consumy" class="h-4 w-auto" />
      </a>

      <!-- Search bar -->
      <form action="#" method="GET" class="block pl-2">
        <label for="topbar-search" class="sr-only">Pesquisa</label>
        <div class="relative mt-1 w-96">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            name="search"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-deep-orange-400 focus:border-deep-orange-500 block w-full pl-9 p-2.5"
            placeholder="Busque por loja"
          />
        </div>
      </form>

      <!-- Login -->
      <div class="flex items-center">
        <div class="pr-3 border-r">
          <RouterLink :to="{ name: 'signin' }"
            class="inline-flex items-center cursor-pointer gap-2 justify-center h-10 px-4 font-semibold text-sm tracking-wide text-deep-orange-600 transition duration-200 rounded-full hover:ring-1 hover:ring-deep-orange-600 hover:bg-deep-orange-50"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </span>
            Entrar
          </RouterLink>
        </div>

        <!-- Shopbag -->
        <div class="pl-3">
          <button
            type="button"
            @click="
              () => {
                toggleSidebar()
              }
            "
            class="z-20 block rounded-full py-2 px-4 hover:bg-gray-100 transition duration-200"
          >
            <div class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 text-deep-orange-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <div class="flex flex-col text-xs">
                <span>R$ 0,00</span>
                <span>1 item</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
