<template>
  <div>
    <load-more
      ref="loadmore"
      :auto-fill="true"
      :bottom-method="fetchMovieData"
      :bottom-all-loaded="allLoaded"
    >
      <flexbox :gutter="0" wrap="wrap" align="flex-start">
        <flexbox-item 
          :span="1/3"
          v-for="(item,index) in done_movie_list"
          :key="index"
        >
          <div class="movie-box">
            <img :src="item.images.medium" alt="" class="movie-post">
            <p class="movie-desc">{{item.title}}</p>
            <rater :max="5" v-model="item.rating.average" slot="value" :font-size="10"></rater>
            <span style="font-size:10px;">{{item.rating.average?item.rating.average:'暂无'}}</span>
          </div>
        </flexbox-item>
      </flexbox>
    </load-more>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { Flexbox, FlexboxItem, Rater } from 'vux'
import loadMore from '@/components/pull-drop-refresh'
export default {
  name: 'movieInTheaters',
  components: { loadMore, FlexboxItem, Flexbox, Rater },
  data () {
    return {
      start: 0,
      total: 0,
      allLoaded: false,
      count: 0
    }
  },
  computed: {
    ...mapGetters(['done_movie_list'])
  },
  methods: {
    movieInTheaters (start = 0, count = 12) {
      let _this = this
      this.$store.dispatch('fetch_movie_list', {start, count})
        .then((params) => {
          _this.start += params.count
          setTimeout(() => {
            _this.$refs.loadmore.onBottomLoaded()
          }, 1000)
        })
    },
    fetchMovieData () {
      this.movieInTheaters(this.start)
    }
  }
}
</script>

<style>
.movie-box {
  text-align: center
}
.movie-post {
  display: block;
  margin: 0 auto;
  height: 150px;
  min-height: 150px;
  max-height: 150px;
}
.movie-desc {
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
