<template>
  <div style="position: relative">
    <search
      v-model.trim="value"
      position="absolute"
      :auto-scroll-to-top="false"
      top="0px"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"
    ></search>
    <group class="search-list" gutter="0" :style="value.length > 0 ? 'position: absolute;top:45px;width:100%' : 'position: static' ">
      <cell
        v-for="(item, index) in done_movie_searchResult"
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Search, Group, Cell } from 'vux'
export default {
  name: 'movieSearchResult',
  components: { Search, Group, Cell },
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapGetters(['done_movie_searchResult'])
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('fetch_movie_searchResult', this.value)
      this.$refs.search.setBlur()
    },
    onCancel () {
      this.value = ''
    }
  }
}
</script>

