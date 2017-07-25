<template>
  <div>
    <tab>
      <tab-item 
        v-for="(item, index) in tabBarMenu"
        :key="index"
        :line-width="item.lineWidth"
        :selected="item.isSelect"
        @click.native="routerToPath(`${item.link}`)"
      >
        {{item.title}}
      </tab-item>
    </tab>
    <transition>
      <router-view
        :style="{height: getContentHeight - 140 + 'px'}" 
        style="overflow-x:hidden;overflow-y:auto;"
      ></router-view>
    </transition>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
import base from '@/utils/config.base'
export default {
  components: {Tab, TabItem},
  data () {
    return {
    }
  },
  computed: {
    tabBarMenu () {
      return base.movieBar
    },
    getContentHeight () {
      return base.getContentHeight()
    }
  },
  methods: {
    routerToPath (path) {
      this.$router.replace(path)
    }
  }
}
</script>
