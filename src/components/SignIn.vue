<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { Auth } from '../auth'

const router = useRouter()
const email = defineModel<string>('email')
const password = defineModel<string>('password')
const awaiting = ref(false)
const remember = defineModel<boolean>('remember', { default: true })

function onSubmit(form: Event) {
  let auth = new Auth(remember.value)

  awaiting.value = true
  auth.signIn(
    email.value || '',
    password.value || '',
    () => {
      awaiting.value = false
      router.push('/')
    },
    () => {
      awaiting.value = false
      console.log('Não foi dessa vez!')
    }
  )
}
</script>

<template>
  <div>
    <h1>Sign In</h1>
    <form @submit.prevent="onSubmit">
      <label>E-Mail:</label>
      <input type="email" v-model="email" /><br />

      <label>Senha:</label>
      <input type="password" v-model="password" /><br />

      <label>Remember me:</label>
      <input type="checkbox" v-model="remember" /><br />

      <button type="submit" v-show="!awaiting">Sign In</button>
    </form>
  </div>
</template>
