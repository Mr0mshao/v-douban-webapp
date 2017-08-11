<template>
  <div>
    <masker 
      style="border-radius: 5px;margin:1px 0" 
      :opacity="0.6"
      v-for="(item,index) in done_movie_usRank"
      :key="index"
    >
      <div 
        class="m-img"
        :style="`background-image:url(${item.subject.images.large})`"
      ></div>
      <div slot="content" class="m-title">
        {{item.subject.title}} | {{item.subject.year}}
        <br>
        <span class="m-time" style="">票房：{{item.box}}</span>
        <br/>
        <span 
          class="m-time"
          v-for="(i,k) in item.subject.genres"
          :key="k"
        >
          {{i}}&nbsp;
        </span>
      </div>
    </masker>
  </div>
</template>

<script>
import { Masker } from 'vux'
import { mapGetters } from 'vuex'
export default {
  name: 'movieUSBox',
  components: { Masker },
  deta () {
    return {}
  },
  computed: {
    ...mapGetters(['done_movie_usRank'])
  },
  methods: {
    getMovies () {
      this.$store.dispatch('fetch_movie_usRank')
    }
  },
  created () {
    this.getMovies()
  }
}
</script>

<style>
 .m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
} 
</style>
