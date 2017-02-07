import Vue from 'vue'
import App from './app.vue';
import VueRouter from 'vue-router'

import Router  from './router/router'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint)

// console.log(JSON.stringify(Routes));

// import store from './store/'
// import components from './components/' //加载公共组件

// import './css/common.css'
// import './less/common.less'

// Object.keys(components).forEach((key) => {
//     var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
//     Vue.component(`v${name}`, components[key])
// })

Vue.use(VueRouter);
// var router = new VueRouter({
//     Routes
// });



// router.beforeEach(({meta, path}, from, next) => {
//     var { auth = true } = meta
//     var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录

//     if (auth && !isLogin && path !== '/login') {
//         return next({ path: '/login' })
//     }
//     next()
// })

// new Vue({
//      render: h => h(App)
// }).$mount('#wraper');


// new Vue({
//   el: '#wraper',
//   router: router,
//   render: h => h(App)
// })

console.dir(Router)
new Vue({
  router: Router,
  render: h => h(App)
}).$mount('#wraper')

