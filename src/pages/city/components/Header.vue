<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont icon-fanhui"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'

.header
  position relative
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  background $bgColor
  fonta-size .32rem
  .header-left
    position absolute
    top 0
    left 0
    width .64rem
    color #fff
    text-align center
    font-size .4rem
</style>
