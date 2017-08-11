import Vue from 'vue'
import Router from 'vue-router'
const MovieHome = r => require.ensure([], () => r(require('@/pages/movie/home')), 'Movie')
const MovieRank = r => require.ensure([], () => r(require('@/pages/movie/rank')), 'Movie')
const MovieTop = r => require.ensure([], () => r(require('@/pages/movie/top')), 'Movie')
const MovieComing = r => require.ensure([], () => r(require('@/pages/movie/coming')), 'Movie')
const MovieSearch = r => require.ensure([], () => r(require('@/pages/movie/search')), 'Movie')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MovieHome',
      component: MovieHome
    },
    {
      path: '/coming',
      name: 'MovieComing',
      component: MovieComing
    },
    {
      path: '/top',
      name: 'MovieTop',
      component: MovieTop
    },
    {
      path: '/rank',
      name: 'MovieRank',
      component: MovieRank
    },
    {
      path: '/search',
      name: 'MovieSearch',
      component: MovieSearch
    }
  ]
})
