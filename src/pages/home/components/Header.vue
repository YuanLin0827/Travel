<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-fanhui"></span>
    </div>
    <div class="header-input">
      <span class="iconfont icon-sousuo"></span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont icon-jiantouarrow486"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['city'])
  },
  components: {
  }
}
</script>

<style lang="stylus" scoped>
  // 1rem = 1 html font-size = 50rem(reset.css)
  @import '~@/assets/styles/varibles.styl'
  .header
    display flex
    line-height $headerHeight
    background $bgColor
    justify-content space-around
    color #ffffff
    .header-left
      width .64rem
      text-align center
      // .icon-fanhui
    .header-input
      flex 1
      background #ffffff
      line-height .64rem
      padding-left .2rem
      height .64rem
      margin-top .12rem
      margin-left .2rem
      border-radius .1rem
      color #cccccc
    .header-right
      text-align center
      min-width 1.04rem
      padding 0 .1rem
      color #ffffff
      .icon-jiantouarrow486
        margin-left -.1rem
</style>
