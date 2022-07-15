import MainPage from '@/pages/MainPage'
import PostsPage from '@/pages/PostsPage'
import PostsPageStore from '@/pages/PostsPageStore'
import PostsPageCompositionApi from '@/pages/PostsPageCompositionApi'
import AboutPage from '@/pages/AboutPage'
import PostPage from '@/pages/PostPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/posts',
    component: PostsPage
  },
  {
    path: '/posts/:id',
    component: PostPage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/posts-store',
    component: PostsPageStore
  },
  {
    path: '/posts-composition',
    component: PostsPageCompositionApi
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
