<script setup lang="ts">
import { FormKit } from '@formkit/vue'
</script>

<template>
  <!-- Form send error -->
  <div role="alert" class="mb-2 rounded-md border-s-4 border-red-500 bg-red-50 p-4">
    <strong class="block font-medium text-red-800">Ops! Algo deu errado.</strong>
    <p class="mt-2 text-sm text-red-700">
      Por favor, verifique sua conexão com a internet e tente novamente mais tarde.
    </p>
  </div>

  <!-- Form -->
  <div>
    <FormKit type="form">
      <FormKit
        type="email"
        name="email"
        label="E-mail"
        validation="required|email"
        validation-visibility="blur"
      />
      <FormKit
        type="password"
        name="password"
        label="Senha"
        value="super-secret"
        validation="required"
        validation-visibility="blur"
      />

      <FormKit type="checkbox" name="remember" label="Lembre-se de mim" decorator-icon="check" />
    </FormKit>
  </div>
</template>
