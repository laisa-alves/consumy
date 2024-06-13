<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import ShopbagModal from '@/components/ShopbagModal.vue'
</script>

<template>
  <!-- === Page wrapper start === -->
  <div class="flex h-screen overflow-hidden">
    
    <!-- === Content area start ===  -->
    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <!-- === Shopbag modal === -->
      <ShopbagModal />
      
      <!-- === Header start === -->
      <HeaderComponent />

    </div>
  </div>
</template>
