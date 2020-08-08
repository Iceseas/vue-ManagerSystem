import Vue from 'vue'




import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import echarts from 'echarts'
import '@/styles/Layout.css'


import './registerServiceWorker'
import router from './router'
import store from './store'
import App from './App.vue'


Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')