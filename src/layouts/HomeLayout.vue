<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import ShopbagDrawer from '@/components/ShopbagDrawer.vue'
import { RouterView } from 'vue-router'



</script>

<template>
  <!-- === Page wrapper start === -->
  <div class="flex h-screen overflow-hidden">
    <!-- === Content area start ===  -->
    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <!-- === Shopbag Drawer === -->
      <ShopbagDrawer />

      <!-- === Header start === -->
      <HeaderComponent />

      <!-- === Content start === -->
      <div class="py-8 px-20 h-screen">
        <RouterView />
      </div>
    </div>
  </div>
</template>
