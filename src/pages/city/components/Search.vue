<template>
  <div>
    <div class="search">
      <input type="text" v-model="content" class="search-input" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="content">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData"> 没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
  props: {
    cities: Object
  },
  data () {
    return {
      content: '',
      list: [],
      timer: null
    }
  },
  components: {
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    content (newVal) {
      if (newVal) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let item in this.cities) {
            this.cities[item].forEach((value) => {
              if (value.spell.indexOf(this.content) > -1 || value.name.indexOf(this.content) > -1) {
                result.push(value)
              }
            })
          }
          this.list = result
        }, 100)
      } else {
        this.list = []
      }
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity()
      // this.$store.commit('changeCity', city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
  .search
    height .72rem
    background $bgColor
    padding 0 .1rem
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      padding 0 .1rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666666
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    text-align center
    background #eeeeee
    .search-item
      line-height .62rem
      padding-left .2rem
      color #666666
      background #ffffff
</style>
