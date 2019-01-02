<template>
  <div class="banner">
    <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_600x330_df3d1e0a.jpg">
    <div class="banner-info">
      <div class="banner-title">大连圣亚海洋世界（AAAAA景区）</div>
      <div class="banner-number">
        <span class="iconfont .banner-icon icon-sousuo"></span>39
      </div>
    </div>
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
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    bottom 0
    right 0
    line-height .6rem
    color #ffffff
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      padding 0 .4rem
      line-height .32rem
      margin-top .14rem
      height .32rem
      border-radius .2rem
      background rgba(0, 0, 0, .8)
      font-size .24rem
      .banner-icon
        font-size .24rem
</style>
