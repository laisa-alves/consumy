<script setup lang="ts">
// Import images
import burger from '@/assets/image/categories_icons/burger.svg'
import pizza from '@/assets/image/categories_icons/pizza.svg'
import sushi from '@/assets/image/categories_icons/sushi.svg'
import donut from '@/assets/image/categories_icons/donut.svg'
import dish from '@/assets/image/categories_icons/dish.svg'
import bread from '@/assets/image/categories_icons/bread.svg'
import noodles from '@/assets/image/categories_icons/noodles.svg'
import cutlery from '@/assets/image/categories_icons/cutlery.svg'
import brocoli from '@/assets/image/categories_icons/brocoli.svg'
import french_fries from '@/assets/image/categories_icons/french_fries.svg'
import various from '@/assets/image/categories_icons/various.svg'

const categories = [
  {
    id: 1,
    name: 'Hambúrger',
    image: burger
  },
  {
    id: 2,
    name: 'Pizza',
    image: pizza
  },
  {
    id: 3,
    name: 'Japonesa',
    image: sushi
  },
  {
    id: 4,
    name: 'Sobremesa',
    image: donut
  },
  {
    id: 5,
    name: 'Vegetariana',
    image: dish
  },
  {
    id: 5,
    name: 'Padaria',
    image: bread
  },
  {
    id: 5,
    name: 'Massa',
    image: noodles
  },
  {
    id: 5,
    name: 'Brasileira',
    image: cutlery
  },
  {
    id: 5,
    name: 'Saudável',
    image: brocoli
  },
  {
    id: 5,
    name: 'Fast Food',
    image: french_fries
  },
  {
    id: 5,
    name: 'Variada',
    image: various
  }
]
</script>

<template>
  <div class="block box-border bg-slate-100">
    <div class="overflow-visible bg-red-50">
      <div class="relative w-full h-full flex box-content transform bg-yellow-50 overflow-auto">
        <template v-for="category in categories" :key="category.id">
          <div
            class="mr-3 w-auto flex-shrink-0 h-full relative transform box-border block bg-green-50"
          >
            <a
              href="#"
              class="flex flex-col items-center w-fit cursor-pointer p-3 mr-4 mb-2 bg-white rounded-lg transition-all"
            >
              <div class="w-[60px] h-[40px] block relative box-border">
                <span
                  class="box-border inline-block overflow-hidden w-[60px] h-[40px] relative opacity-1"
                >
                  <img
                    :src="category.image"
                    alt=""
                    class="m-auto w-full h-full object-contain "
                  />
                </span>
              </div>
              <span class="flex overflow-hidden mt-1">{{ category.name }}</span>
            </a>
          </div>
        </template>
      </div>
    </div>
  </div>

  
</template>
