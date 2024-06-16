<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from 'vue-router'
</script>

<template>
  <section class="w-[560px] flex flex-col gap-4">
    <RouterLink :to="{ name: 'orders' }" class="text-sm text-gray-600 hover:text-deep-orange-600">
      <div class="flex gap-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        <p>Voltar</p>
      </div>
    </RouterLink>

    <!-- Store -->
    <div>
      <p class="text-2xl font-medium">Nome da loja</p>
    </div>

    <!-- Delivery -->
    <div class="text-sm border-b pb-4">
      <p class="text-gray-600">Entrega</p>
      <p class="mt-2 font-medium">21/03/23 | 21:34</p>
    </div>

    <!-- Products -->
    <div class="border-b pb-4">
      <p class="text-sm text-gray-600">Produtos</p>
      <div class="flex flex-col gap-4">
        <div class="mt-2 flex justify-between font-semibold">
          <p><span>1x</span> Nome do produto</p>
          <p>R$ 10,00</p>
        </div>
        <div class="mt-2 flex justify-between font-semibold">
          <p><span>1x</span> Nome do produto</p>
          <p>R$ 10,00</p>
        </div>
      </div>
    </div>

    <!-- Total -->
    <div class="border-b pb-4 flex justify-between font-semibold">
      <p>Total</p>
      <p>R$ 100,00</p>
    </div>

    <!-- Adress -->
    <div class="text-sm">
      <p class="text-gray-600">Endereço</p>
      <p>Rua, número, bairro, cidade, estado</p>
    </div>

    <div class="text-sm">
      <p class="text-gray-600">Número do pedido</p>
      <p>#9189</p>
    </div>

    <div class="text-sm">
      <p class="text-gray-600">Data do pedido</p>
      <p>21/03/23 | 20:30</p>
    </div>

    <!-- Order state -->
    <div class="text-sm">
      <p class="text-gray-600">Status do pedido</p>
      <p>Entregue</p>
    </div>
  </section>
</template>
