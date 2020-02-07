import Vue from 'vue'
import VueRouter from 'vue-router'
import Connexion from "../components/Connexion";
import Inscription from "../components/Inscription";
import Accueil from "../components/Accueil";
import AddChannel from "../components/AddChannel.vue";
import Membres from "../components/Membres";
import DetailMembre from "../components/DetailMembre";
import Conversation from "../components/Conversation";


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
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/AddChannel',
    name: 'AddChannel',
    component: AddChannel
  },
  {
    path: '/Members',
    name: 'Members',
    component: Membres
  },
  {
    path: '/DetailMembre/:identifiant',
    name: 'DetailMembre',
    component: DetailMembre
  },
  {
    path: '/Conversation',
    name: 'Conversation',
    component: Conversation
  }
]

const router = new VueRouter({
  routes
})

export default router
