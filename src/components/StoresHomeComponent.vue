<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="mt-10">
    <h1 class="text-2xl">Lojas</h1>

    <div class="my-4 grid grid-cols-2 gap-4">
      <!-- Store card -->
      <div class="rounded-lg hover:bg-gray-100">
        <RouterLink :to="{ name: 'store' }" class="text-sm font-semibold leading-6">
          <div class="flex p-5">
            <img src="https://via.placeholder.com/150" alt="Store" class="w-20 h-20 rounded-lg" />
            <div class="ml-4 flex flex-col justify-center">
              <h2 class="text-lg font-medium">Nome da loja</h2>
              <p class="text-sm font-light">Descrição da loja</p>
            </div>
          </div>
        </RouterLink>
      </div>
      <!-- Store card -->
      <div class="bg-green-50 rounded-lg hover:bg-deep-orange-50">
        <RouterLink :to="{ name: 'store' }" class="text-sm font-semibold leading-6">
          <div class="flex p-5">
            <img src="https://via.placeholder.com/150" alt="Store" class="w-20 h-20 rounded-lg" />
            <div class="ml-4 flex flex-col justify-center">
              <h2 class="text-lg font-medium">Nome da loja</h2>
              <p class="text-sm font-light">Descrição da loja</p>
            </div>
          </div>
        </RouterLink>
      </div>
      <!-- Store card -->
      <div class="bg-green-50 rounded-lg hover:bg-deep-orange-50">
        <RouterLink :to="{ name: 'store' }" class="text-sm font-semibold leading-6">
          <div class="flex p-5">
            <img src="https://via.placeholder.com/150" alt="Store" class="w-20 h-20 rounded-lg" />
            <div class="ml-4 flex flex-col justify-center">
              <h2 class="text-lg font-medium">Nome da loja</h2>
              <p class="text-sm font-light">Descrição da loja</p>
            </div>
          </div>
        </RouterLink>
      </div>
      <!-- Store card -->
      <div class="bg-green-50 rounded-lg hover:bg-deep-orange-50">
        <RouterLink :to="{ name: 'store' }" class="text-sm font-semibold leading-6">
          <div class="flex p-5">
            <img src="https://via.placeholder.com/150" alt="Store" class="w-20 h-20 rounded-lg" />
            <div class="ml-4 flex flex-col justify-center">
              <h2 class="text-lg font-medium">Nome da loja</h2>
              <p class="text-sm font-light">Descrição da loja</p>
            </div>
          </div>
        </RouterLink>
      </div>

      
    </div>
  </div>
</template>
