<script setup lang="ts"></script>

<template>
  <section class="py-8 antialiased">
    <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="mx-auto max-w-5xl">
        <div class="gap-4 sm:flex sm:items-center sm:justify-between">
          <h2 class="text-xl font-semibold text-gray-900 sm:text-2xl">Meus pedidos</h2>
        </div>

        <div class="mt-6 flow-root sm:mt-8">
          <div class="divide-y divide-gray-200">
            <!-- Order -->
            <div class="flex flex-wrap items-center gap-x-10 gap-y-4 py-6">
              <!-- Store -->
              <dl class="w-1/2 sm:w-1/2 truncate lg:w-auto lg:flex-2">
                <dt class="text-base font-medium text-gray-500">Loja</dt>
                <dd class="mt-1.5 text-sm font-semibold text-gray-900 truncate">
                  <a href="#" class="hover:underline">Nome da loja</a>
                </dd>
              </dl>

              <!-- Date -->
              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">Data</dt>
                <dd class="mt-1.5 text-sm font-semibold text-gray-900">20/12/2023</dd>
              </dl>

              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">Preço</dt>
                <dd class="mt-1.5 text-sm font-semibold text-gray-900">R$ 47,56</dd>
              </dl>

              <!-- Status -->
              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-2">
                <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Status</dt>
                <dd class="mt-1.5 text-sm font-semibold text-gray-900">
                  Concluído <span>| #123</span>
                </dd>
              </dl>

              <!-- Actions -->
              <div
                class="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4"
              >
                <button
                  type="button"
                  class="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none lg:w-auto"
                >
                  Cancelar pedido
                </button>
                <a
                  href="orders/1/view"
                  class="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-deep-orange-500 focus:z-10 focus:outline-none lg:w-auto"
                  >Ver detalhes</a
                >
              </div>
            </div>
            <!-- Order -->
            <div class="flex flex-wrap items-center gap-x-10 gap-y-4 py-6">
              <!-- Store -->
              <dl class="w-1/2 sm:w-1/2 truncate lg:w-auto lg:flex-2">
                <dt class="text-base font-medium text-gray-500">Loja</dt>
                <dd class="mt-1.5 text-sm font-semibold text-gray-900 truncate">
                  <a href="#" class="hover:underline">Nome da loja</a>
                </dd>
              </dl>

              <!-- Date -->
              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">Data</dt>
                <dd class="mt-1.5 text-sm font-semibold text-gray-900">20/12/2023</dd>
              </dl>

              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">Preço</dt>
                <dd class="mt-1.5 text-sm font-semibold text-gray-900">R$ 47,56</dd>
              </dl>

              <!-- Status -->
              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-2">
                <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Status</dt>
                <dd class="mt-1.5 text-sm font-semibold text-gray-900">
                  Concluído <span>| #123</span>
                </dd>
              </dl>

              <!-- Actions -->
              <div
                class="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4"
              >
                <button
                  type="button"
                  class="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none lg:w-auto"
                >
                  Cancelar pedido
                </button>
                <a
                  href="orders/1/view"
                  class="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-deep-orange-500 focus:z-10 focus:outline-none lg:w-auto"
                  >Ver detalhes</a
                >
              </div>
            </div>
            <!-- Order -->
            <div class="flex flex-wrap items-center gap-x-10 gap-y-4 py-6">
              <!-- Store -->
              <dl class="w-1/2 sm:w-1/2 truncate lg:w-auto lg:flex-2">
                <dt class="text-base font-medium text-gray-500">Loja</dt>
                <dd class="mt-1.5 text-sm font-semibold text-gray-900 truncate">
                  <a href="#" class="hover:underline">Nome da loja</a>
                </dd>
              </dl>

              <!-- Date -->
              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">Data</dt>
                <dd class="mt-1.5 text-sm font-semibold text-gray-900">20/12/2023</dd>
              </dl>

              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt class="text-base font-medium text-gray-500">Preço</dt>
                <dd class="mt-1.5 text-sm font-semibold text-gray-900">R$ 47,56</dd>
              </dl>

              <!-- Status -->
              <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-2">
                <dt class="text-base font-medium text-gray-500 dark:text-gray-400">Status</dt>
                <dd class="mt-1.5 text-sm font-semibold text-gray-900">
                  Concluído <span>| #123</span>
                </dd>
              </dl>

              <!-- Actions -->
              <div
                class="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4"
              >
                <button
                  type="button"
                  class="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none lg:w-auto"
                >
                  Cancelar pedido
                </button>
                <a
                  href="orders/1/view"
                  class="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-deep-orange-500 focus:z-10 focus:outline-none lg:w-auto"
                  >Ver detalhes</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Navbar -->
        <nav
          class="mt-6 flex items-center justify-center sm:mt-8"
          aria-label="Page navigation example"
        >
          <ul class="flex h-8 items-center -space-x-px text-sm">
            <li>
              <a
                href="#"
                class="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <span class="sr-only">Previous</span>
                <svg
                  class="h-4 w-4 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m15 19-7-7 7-7"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >1</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >2</a
              >
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="z-10 flex h-8 items-center justify-center border border-primary-300 bg-primary-50 px-3 leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700"
                >3</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >...</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >100</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <span class="sr-only">Next</span>
                <svg
                  class="h-4 w-4 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>
