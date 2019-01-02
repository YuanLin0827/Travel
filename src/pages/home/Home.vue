<template>
  <div>
    <home-header></home-header>
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
import { mapState } from 'vuex'
import foo1 from '../../js/util'

export default {
  data () {
    return {
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: [],
      lastCity: ''
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
    this.lastCity = this.city
    this.init() // 初始化数据
    window.vm = this
    this.foo1 = 42
    foo1()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.init()
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    init () {
      axios.get('/api/index.json?city=' + this.city).then(d => {
        let data = d.data.data
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
