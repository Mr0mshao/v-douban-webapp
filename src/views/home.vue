<template>
  <div class="page">
    home
    <div
      v-for="(item, i) in testList"
      :key="i"
      style="heigth:200px;color:red"
    >
      <left-slide :index="i">{{item}}</left-slide>
    </div>
  </div>
</template>

<script>
import LeftSlide from '../components/left-delete'
export default {
  name: 'home',
  components: {LeftSlide},
  data () {
    return {
      testList: [1, 2, 34, 5, 6, 7, 7]
    }
  },
  computed: {},
  methods: {},
  mounted () {}
}
</script>

<style>
  
</style>
