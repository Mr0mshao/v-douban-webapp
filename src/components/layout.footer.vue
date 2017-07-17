<template>
  <div>
    <tabbar>
      <tabbar-item
        v-for="(item,index) in menu"
        :key="index"
        :selected="item.select"
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
import base from '../utils/config.base'
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'layoutFooter',
  components: { Tabbar, TabbarItem },
  computed: {
    menu () {
      return base.menuBar
    }
  }
}
</script>

<style>
  
</style>
