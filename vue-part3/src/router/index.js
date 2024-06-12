import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewPersonForm from '../views/NewPersonForm.vue'
import PeopleListComponent from '../views/PeopleListComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/newperson',
      name: 'newpaerson',
      component: NewPersonForm,
      props: (route) => ({
        id: route.params.id,
        text: 'New person'
      })
    },
    {
      path: '/list',
      name: 'nlist',
      component: PeopleListComponent,
      props: (route) => ({
        id: route.params.id,
        text: 'List of person'
      })
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
