<template>
  <!--左滑删除  -->
  <div class="left-delete">
    <div class="move"
      @touchstart="touchStart"
      @mousedown="touchStart"
      @touchmove="touchMove"
      @mousemove="touchMove"
      @touchend="touchEnd"
      @touchcancel="touchEnd"
      @mouseup="touchEnd"
      :style="txtStyle"
    >
      <slot></slot>
    </div>
    <div class="deleteIcon" :style="zIndex" @click.prevent="deleteItem(index)"></div>
  </div>
</template>

<script>
export default {
  name: 'left-slide',
  props: ['index'],
  data () {
    return {
      txtStyle: '',
      startX: 0,
      moveX: '',
      disX: '',
      delWidth: 120,
      top: '',
      zIndex: 'z-index: -1'
    }
  },
  methods: {
    touchMove (e) {
      e = e || event
      if (e.touches.length === 1) {
        this.moveX = e.touches[0].clientX
        this.disX = this.startX - this.moveX
        if (this.disX < 0 || this.disX === 0) {
          // 向右滑动
          this.txtStyle = 'transform: translateX(0); transition: transform 0.5s'
        } else if (this.disX > 0) {
          // 向左滑动,给它一个左的偏移 -left，当偏移量达到预定的最大值，偏移量就保持为该值
          this.txtStyle = `transform: translateX(${-this.disX}px)`
          if (this.disX >= this.delWidth) {
            this.txtStyle = `transform: translateX(${-this.delWidth}px)`
            this.zIndex = 'z-index: 10'
          }
        }
      }
    },
    touchStart (e) {
      e = e || event
      if (e.touches.length === 1) {
        this.startX = e.touches[0].clientX
        this.txtStyle = `transform: translateX(0px); transition: transform 0.5s;`
      }
    },
    touchEnd (e) {
      e = e || event
      if (this.disX < this.delWidth) {
        this.txtStyle = 'transform: translateX(0); transition: transform 0.5s;'
      }
      if (e.changedTouches.length === 1) {
        this.startX = 0
        this.zIndex = 'z-index: -10'
        let endX = e.changedTouches[0].clientX
        this.disX = this.startX - endX
      }
    },
    deleteItem (index) {
      console.log('delete' + index)
    }
  },
  mounted () {
    this.$nextTick(() => {
    })
  }
}
</script>

<style scoped>
.left-delete{
    position:relative;
    z-index:2;
    width:100%;
    height:50px;
    margin-bottom: 2px;
}
.move{
    position: absolute;
    left: 0;
    width: 375px;
    height: 50px;
    background-color: #aeaeae;
}
.deleteIcon{
    width: 20px;
    height:100%;
    position: absolute;
    right:0;
    top:0;
    background:url(../assets/logo.png) no-repeat;
    background-size: contain;
}
</style>
