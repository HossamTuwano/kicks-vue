<script setup>
import { userImageStore } from '@/stores/product'
import { onMounted } from 'vue'

let imageLink = userImageStore()
let img

onMounted(() => {
  img = imageLink.images[0]
})


</script>

<template>
  <div class="col-1-of-2">
    <div class="product__images--main u-margin-bottom-small">
      <div class="product__images-big">
        <img :src="img" alt="sneaker img" class="product__images-big image-big" />
      </div>
    </div>

    <div class="product__images--extra row">
      <div class="product__images--wrapper">
        <div class="col-1-of-4 product__images--image u-margin-right-small">
          <img class="sneaker-image__extra" src="../assets/images/image-product-1.jpg" alt="" />
        </div>
        <div class="col-1-of-4 product__images--image u-margin-right-small">
          <img class="sneaker-image__extra" src="../assets/images/image-product-2.jpg" alt="" />
        </div>
        <div class="col-1-of-4 product__images--image u-margin-right-small">
          <img class="sneaker-image__extra" src="../assets/images/image-product-3.jpg" alt="" />
        </div>
        <div class="col-1-of-4 product__images--image">
          <img class="sneaker-image__extra" src="../assets/images/image-product-4.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
