<!--
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-06 14:41:08
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-09-06 15:25:36
 * @FilePath: \marry\src\views\404.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
-->
<template>
  <div align="center" style='font-family:"微软雅黑"' class="container-404">
    <img src="@/assets/image/404.png" border="0" height="" style="margin:10vh 0 0 0"/>
    <br>
    找不到这个页面啊！是不是打错啦!<br><br>
    <el-button @click="$router.push('/')" style="cursor: pointer;">👉返回首页👈</el-button>
    <br><br> &copy; 梦蔷薇.com
</div>
</template>

<script>
export default {
    name:'404Page',
}
</script>

<style>
.container-404 {
  width: 100%;
  height: 100%;
}
img {
  -webkit-user-drag: none;
}
</style>