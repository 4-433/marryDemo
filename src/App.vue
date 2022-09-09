<!--
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑     永不宕机     永无BUG
 -->

<!--
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-06 09:16:30
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-09-06 10:22:26
 * @FilePath: \marry\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
-->

<template>
  <div class="app-container">
    <!-- header --start -->
    <headerView />
    <!-- header --end -->

    <!-- content --start -->
    <!-- <transition
      class="auto-scroll"
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__backInUp animate__delay-1s animate__slow"
      leave-active-class="animate__fadeOutDownBig"
    > -->
    <router-view></router-view>
    <!-- </transition> -->
    <!-- content --end -->

    <!-- footer --start -->
    <FooterView />
    <!-- footer --end -->
  </div>
</template>

<script>
import headerView from '@/components/HeaderView/index.vue'
import FooterView from '@/components/FooterView/'

export default {
  components: { headerView, FooterView },
  name: 'AppIndex',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
* {
  user-select: none;
  font-family: PingFangSC-Regular;
}
.app-container {
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
  font-size: 20px;
  button {
    padding: 10px;
    margin-right: 10px;
  }
  // .slide-fade {
  //   position: absolute;
  //   left: 0;
  //   right: 0;
  // }
  // .slide-fade-enter-active {
  //   transition: all 2s ease;
  // }
  // .slide-fade-leave-active {
  //   transition: all 1s cubic-bezier(2.5, 1, 1.3, 1.5);
  // }
  // .slide-fade-enter,
  // .slide-fade-leave-to {
  //   left: 0;
  //   right: 0;
  //   transform: translateX(0%);
  //   opacity: 0;
  // }
}
</style>

<style lang="scss">
::-webkit-scrollbar {
  /* 滚动条整体样式 */
  width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
  // height: 5px;
}
::-webkit-scrollbar-thumb {
  /* 滚动条里面小方块 */
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  background: #cccfd9;
}
::-webkit-scrollbar-track {
  /* 滚动条里面轨道 */
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0);
}

.auto-scroll {
  overflow: overlay;
} /* 需要滚动的地方加上这个class */
.auto-scroll ::-webkit-scrollbar {
  /* 组件内滚动条不显示 */
  display: none;
}
.auto-scroll:hover ::-webkit-scrollbar {
  /* 悬停时滚动条才显示 */
  display: block;
}
</style>

<style>
/* 动画效果延迟秒数设置 */
:root {
  /* 延迟X秒后执行 */
  --animate-delay: 0.3s;
  /* 执行X秒 */
  --animate-duration: 0.4s;
}
</style>
