/*
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-06 09:16:30
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-09-08 14:21:18
 * @FilePath: \marry\src\main.js
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'amfe-flexible'
import '@/styles/base.css'
import 'animate.css'
import Video from 'video.js'
import 'video.js/dist/video-js.css'

//视频
Vue.prototype.$video = Video
Vue.config.productionTip = false

Vue.directive('animate', {
  inserted: function (el, binding) {
    // 聚焦元素
    binding.addClass = () => {
      const { top } = el.getBoundingClientRect()
      const h = document.documentElement.clientHeight || document.body.clientHeight
      if (top < h) {
        if (el.className.indexOf(binding.value) == -1) {
          // 下面单引号中间是一个空格
          el.className = binding.value + ' ' + el.className
        }
        if (binding.addClass) {
          window.removeEventListener('scroll', binding.addClass)
        }
      }
    }
    window.addEventListener('scroll', binding.addClass, true)
    binding.addClass()
  },
  unbind: function (el, binding) {
    if (binding.addClass) {
      window.removeEventListener('scroll', binding.addClass)
    }
  }
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
