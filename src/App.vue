<template>
  <div id="app">
    <x-header 
      title="首页" 
      :left-options="leftOptions"
      transition="vux-header-fade-in-right"
    ></x-header>
    <transition :name="transitionName">
      <router-view :style="{height: getContentHeight-96 + 'px'}"></router-view>
    </transition>
    <tabbar>
      <tabbar-item
        v-for="(item,index) in menu"
        :key="index"
        :selected="item.select"
        :link="item.link"
      >
        <template v-if="item.icon">
          <img :src="item.icon" alt="">
        </template>
        <span slot="label">{{item.name}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import {XHeader, Tabbar, TabbarItem} from 'vux'
import base from './utils/config.base'
export default {
  name: 'app',
  components: { XHeader, Tabbar, TabbarItem },
  data () {
    return {
      transitionName: 'slied-left'
    }
  },
  computed: {
    leftOptions () {
      return {
        // showBack: this.$route.path !== '/'
      }
    },
    getContentHeight () {
      return base.getContentHeight()
    },
    menu () {
      return base.menuBar
    }
  },
  mounted () {},
  methods: {},
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
.slide-left-enter-active,.slide-left-leave-active {
    transition: all 0.4s ease-in-out;
}
.slide-left-enter,.slide-left-leave-active {
   opacity: 0;
   transform:translateX(-300px);
}

.slide-right-enter-active,.slide-right-leave-active {
    transition: all 0.4s ease-out;
}
.slide-right-enter,.slide-right-leave-active {
   opacity: 0;
   transform:translateX(300px);
}
</style>
