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
          v-for="(item,index) in done_movie_coming"
          :key="index"
        >
          <div class="movie-box movie-box-position">
            <img :src="item.images.medium" alt="" class="movie-post">
            <p class="movie-desc movie-desc-position">{{item.title}}</p>
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
  name: 'movieComing',
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
    ...mapGetters(['done_movie_coming'])
  },
  methods: {
    movieComing (start = 0, count = 12) {
      let _this = this
      this.$store.dispatch('fetch_movie_coming', {start, count})
        .then((params) => {
          _this.start += params.count
          setTimeout(() => {
            _this.$refs.loadmore.onBottomLoaded()
          }, 1000)
        })
    },
    fetchMovieData () {
      this.movieComing(this.start)
    }
  }
}
</script>
<style>
.movie-box-position{
  position: relative;
  padding: 10px;
}
.movie-box-position img{
  display: block;
  width: 100%;
  height: 150px;
}
.movie-box-position .movie-desc-position{
  position: absolute;
  bottom: 10px;
  background: rgba(255, 255, 255, 0.5);
  width: 105px;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
