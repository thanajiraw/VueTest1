import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VCalendar from 'v-calendar';
import moment from 'moment'

Vue.config.productionTip = false
Vue.prototype.$moment = moment

Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
