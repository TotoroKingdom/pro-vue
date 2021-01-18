import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8088/'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$echarts=window.echarts

router.beforeEach((to, from, next) => {
      if (to.meta.requireAuth) {
        if (store.state.user.username) {
          next()
        } else {
          next({
            path: 'login',
            query: {redirect: to.fullPath}
          })
        }
      } else {
        next()
      }
    }
)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
















/*
import axios from 'axios'
Vue.prototype.$axios=axios
*/

//调用者位置
/*
import {request} from "./network/request/request";
request({
  url:'userList',
  success:res=>{
    console.log(res);
  },
  fail:err=>{
    config.log(res);
  }
})
 */

/*
request('http://localhost:8080/userList',res=>{
  console.log(res);
},err=>{
  console.log(err);
    }
)
*/

/*
import axios from "axios";
axios({
  url:"http://localhost:8080/userList"
}).then(res=>{
  console.log(res);
    }

)
*/
