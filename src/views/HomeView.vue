<script setup>
import NavigationBar from '../components/NavigationBar.vue'
import ProductView from './ProductView.vue'
</script>

<template>
  <main class="container">
    <NavigationBar />
    <ProductView />
  </main>
</template>

<style lang="scss">
.container {
  margin: auto;
  width: 960px;
  position: relative;
}
</style>
