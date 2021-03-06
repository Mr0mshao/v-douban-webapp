// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router/index'
import store from './store/index'
import App from './App'
import tst from './plugins/test'
Vue.use(tst, {xx: 'xxx'})
FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.directive('pageTitle', function (el, binding) {
  document.title = binding.value
})
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
