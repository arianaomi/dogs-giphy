import Vue from 'vue'
import App from './App.vue'
// import tailwind
import '@/assets/css/tailwind.css'
import { VueSpinners } from '@saeris/vue-spinners'

import router from '@/router'

Vue.use(VueSpinners)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
