import Vue from 'vue'
import Antd from 'ant-design-vue'

import App from './App'
import router from './router'
import store from './store'

import 'ant-design-vue/dist/antd.css'

// 引入工具包
import tools from '@/tools'

Vue.config.productionTip = false

Vue.use(Antd)

// 绑定工具方法
Vue.prototype.$tools = tools

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
