<script setup lang="ts">
import ProductModal from '@/components/ProductModal.vue'
import { ref } from 'vue'

const categories = [
  { name: 'Entrada', id: 'APPETIZER' },
  { name: 'Prato principal', id: 'MAIN_COURSE' },
  { name: 'Acompanhamento', id: 'SIDE_DISH' },
  { name: 'Sobremesa', id: 'DESSERT' },
  { name: 'Bebida', id: 'BEVERAGE' }
]

const product = [
  {
    name: 'Nome do produto',
    description: 'Descrição do produto',
    price: 10.0,
    category: 'APPETIZER'
  },
  {
    name: 'Nome do produto',
    description: 'Descrição do produto',
    price: 10.0,
    category: 'APPETIZER'
  },
  {
    name: 'Nome do produto',
    description: 'Descrição do produto',
    price: 10.0,
    category: 'APPETIZER'
  },
  {
    name: 'Nome do produto',
    description: 'Descrição do produto',
    price: 10.0,
    category: 'APPETIZER'
  },
  {
    name: 'Nome do produto',
    description: 'Descrição do produto',
    price: 10.0,
    category: 'APPETIZER'
  },
  {
    name: 'Nome do produto',
    description: 'Descrição do produto',
    price: 10.0,
    category: 'MAIN_COURSE'
  },
  {
    name: 'Nome do produto',
    description: 'Descrição do produto',
    price: 10.0,
    category: 'MAIN_COURSE'
  },
  {
    name: 'Nome do produto',
    description: 'Descrição do produto',
    price: 10.0,
    category: 'MAIN_COURSE'
  },
  {
    name: 'Nome do produto',
    description: 'Descrição do produto',
    price: 10.0,
    category: 'SIDE_DISH'
  },
  {
    name: 'Nome do produto',
    description: 'Descrição do produto',
    price: 10.0,
    category: 'SIDE_DISH'
  },
  {
    name: 'Nome do produto',
    description: 'Descrição do produto',
    price: 10.0,
    category: 'SIDE_DISH'
  },
  {
    name: 'Nome do produto',
    description: 'Descrição do produto',
    price: 10.0,
    category: 'DESSERT'
  },
  {
    name: 'Nome do produto',
    description: 'Descrição do produto',
    price: 10.0,
    category: 'DESSERT'
  },
  {
    name: 'Nome do produto',
    description: 'Descrição do produto',
    price: 10.0,
    category: 'DESSERT'
  },
  {
    name: 'Nome do produto',
    description: 'Descrição do produto',
    price: 10.0,
    category: 'BEVERAGE'
  },
  {
    name: 'Nome do produto',
    description: 'Descrição do produto',
    price: 10.0,
    category: 'BEVERAGE'
  },
  {
    name: 'Nome do produto',
    description: 'Descrição do produto',
    price: 10.0,
    category: 'BEVERAGE'
  }
]

const filteredProducts = (categoryId: string) => {
  return product.filter((p) => p.category === categoryId)
}

const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value
}
</script>

<template>
  <ProductModal :showModal="showModal" @close="toggleModal" />

  <div class="w-full flex gap-4 items-center pb-4 border-b">
    <div>
      <img
        src="https://via.placeholder.com/150"
        alt="Nome da loja"
        class="w-20 h-20 rounded-full"
      />
    </div>
    <div class="flex flex-col">
      <h1 class="text-2xl">Nome da loja</h1>
      <p class="text-sm">Descrição da loja</p>
    </div>
  </div>

  <!-- Products Categories -->
  <template v-for="category in categories" :key="category.id">
    <div class="flex flex-col pt-8 pb-4 border-b">
      <h2 class="text-lg py-3">{{ category.name }}</h2>

      <!-- Product card -->
      <div class="flex flex-wrap gap-8 max-w-3xl">
        <template v-for="product in filteredProducts(category.id)" :key="product.id">
          <button @click="toggleModal">
            <div class="flex flex-col bg-red-50 w-[160px]">
              <img
                src="https://via.placeholder.com/150"
                alt="Nome do produto"
                class="w-[160px] h-[100px] rounded-lg"
              />
              <div class="mt-1 text-start">
                <h3 class="text-sm font-bold">{{ product.name }}</h3>
                <p class="text-xs mt">{{ product.description }}</p>
                <p class="text-xs mt-1 font-bold text-deep-orange-500">
                  {{ $formatCurrency(product.price) }}
                </p>
              </div>
            </div>
          </button>
        </template>
      </div>
    </div>
  </template>
</template>
