<script setup lang="ts">
import { FormKit } from '@formkit/vue'
</script>

<template>
  <header class="sticky top-0 z-50 flex w-full shadow-sm">
    <div class="flex w-full items-center justify-center py-4 px-4 shadow-sm md:px-6 2xl:px-11">
      <!-- Logo -->
      <a href="/">
        <img src="@/assets/image/deliverme.svg" alt="Consumy" class="h-4 w-auto" />
      </a>
    </div>
  </header>

  <main class="overflow-x-hidden">
    <div class="max-w-screen-lg w-full px-8 m-auto">
      <div class="flex gap-3 justify-between items-start my-6 mx-8">
        <!-- Infos -->
        <div class="mr-5 mb-6 max-w-[500px] space-y-10">
          <h1 class="text-3xl font-semibold mb-10">Finalize seu pedido</h1>

          <!-- Adress -->
          <div class="space-y-4">
            <h2 class="text-lg">Detalhes da entrega</h2>

            <div class="grid grid-cols-2 gap-4">
              <FormKit type="text" name="CEP" label="CEP" />
              <FormKit type="text" name="street" label="Rua" />
              <FormKit type="text" name="number" label="Número" />
              <FormKit type="text" name="apto" label="Complemento" help="Apartamento/Bloco/Casa" />
              <FormKit type="text" name="city" label="Cidade" />
              <FormKit type="text" name="state" label="Estado" />
            </div>
          </div>

          <!-- Payment -->
          <div class="space-y-4 border-t pt-10">
            <h2 class="text-lg">Detalhes do pagamento</h2>

            <div class="">
              <FormKit type="text" name="card" label="Número do cartão" />
              <div class="flex gap-4">
                <FormKit type="text" name="date" label="Data de validade" />
                <FormKit type="text" name="cvv" label="CVV" />
              </div>
            </div>
          </div>
        </div>

        <!-- Resume -->
        <div class="flex w-[420px] bg-gray-50 rounded-lg shadow-md self-start">
          <div class="w-full h-full overflow-hidden">
            <!-- Restaurant -->
            <div class="flex flex-col my-5 mx-7">
              <p class="text-sm text-gray-500">Seu pedido em</p>
              <p class="text-lg font-medium">Nome do restaurante</p>
            </div>

            <!-- Products -->
            <div class="border-y py-4">
              <div class="flex flex-col gap-2 px-7">
                <div class="flex justify-between">
                  <p>Nome do produto</p>
                  <p>R$ 00,00</p>
                </div>
                <div class="flex justify-between">
                  <p>Nome do produto</p>
                  <p>R$ 00,00</p>
                </div>
                <div class="flex justify-between">
                  <p>Nome do produto</p>
                  <p>R$ 00,00</p>
                </div>
              </div>
            </div>

            <!-- Total -->
            <div class="px-7">
              <div class="flex justify-between my-5 font-bold">
                <p>Total</p>
                <p>R$ 00,00</p>
              </div>
              <FormKit
                type="submit"
                label="Realizar pagamento"
                input-class="w-full flex justify-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
