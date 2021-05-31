import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import { store } from './store/store'



Vue.config.productionTip = false
// Filter
Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('ddd DD, MMM YYYY hh:mm A')
  }
});
Vue.filter('dellPunctuation', function (value) {
  return value.replace(/;/g, ', ')

});


new Vue({
  store: store,
  el: '#app',
  render: h => h(App),

})
