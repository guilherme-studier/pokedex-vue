import { createApp } from 'vue'
import App from './App.vue'
import Pokedex from './pages/Pokedex.vue'
import PokeDetail from './pages/PokeDetail.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path:"/", component: Pokedex },
        { path:"/pokemon/:name", name: "pokemon", component: PokeDetail }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')

