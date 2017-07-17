<template>
  <div>
    <tab>
      <tab-item selected>正在热映</tab-item>
      <tab-item>即将上映</tab-item>
      <tab-item>榜单</tab-item>
      <tab-item>口碑</tab-item>
      <tab-item>新片</tab-item>
    </tab>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
export default {
  components: {Tab, TabItem}
}
</script>

<style>
  
</style>
