import Vue from 'vue'
import Example from './example/Example.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Example)
}).$mount('#app')
