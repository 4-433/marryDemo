<!--
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-07 08:41:29
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-09-08 11:04:38
 * @FilePath: \marry\src\components\HeaderView\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
-->
<template class="header-container">
  <div class="nav">
    <div class="logo">
      <img src="@/assets/image/pic1.png" alt="" class="logoImg" />
    </div>
    <div class="btn-box">
      <button @click="$router.push('/')">
        首页
        <span class="hover-box"></span>
      </button>
      <button @click="$router.push('/case')">
        蔷薇案例
        <span class="hover-box"></span>
      </button>
      <button @click="$router.push('/second')">
        自定义婚礼
        <span class="hover-box"></span>
      </button>
      <button @click="$router.push('/history')">
        公司历程
        <span class="hover-box"></span>
      </button>
    </div>
    <button class="login">用户登录</button>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "headerView",
  data() {
    return {
      class: "",
    };
  },
  methods: {
  },
};
// 要操作的元素
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.header-container {
  width: 100%;
}

.nav {
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  background-color: #fff;
  line-height: 80px;
  width: 100%;
  height: 80px;

  .logo {
    margin-left: 15%;

    .logoImg {
      width: 100%;
      height: 50%;
    }
  }

  .login {
    width: 100px;
    height: 40px;
    font-size: 15px;
    margin: 20px 0 20px 300px;
    border-radius: 35px;
    border: 1px solid rgb(12, 203, 217);
    color: rgb(36, 212, 224);
    background-color: rgba(94, 228, 238, 0.1);
  }
}

.btn-box {
  margin-left: 8%;

  button {
    text-align: center;
    margin-left: 5px;
    height: 80px;
    background-color: #fff;
    color: #828b9b;
    font-size: 16px;
    min-width: 130px;
    padding: 12px 0;
    .hover-box {
      border-radius: 10px;
      display: block;
      margin: 0 auto;
      margin-top: 10px;
      width: 20%;
      height: 3px;
      transition: 0.3s;
    }
  }

  button:hover {
    color: rgb(60, 60, 60);
    font-weight: 550;
    .hover-box {
      border-radius: 10px;
      display: block;
      margin: 0 auto;
      margin-top: 10px;
      width: 70%;
      height: 3px;
      background-color: rgba(12, 203, 217);
      transition: 0.5s;
    }
  }
}
</style>