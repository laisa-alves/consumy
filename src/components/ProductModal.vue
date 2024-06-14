<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{ showModal: boolean }>()
const $emit = defineEmits(['close'])
</script>

<template>
  <div
    v-if="showModal"
    class="flex items-center fixed top-0 left-0 right-0 bottom-0 h-full bg-black bg-opacity-30 z-50 pointer-events-none"
  >
    <div
      class="absolute overflow-y-auto overflow-x-hidden pointer-events-auto inset-0 flex justify-center items-center"
    >
      <div class="max-w-[960px] w-full overflow-y-auto justify-center flex h-fit">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          <!-- Modal content -->
          <div class="relative p-4 bg-white rounded-lg shadow sm:p-5">
            <!-- Modal header -->
            <div class="flex justify-between mb-4 rounded-t sm:mb-5">
              <div class="text-lg text-gray-900 md:text-xl">
                <h3 class="font-semibold">Nome do produto</h3>
                <p class="font-bold">R$ 9,00</p>
              </div>
              <div>
                <button
                  aria-label="Fechar modal"
                  @click="$emit('close')"
                  class="p-2 rounded-full hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <dl>
              <dt class="mb-2 font-semibold leading-none text-gray-900">Descrição</dt>
              <dd class="mb-4 font-light text-sm text-gray-700 sm:mb-5">Descrição do produto</dd>
              <dt class="mb-2 font-semibold leading-none text-gray-900">Categoria</dt>
              <dd class="mb-4 font-light text-sm text-gray-700 sm:mb-5">Nome da categoria</dd>
            </dl>

            <div class="flex gap-6 justify-between items-center">
              <!-- Quantity button -->
              <div class="flex items-center rounded border border-gray-200">
                <button
                  type="button"
                  class="size-12 leading-10 text-gray-600 transition hover:opacity-75"
                >
                  &minus;
                </button>
                <input
                  type="number"
                  id="quantity"
                  value="10"
                  class="h-10 w-8 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                />
                <button
                  type="button"
                  class="size-12 leading-10 text-gray-600 transition hover:opacity-75"
                >
                  &plus;
                </button>
              </div>

              <!-- Add to cart button -->
              <button
                type="button"
                class="w-[240px] flex-grow px-5 py-3 text-white bg-deep-orange-600 rounded hover:bg-deep-orange-700"
              >
                <div class="flex justify-between font-medium">
                  <span>Adicionar</span>
                  <span>R$ 90,00</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
