<script setup lang="ts">
import OrdersComponent from '@/components/LoggedInComponents/OrdersComponent.vue'
import SingleOrderComponent from '@/components/LoggedInComponents/SingleOrderComponent.vue'
import { useRoute } from 'vue-router'
import { watch } from 'vue'

const route = useRoute()

const getRouteComponent = (path: string | string[]) =>
  path.includes('view') ? SingleOrderComponent : OrdersComponent

let currentRoute = getRouteComponent(route.path)

watch(
  () => route.path,
  (newPath) => {
    currentRoute = getRouteComponent(newPath)
  }
)
</script>

<template>
  <component :is="currentRoute"></component>
</template>
