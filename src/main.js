import Vue from 'vue'
import App from './App.vue'
import "../public/css/output.css"
import router from './router'
import PatrolinIcon from './PatrolinIcon.vue'
import VueQrcodeReader from "vue-qrcode-reader"

Vue.config.productionTip = false


Vue.component('patrolin-icon', PatrolinIcon)
Vue.use(VueQrcodeReader)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
