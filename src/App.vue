<template>
  <div id="app">
    <x-header 
      title="首页" 
      :left-options="leftOptions"
      transition="vux-header-fade-in-right"
    ></x-header>
    <div class="container" :style="{height: getContentHeight-96 + 'px'}">
      <transition :name="transitionName">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
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
import {XHeader, Tabbar, TabbarItem, Divider} from 'vux'
import base from './utils/config.base'
export default {
  name: 'app',
  components: { XHeader, Tabbar, TabbarItem, Divider },
  data () {
    return {
      transitionName: 'slied-left',
      menu: base.menuBar
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

body, html, #app {
    height: 100%;
    display: block;
    background-color: #fbf9fe;
    -webkit-overflow-scrolling: touch;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.container {
  height: 571px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
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
