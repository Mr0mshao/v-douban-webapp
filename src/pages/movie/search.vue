<template>
  <div>
    {{done_movie_searchResult}}
    <div>搜索</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'movieSearchResult',
  deta () {
    return {}
  },
  computed: {
    ...mapGetters(['done_movie_searchResult'])
  },
  methods: {
    getResults () {
      this.$store.dispatch('fetch_movie_searchResult')
    }
  },
  mounted () {
    // this.getResults()
  }
}
</script>

<style>
  
</style>
