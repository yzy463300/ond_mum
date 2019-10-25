// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/'
import router from './router'
// import {AlertPlugin,LoadingPlugin,ToastPlugin,ConfirmPlugin } from 'vux'
import Weixin from './utils/weixin.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import './style/common.less'
import axios from 'axios'
import config from './config/index.js'
import { Dialog,Toast,Area,Field,Popup,CellGroup,Cell    } from 'vant';

Vue.config.productionTip = false
Vue.use(Dialog)
.use(Toast)
.use(Area)
.use(Field)
.use(Popup)
.use(Cell)
.use(CellGroup)
console.log(config)
// Vue.prototype.$axios = axios
// Vue.prototype.$instance = axios.create({
//   baseURL:config.baseURL
// })

// Vue.prototype.loading = function(text){
// 	this.$vux.loading.show({
// 	  text:text
// 	})
// }
// Vue.prototype.alert = function(text){
//   this.$vux.alert.show({
//     title:'提示',
//     content:text
//   })
// }
// Vue.prototype.confirm = function(text){
//   this.$vux.confirm.show({
//     title:'提示',
//     content:text
//   })
// }
// Vue.prototype.toast = function(text){
// 	this.$vux.toast.show({
// 		type:'warn',
// 		text:text
// 	})
// }
/* eslint-disable no-new */
window.$vvue =  new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
window.canPassive = true
// Weixin()
// document.addEventListener('touchmove', (e) => {
//     e.preventDefault();
// }, window.canPassive ? "" : { passive: false } );

document.addEventListener('click', (e) => {
    //console.log(e)
    if(e.target && e.target.nodeName == 'IMG') e.preventDefault();
}, { passive: false } );

$('body').on('blur', 'input,select', function(event) {
  setTimeout(() => {
    const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
    window.scrollTo(0, Math.max(scrollHeight - 1, 0));
  }, 100);
});