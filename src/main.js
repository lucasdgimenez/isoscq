import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import Chartkick from "vue-chartkick"
import Chart from "chart.js"
import "hchs-vue-charts"
import "chart.js"

Vue.use(Chartkick.use(Chart))
Vue.use(window.VueCharts)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
