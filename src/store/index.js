import Vue from 'vue'
import Vuex from 'vuex'
import app from './module/app'
import movie from './module/movie'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    app,
    movie
  }
})
