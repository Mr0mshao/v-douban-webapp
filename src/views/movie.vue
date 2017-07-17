<template>
  <div>
    movie
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('fetch_movie_list')
  }
}
</script>

<style>
  
</style>
