<script setup lang="ts">
import { useRoute } from 'vue-router'
import SignIn from '@/components/SignComponents/SignIn.vue'
import SignUp from '@/components/SignComponents/SignUp.vue'

const route = useRoute()

const currentRoute = route.path.includes('signin') ? SignIn : SignUp
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img src="@/assets/image/deliverme.svg" alt="Deliver me" class="mx-auto h-8 w-auto" />
      <h2
        class="mt-10 text-center text-xl font-bold leading-8 tracking-tight text-gray-900"
      >
        Faça login ou se cadastre para continuar
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
      <component :is="currentRoute"></component>
    </div>
  </div>
</template>
