import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userImageStore = defineStore('images', () => {
  const imageLinks = ['../assets/images/image-product-1.jpg']
  const images = ref(imageLinks)

  return { images, imageLinks }
})

export const useCartStore = defineStore('addCart', () => {
  const quantity = ref(0)
  function increment() {
    quantity.value++
  }
  function decrement() {
    if (quantity.value <= 0) {
      return
    }
    quantity.value--
  }
  return { quantity, increment, decrement }
})
