<script setup lang="ts">
    const message = defineModel('message', {default: "Hello World"})

    function limpar() {
        message.value = ""
    }

</script>

<template>
    <div>
        <h1>Meu primeiro componente</h1>
        <p>Dizendo olá, para variar: {{ message }}</p>
        <input v-model="message" />
        <div><button @click="limpar">apaga tudo!</button></div>
    </div>

    
</template>