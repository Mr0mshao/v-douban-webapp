<template>
  <div>
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="res"
      v-model="value"
      position="fixed"
      :auto-scroll-to-top="true"
      top="90px"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"
    ></search>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Search, debounce } from 'vux'
export default {
  name: 'movieSearchResult',
  components: { Search },
  data () {
    return {
      value: '',
      res: [
        {
          title: 'a',
          other: 'aaa'
        },
        {
          title: 'b',
          other: 'bbb'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['done_movie_searchResult'])
  },
  methods: {
    onSubmit () {
      console.log(this.value)
    },
    onCancel () {},
    getResult (keyword) {
      debounce(function () { console.log(keyword) }, 500)
    },
    resultClick (item) {
      console.log(item)
    }
  }
}
</script>

<style>
  
</style>
