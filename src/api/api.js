import Vue from 'vue'
import config from '../config/index.js'
import { Toast,Dialog  } from 'vant';
import axios from 'axios'

const ajax = axios.create({
  baseURL:config.baseUrl,
  withCredentials: true,
})

export const login = params =>{
	loading()
	return ajax.post(`login`,params).then(res=>{
		Toast.clear();
		if (res.data.errno == 0) {
			return res.data.data
		}else{
			Dialog.alert({
			  message: res.data.errmsg
			})
			return false
		}
	})
}

function loading(){
	return Toast.loading({
	  message: '加载中...',
	  loadingType: 'spinner',
	  duration: 0,
	});
}