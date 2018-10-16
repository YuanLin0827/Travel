<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key='item.id'>
        <img class="swiper-img" :src="item.url" alt="diliraba">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: '.swiper-pagination',
        autoplay: true,
        loop: true
      },
      swiperList: [{
        id: 10001,
        url: 'http://img1.qunarzz.com/piao/fusion/1810/48/7dbe378a80302902.jpg_750x200_5452310b.jpg'
      }, {
        id: 10002,
        url: 'http://img1.qunarzz.com/piao/fusion/1809/31/da037478f37cf202.jpg_750x200_a02cf862.jpg'
      }, {
        id: 10003,
        url: 'http://img1.qunarzz.com/piao/fusion/1809/ff/1bf7d3a4f6591002.jpg_750x200_40809f2a.jpg'
      }]
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
  padding-bottom 26.67%
  background #cccccc
  .swiper-img
    width 100%
</style>
