import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTrash } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTrash)

const pinia = createPinia()
const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)

app.use(router)

app.mount('#app')
