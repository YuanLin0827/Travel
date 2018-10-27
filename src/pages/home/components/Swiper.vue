<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in swiperList" :key='item.id'>
        <img class="swiper-img" :src="item.imgUrl" alt="diliraba">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: '.swiper-pagination',
        autoplay: 3000, // 自动切换3s,低版本
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return !!this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #ffffff !important
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%
  background #cccccc
  .swiper-img
    width 100%
</style>
