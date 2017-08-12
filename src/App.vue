<template>
  <div>
    <x-header 
      :title="$route.meta.head" 
      :left-options="leftOptions"
      :transition="headTransition"
      style="background-color: #a7a7a7; box-shadow: 2px 2px 2px #eee;margin-bottom:10px;"
    ></x-header>
    <div class="container" :style="{height: getContentHeight-106 + 'px'}">
      <transition :name="transitionName">
        <keep-alive exclude="MovieDetail"]>
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
      menu: base.menuBar,
      headTransition: 'vux-header-fade-in-right'
    }
  },
  computed: {
    leftOptions () {
      return {
        showBack: this.$route.path !== '/'
      }
    },
    getContentHeight () {
      return base.getContentHeight()
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      this.headTransition = toDepth > fromDepth ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
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
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
.my-link:focus,
.my-link:active,
.my-link:any-link,
.my-link:hover {
  outline: none;
  color: #000;
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
