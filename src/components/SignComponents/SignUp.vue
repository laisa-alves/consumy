<script setup lang="ts">
import { FormKit } from '@formkit/vue'
</script>

<template>
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
      <FormKit
        type="password"
        name="password"
        label="Confirmação de senha"
        value="super-secret"
        validation="required|confirm"
        validation-visibility="blur"
      />

      <FormKit type="checkbox" name="remember" label="Lembre-se de mim" decorator-icon="check" />
    </FormKit>
  </div>
</template>
