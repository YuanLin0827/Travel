export default {
  changeCity (state, city) { // 前面声明的state
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {
    }
  }
}
