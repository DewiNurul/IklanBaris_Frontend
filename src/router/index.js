import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from '../views/Navbar.vue'
import Home from '../views/Home.vue'
import Produk from '../views/Produk.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Jual from '../views/Jual.vue'
import Kategori from '../views/Kategori.vue'
import DetailBarang from '../views/DetailBarang.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Navbar, produk: Produk},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    components: {default: Login},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'register',
    components: {default: Register},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/jual',
    name: 'jual',
    components: {default: Jual, header: Navbar},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/kategori',
    name: 'kategori',
    components: {default: Kategori, header: Navbar},
    meta: { 
      requiresAuth: true
    }
  },
  {
    path: '/detail_barang',
    name: 'detail_barang',
    components: {default: DetailBarang, header: Navbar},
    meta: { 
      requiresAuth: true
    }
  },


  
 
]

const router = new VueRouter({
  routes
})

export default router
