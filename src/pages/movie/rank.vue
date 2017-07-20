<template>
  <div>
    {{done_movie_list}}
    <div>口碑</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'movie',
  deta () {
    return {}
  },
  computed: {
    ...mapGetters(['done_movie_list'])
  },
  methods: {
    getMovies () {
      this.$store.dispatch('fetch_movie_list')
    }
  },
  mounted () {
    // this.getMovies()
  }
}
</script>

<style>
  
</style>
