import Vue from 'vue'
import Router from 'vue-router'
const MovieHome = r => require.ensure([], () => r(require('@/pages/movie/home')), 'Movie')
const MovieRank = r => require.ensure([], () => r(require('@/pages/movie/rank')), 'Movie')
const MovieTop = r => require.ensure([], () => r(require('@/pages/movie/top')), 'Movie')
const MovieComing = r => require.ensure([], () => r(require('@/pages/movie/coming')), 'Movie')
const MovieSearch = r => require.ensure([], () => r(require('@/pages/movie/search')), 'Movie')
import MovieDetail from '@/pages/movie.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MovieHome',
      component: MovieHome,
      meta: {'head': '首页'}
    },
    {
      path: '/coming',
      name: 'MovieComing',
      component: MovieComing,
      meta: {'head': '即将上映'}
    },
    {
      path: '/top',
      name: 'MovieTop',
      component: MovieTop,
      meta: {'head': '徘行'}
    },
    {
      path: '/rank',
      name: 'MovieRank',
      component: MovieRank,
      meta: {'head': '北美票房'}
    },
    {
      path: '/search',
      name: 'MovieSearch',
      component: MovieSearch,
      meta: {'head': '搜索'}
    },
    {
      path: '/m/:id',
      name: 'MovieDetail',
      component: MovieDetail,
      meta: {'head': '详情'}
    }
  ]
})
