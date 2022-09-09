/*
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-06 09:16:30
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-09-09 08:46:27
 * @FilePath: \marry\src\router\index.js
 * @Description:
 *
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home/'

Vue.use(VueRouter)

// 路由配置
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/case',
    name: 'case',
    component: () => import('@/views/caseView/')
  },
  {
    path: '/second',
    name: 'second',
    component: () => import('@/views/diyWeddingView/')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@/views/companyHistoryView/')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue')
  },
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  routes
})

export default router
