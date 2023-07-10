<script setup>
import { useCartStore, useStoreProduct, useStoreAddToCart } from '@/stores/product'

const product = useStoreProduct()
const cartStore = useCartStore()
const addToCart = useStoreAddToCart()

</script>

<template>
  <div class="col-1-of-2">
    <div class="product-details">
      <div class="product-details__container">
        <h3 class="product__brand">Nike</h3>
        <div class="product__name u-margin-bottom-small">vans</div>
        <div class="product__info u-margin-bottom-small">
          {{ product.product[0].details }}
        </div>
        <div class="product__price-box">
          <div class="product__price-now">
            <span class="product__price-value u-margin-right-small" id="product-price">{{
              product.product[0].price
            }}</span>
            <span class="product__price-discount">{{ product.product[0].discount }}</span>
          </div>
          <p class="product__price-then u-margin-bottom-small">
            {{ product.product[0].priceThen }}
          </p>
        </div>

        <div class="product__details-cart">
          <div class="product-quantity u-margin-right-small">
            <button class="product-quantity-minus button" id="minus" @click="cartStore.decrement">
              -
            </button>
            <input type="text" class="product-quantity-value" v-model="cartStore.quantity" />
            <button class="product-quantity-add button" id="add" @click="cartStore.increment">
              +
            </button>
          </div>

          <button class="add-to-cart" @click="addToCart.addCart">
            <span class="cart-icon u-margin-right-small"
              ><img class="cart-icon" src="../assets/images/icon-cart.svg" alt="cart-icon"
            /></span>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
