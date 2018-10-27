<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recomend :recommendList="recommendList"></home-recomend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecomend from './components/Recomend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
  data () {
    return {
      city: '',
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecomend,
    HomeWeekend
  },
  mounted () {
    this.init() // 初始化数据
  },
  methods: {
    init () {
      axios.get('/api/index.json').then(d => {
        let data = d.data.data
        this.city = data.city
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.swiperList = data.swiperList
        this.weekendList = data.weekendList
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
