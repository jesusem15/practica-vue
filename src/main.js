import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBUhM8CsBgmMECUY3ZC5GGnoLOGMt1bbLk',
      authDomain: 'youtube-devmeetup-ac861.firebaseapp.com',
      databaseURL: 'https://youtube-devmeetup-ac861.firebaseio.com',
      projectId: 'youtube-devmeetup-ac861',
      storageBucket: ''
    })
  }
})
