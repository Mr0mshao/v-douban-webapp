<template>
  <group :gutter="0" v-infinite-scroll="getData" infinite-scroll-disabled="loaded" infinite-scroll-distance="10">
    <cell
     v-for="(item, index) in done_movie_top"
     :key="index"
     :title="item.title"
     :value="item.genres[0]"
    >
    <img slot="icon" :src="item.images.small" alt="" style="dispaly:block;height:50px;width:45px;margin:0;padding:0;margin-right:5px">
    <span slot="after-title">
      评分：{{item.rating.average}}
    </span>
    </cell>
  </group>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll'
import { mapGetters } from 'vuex'
import { Group, Cell } from 'vux'
export default {
  name: 'movieTop',
  components: { Group, Cell },
  directives: { infiniteScroll },
  deta () {
    return {
      loaded: false,
      start: 0,
      count: 0
    }
  },
  computed: {
    ...mapGetters(['done_movie_top'])
  },
  methods: {
    getData (start = 0, count = 20) {
      this.$store.dispatch('fetch_movie_top', {start, count})
        .then((params) => {
          this.start = params.start
          this.count = params.count
        })
    }
  },
  mounted () {
    // this.getData()
  }
}
</script>

<style>
  
</style>
