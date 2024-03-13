<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { useRouter } from 'vue-router'

    const storeName = ref('')
    const products = ref([])

    const router = useRouter()

    const storeId = router.currentRoute.value.params.storeId

    onMounted(async () => {
        try {
            const productResponse = await fetch(`http://127.0.0.1:3000/stores/${storeId}/products.json`)
            const productData = await productResponse.json()
            products.value = productData
            storeName.value = router.currentRoute.value.query.storeName
        } catch (error) {
            console.log(error.message)
        }
    })

</script>


<template>
    <div>
        <h2>Produtos da loja: {{ storeName }}</h2>
        <ul>
            <li v-for="product in products" :key="product.id">{{ product.title }}</li>
        </ul>
    </div>
</template>