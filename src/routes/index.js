import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../components/main.vue';
import Landing from '../components/Landing';
import About from '../components/Landing/About';
import Charts from '../components/Landing/Table';
import Search from '../components/Landing/YoutubeMusic';
import Photo from '../components/Landing/Photo';
import Contacts from '../components/Landing/Form';





Vue.use(VueRouter)

let router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
      {
        name: 'Landing',
        path: '/',
        meta: {
          title: 'Главная'
        },
        component: Landing,
      },
      {
        name: 'Genre',
        component: About,
        path: '#genre',
      },
      {
        name: 'Charts',
        component: Charts,
        path: 'charts'
      },
      {
        name: 'Search',
        component: Search,
        path: 'search'
      },
      {
        name: 'Photo',
        component: Photo,
        path: 'photo'
      },
      {
        name: 'Contacts',
        component: Contacts,
        path: 'contacts'
      },
      {
        name: 'main',
        path: '/',
        component: Main,
      },
  ]

})

export default router
