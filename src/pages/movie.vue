<template>
  <div class="card">
    <h1 class="title">{{done_movie_content.title}}</h1>
    <section class="subject">
      <flexbox>
        <flexbox-item :span="2/3">
          <p style="font-size:10px" v-if="done_movie_content.rating">
            <i v-show="false">{{start = done_movie_content.rating.average / 2}}</i>
            <rater :max="5" v-model="start" slot="value" :font-size="10"></rater>
            {{done_movie_content.rating.average}}
            &nbsp;|&nbsp;{{done_movie_content.ratings_count + '人评价'}}
          </p>
          <p class="meta">
            主演：
            <template v-for="item in done_movie_content.casts">
              {{item.name}}/
            </template>
          </p>
          <p class="meta">
            {{done_movie_content.year}}年上映
            <template v-for="item in done_movie_content.countries">{{item}}</template>
          </p>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <img v-if="done_movie_content.images" :src="done_movie_content.images.medium" alt="">
        </flexbox-item>
      </flexbox>
    </section>
    <section class="subject">
      <h2 class="info-title">{{done_movie_content.title}}的剧情介绍</h2>
      <div>
        <p class="info-content">{{done_movie_content.summary}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import { Divider, Flexbox, FlexboxItem, Rater } from 'vux'
import {mapGetters} from 'vuex'
export default {
  name: 'MovieDetail',
  data () {
    return {
      movieId: '',
      start: 0
    }
  },
  components: {Divider, Flexbox, FlexboxItem, Rater},
  computed: {...mapGetters(['done_movie_content'])},
  methods: {},
  mounted () {
    console.log(this.$route.params)
    let id = this.$route.params.id
    this.$store.dispatch('fetch_movie_content', id)
  }
}
</script>

<style scoped>
  .card {
    margin: 0 18px;
    -webkit-text-size-adjust: 100%;
  }
  .title {
    margin: 30px 0 5px;
    font-size: 20px;
    line-height: 32px;
    word-break: break-all;
  }
  h1, h2, h3 {font-weight: normal;}
  section {
    margin-bottom: 30px;
  }
  .info-title {
    color: #aaa;
    margin: 0 0 15px;
    font-size: 15px;
  }
  .info-content {
    line-height: 22px;
    font-size: 15px;
    margin: 0; padding: 0;
    color: #494949;
    word-break: break-all;
  }
  .meta {
    color: #494949;
    margin-top: 15px;
    padding-right: 24px;
    font-size: 14px;
    line-height: 1.6;
  }
</style>
