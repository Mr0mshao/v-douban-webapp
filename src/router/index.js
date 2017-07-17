import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Movie from '@/views/movie'
import Book from '@/views/book'
import BookHome from '@/pages/movie/home'
import Music from '@/views/music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/movie',
      component: Movie,
      children: [
        {
          path: '/',
          name: 'BookHome',
          component: BookHome
        }
      ]
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    }
  ]
})
