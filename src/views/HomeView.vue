<script setup>
import NavigationBar from '../components/NavigationBar.vue'
import ProductView from './ProductView.vue'
import CartItem from '../components/CartItem.vue'
import { useShowCartStore } from '../stores/cart'

const show = useShowCartStore()
</script>

<template>
  <main class="container">
    <NavigationBar />
    <ProductView />
    <CartItem :is="true" />
  </main>
</template>

<style lang="scss">
.container {
  margin: auto;
  width: 960px;
  position: relative;
}
</style>
