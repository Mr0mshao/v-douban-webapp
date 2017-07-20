<template>
  <load-more
    :autoFill="true"
    :bottomAllLoaded="allLoaded"
    :bottomMethod="getMovieInTheaters"
    :bottomDistance="100"
  >
    <group gutter="0">
      <cell
        v-for="(item,index) in done_movie_list"
        :key="index"
        :title="item.title"
      ></cell>
    </group>
  </load-more>
</template>

<script>
import { mapGetters } from 'vuex'
import { Group, Cell } from 'vux'
import loadMore from '@/components/pull-drop-refresh'
export default {
  name: 'movieInTheaters',
  components: { loadMore, Group, Cell },
  data () {
    return {
      start: 0,
      total: 0,
      allLoaded: true,
      count: 0
    }
  },
  computed: {
    ...mapGetters(['done_movie_list'])
  },
  methods: {
    getMovieInTheaters () {
      this.$store.dispatch('fetch_movie_list', {
        start: this.start,
        count: this.count
      })
    }
  },
  mounted () {
    // this.getMovieInTheaters()
  }
}
</script>

<style>
  
</style>
