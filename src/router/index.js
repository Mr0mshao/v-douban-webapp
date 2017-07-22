import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
const Movie = r => require.ensure([], () => r(require('@/views/movie')), 'Movie')
const MovieHome = r => require.ensure([], () => r(require('@/pages/movie/home')), 'Movie')
const MovieRank = r => require.ensure([], () => r(require('@/pages/movie/rank')), 'Movie')
const MovieTop = r => require.ensure([], () => r(require('@/pages/movie/top')), 'Movie')
const MovieComing = r => require.ensure([], () => r(require('@/pages/movie/coming')), 'Movie')
const MovieSearch = r => require.ensure([], () => r(require('@/pages/movie/search')), 'Movie')
import Book from '@/views/book'
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
          name: 'MovieHome',
          component: MovieHome
        },
        {
          path: '/movie/coming',
          name: 'MovieComing',
          component: MovieComing
        },
        {
          path: '/movie/top',
          name: 'MovieTop',
          component: MovieTop
        },
        {
          path: '/movie/rank',
          name: 'MovieRank',
          component: MovieRank
        },
        {
          path: '/movie/search',
          name: 'MovieSearch',
          component: MovieSearch
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
