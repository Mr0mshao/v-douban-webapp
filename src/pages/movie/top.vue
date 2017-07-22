<template>
  <div>
    <load-more
      ref="loadmore"
      :auto-fill="true"
      :bottom-method="fetchRankData"
      :bottom-all-loaded="allLoaded"
    >
      <group :gutter="0">
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
    </load-more>
  </div>
</template>

<script>
import loadMore from '@/components/pull-drop-refresh'
import { mapGetters } from 'vuex'
import { Group, Cell } from 'vux'
export default {
  name: 'movieTop',
  components: { Group, Cell, loadMore },
  data () {
    return {
      allLoaded: false,
      start: 0,
      count: 0
    }
  },
  computed: {
    ...mapGetters(['done_movie_top'])
  },
  methods: {
    getTopData (start = 0, count = 20) {
      this.$store.dispatch('fetch_movie_top', {start, count})
        .then((params) => {
          this.start += params.count
          setTimeout(() => {
            this.$refs.loadmore.onBottomLoaded()
          }, 1000)
        })
    },
    fetchRankData () {
      this.getTopData(this.start)
    }
  }
}
</script>

<style>
  
</style>
