import Vue from 'vue'
import './plugins/bootstrap-vue'
import 'vue-ionicons/ionicons.css'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');
