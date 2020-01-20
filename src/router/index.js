import Vue from 'vue'
import VueRouter from 'vue-router'
import Connexion from "../components/Connexion";
import Inscription from "../components/Inscription";
import Accueil from "../components/Accueil";
import AddChannel from "../components/AddChannel.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/Connexion',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/Inscription',
    name: 'Inscription',
    component: Inscription
  },
  {
    path: '/Accueil',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/AddChannel',
    name: 'AddChannel',
    component: AddChannel
  }
]

const router = new VueRouter({
  routes
})

export default router
