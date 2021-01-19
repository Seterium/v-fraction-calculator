import Vue from 'vue'
import App from './App.vue'

import '@/assets/styles/index.scss'

Vue.config.productionTip = false

new Vue({
  render: render => render(App),
}).$mount('#app')
