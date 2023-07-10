import { defineStore } from 'pinia'
import { useStoreProduct } from './product'
import { ref, reactive } from 'vue'

const product = ""

export const useShowCartStore = defineStore('showCart', () => {
  const show = ref(true)
  function showCart() {
    show.value = !show.value
  }
  return { show, showCart }
})


