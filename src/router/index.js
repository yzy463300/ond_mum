import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/page/Index'
import game from '@/page/game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Index
    },
    {
      path: '/game',
      name: '',
      component: game
    },

  ],
  scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
  	    return savedPosition
  	} else {
  		if (from.meta.keepAlive) {
  			from.meta.savedPosition = document.body.scrollTop;
  		}
  	    return { x: 0, y: to.meta.savedPosition || 0 }
  	}
  }
})