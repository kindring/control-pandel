import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

process.env.MOCK && require('@/mock');
require('./mock');

new Vue({
    render: h => h(App),
}).$mount('#app');