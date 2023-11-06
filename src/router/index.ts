import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
import '@/style.css'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    }
    // {
    //   path: '/project/todolist',
    //   name: 'todolist',
    //   component: () => import('../views/projects/todolist/components/ToDoList.vue')
    // }
    // {
    //   path: '/project/figflix',
    //   name: 'figflix',
    //   component: () => import('../views/projects/figflix/views copy/HomeView.vue')
    // }
  ]
})

export default router
