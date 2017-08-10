let tst = '这是一个测试'
export default {
  install (vue, options) {
    console.log(options)
    vue.$tst = tst
    vue.mixin({
      created: function () {
        this.$tst = vue.$tst
      }
    })
  }
}
