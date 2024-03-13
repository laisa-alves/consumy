<script setup lang="ts">
    import {ref, onMounted } from 'vue'

    // Declaração de dados reativos
    const stores = ref([])

    // Lógica para buscar dados na API após montar o componente
    onMounted(async () => {
        try {
            const storesResponse = await fetch('http://127.0.0.1:3000/stores.json')
            const storesData = await storesResponse.json()
            stores.value = storesData

        } catch (error) {
            console.error(message)
        }
    })

</script>

<template>
    <div>
        <h1>Lojas cadastradas</h1>

        <ul>
            <li v-for="store in stores" :key="store.id">
                <RouterLink :to="{ path: '/stores/' + store.id + '/products', query: { storeName: store.name } }">
                    {{ store.name }}
                </RouterLink>
            </li>
        </ul>
        <RouterView />
    </div>
</template>
