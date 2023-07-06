<script setup>
import ProductImage from '@/components/ProductImages.vue'
import ProductDetails from '@/components/ProductDetails.vue'
</script>

<template>
  <section class="section-product u-margin-top-big">
    <div class="card-1 card">
      <div class="row section-product__view">
        <ProductImage />
        <ProductDetails />
      </div>
    </div>
  </section>
</template>

<style lang="scss"></style>
