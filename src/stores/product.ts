import { defineStore } from 'pinia'
import { ref } from 'vue'
import { reactive } from 'vue'

export const userImageStore = defineStore('images', () => {
  const imageLinks = ['@/assets/images/image-product-1.jpg']
  const images = ref(imageLinks)

  return { images }
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

export const useStoreProduct = defineStore('product', () => {
  const product = reactive([
    {
      brand: 'Nike',
      name: 'vans',
      details:
        ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam pariatur corrupti aperiamquia unde perferendis corporis porro modi eum sapiente',
      price: '$125.00',
      discount: '50%',
      priceThen: '$250.00',
      imgUrl: '../assets/images/image-product-3.jpg'
    }
  ])

  return { product }
})

export const useStoreAddToCart = defineStore('addToCart', () => {
  const product = useStoreProduct().product
  const quantity = useCartStore().quantity
  const cart = reactive([])
  function addCart() {
    for (let i = quantity; i <= quantity; i++) {
      console.log(quantity)
      cart.push(product)
    }
  }

  function removeItem() {
    cart.splice(0, 1)
  }

  return { cart, addCart, removeItem }
})
