<script setup>
import { useShowCartStore } from '@/stores/cart'
import { useStoreAddToCart } from '@/stores/product'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const show = useShowCartStore()
const cartItem = useStoreAddToCart()
console.log(cartItem.cart[0])
</script>

<template>
  <section class="section-cart" :class="{ active: show.show }">
    <div class="cart-empty">
      <h3 class="cart-empty__heading">Cart</h3>
      <div class="cart-empty__body" v-if="cartItem.cart.length === 0">
        <p class="cart-empty__body__text">Your cart is empty</p>
      </div>
      <div class="cart-items" v-if="cartItem.cart.length > 0">
        <pre>{{ cartItem.cart.length }}</pre>
        <div v-for="item of cartItem.cart[0]" :key="item">
          <div class="cart-item">
            <div class="cart-item__left">
              <div class="cart-item__left__img">
                <img src="@/assets/images/image-product-1.jpg" alt="" />
              </div>
              <div class="cart-item__left__details">
                <div class="cart-item__name">{{ item.name }}</div>
                <div class="cart-item__price">{{ item.price }}</div>
              </div>
            </div>
            <div class="cart-item__right">
              <i class="cart-item__right__remove" @click="cartItem.removeItem">
                <font-awesome-icon icon="fa-solid fa-trash" />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cart-list">
      <h3 class="cart-list__heading">Cart</h3>
      <p class="cart-list__body"></p>
      <button class="cart-list__checkout">checkout</button>
    </div>
  </section>
</template>
