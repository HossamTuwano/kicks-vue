import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userImageStore = defineStore('images', () => {
  const imageLinks = ['../assets/images/image-product-1.jpg']
  const images = ref(imageLinks)

  return { images }
})
