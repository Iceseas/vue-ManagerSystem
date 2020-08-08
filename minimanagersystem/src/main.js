import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import './styles/Layout.css'
import router from './router'


Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')