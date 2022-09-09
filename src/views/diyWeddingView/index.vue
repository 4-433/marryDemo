<!--
 * @Author: chaichai chaichai@cute.com
 * @Date: 2022-09-06 09:16:30
 * @LastEditors: chaichai chaichai@cute.com
 * @LastEditTime: 2022-09-08 10:24:20
 * @FilePath: \marry\src\views\diyWeddingView\index.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by CQUCC-4-433, All Rights Reserved. 
-->
<template>
  <div class="second-container">
    <!-- 主图 --start -->
    <div class="bannerImg">
      <div class="test1">计划和定制一场</div>
      <div class="test2">只属于你的婚礼</div>
    </div>
    <!-- 主图 --end -->
    <!-- 功能 --start -->
    <div class="functionBox">
      <div class="functionItem">
        <img src="@/assets/image/qiqiu.png" alt="" />
        <span>装饰</span>
      </div>
      <div class="functionItem">
        <img src="@/assets/image/lifuzhuanhuan.png" alt="" />
        <span>礼服</span>
      </div>
      <div class="functionItem">
        <img src="@/assets/image/shengdan-.png" alt="" />
        <span>造型</span>
      </div>
      <div class="functionItem">
        <img src="@/assets/image/music.png" alt="" />
        <span>乐队</span>
      </div>
      <div class="functionItem">
        <img src="@/assets/image/hunli-.png" alt="" />
        <span>婚礼策划</span>
      </div>
      <div class="functionItem">
        <img src="@/assets/image/zhubao.png" alt="" />
        <span>首饰</span>
      </div>
    </div>
    <!-- 功能 --end -->
    <!-- 优势 --start -->
    <div class="advantageBox">
      <img src="@/assets/image/hunligongmen.png" alt="" class="titleImg" />
      <div class="titleText">我们的优势</div>
      <div class="itemBox">
        <div
          v-animate="'animate__animated animate__fadeInUp'"
          class="advantageItem"
        >
          <div class="logo">
            <img src="@/assets/image/noun__cc.png" alt="" class="logoImg" />
          </div>
          <span class="item1"
            >效率
            <div class="item1Hover"></div>
          </span>
          <span class="item2">我们的婚礼策划师提供的服务</span>
          <span class="item2">可以为您节省大量时间</span>
        </div>

        <div
          v-animate="'animate__animated animate__fadeInUp'"
          class="advantageItem"
        >
          <div class="logo">
            <img src="@/assets/image/zhuanyefuwu.png" alt="" class="logoImg" />
          </div>
          <span class="item1"
            >专业
            <div class="item1Hover"></div>
          </span>
          <span class="item2">八年设计亲情奉献</span>
          <span class="item2">只为给您打造最完美的婚礼</span>
        </div>

        <div
          v-animate="'animate__animated animate__fadeInUp'"
          class="advantageItem"
        >
          <div class="logo">
            <img src="@/assets/image/tuandui.png" alt="" class="logoImg" />
          </div>
          <span class="item1"
            >专家团队
            <div class="item1Hover"></div>
          </span>
          <span class="item2">六年婚庆打造经验</span>
          <span class="item2">完美的现场布置和流程安排</span>
        </div>

        <div
          v-animate="'animate__animated animate__fadeInUp'"
          class="advantageItem"
        >
          <div class="logo">
            <img src="@/assets/image/jiagepaixu.png" alt="" class="logoImg" />
          </div>
          <span class="item1"
            >高性价比
            <div class="item1Hover"></div>
          </span>
          <span class="item2">更多活动和超低优惠</span>
          <span class="item2">还有豪华婚嫁大礼包</span>
        </div>
      </div>
    </div>
    <!-- 优势 --end -->
    <!-- 图片展示 --start -->
    <div class="imgShow">
      <div class="imgBox1">
        <div v-animate="'animate__animated animate__fadeInUp'" class="imgBox3">
          <div class="imgText">婚纱摄影</div>
          <div class="imgText2">捕捉你最美的每一刻</div>
          <img src="@/assets/image/history1.png" alt="" class="img1" />
        </div>
        <div v-animate="'animate__animated animate__fadeInUp'" class="imgBox6">
          <div class="imgBox4">
            <div class="imgText">婚礼鞋</div>
            <div class="imgText2">完美的婚鞋搭配完美的你</div>
            <img src="@/assets/image/history5.png" alt="" class="img2" />
          </div>
          <div class="imgBox5">
            <div class="imgText">婚礼花束</div>
            <div class="imgText2">只有最美的花能被你捧在手中</div>
            <img src="@/assets/image/history3.png" alt="" class="img3" />
          </div>
        </div>
      </div>
      <div v-animate="'animate__animated animate__fadeInUp'" class="imgBox2">
        <div class="imgText">礼服</div>
        <div class="imgText2">选择最适合你的完美婚纱</div>
        <img src="@/assets/image/history6.png" alt="" class="img4" />
      </div>
    </div>
    <!-- 图片展示 --end -->
    <!-- 底部图片 --start -->
    <div class="footImg">
      <img src="@/assets/image/hunligongmen.png" alt="" class="footLogo" />
      <div class="footText">梦蔷微 您的专属设计师</div>
      <img src="@/assets/image/history2.png" alt="" class="footImgs" />
    </div>
    <!-- 底部图片 --end -->
  </div>
</template>

<script>
export default {
  name: "SecondIndex",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.second-container {
  width: 1435px;
  // height: 100%;
  margin: 0 auto;
  .bannerImg {
    overflow: hidden;
    width: 1435px;
    height: 500px;
    background: url("@/assets/image/history4.png");
    background-size: cover;
    .test1 {
      position: relative;
      font-weight: 550;
      letter-spacing: 10px;
      left: 950px;
      top: 250px;
      color: #000;
      font-size: 35px;
      z-index: 999;
    }
    .test2 {
      position: relative;
      font-weight: 550;
      letter-spacing: 10px;
      left: 1100px;
      top: 280px;
      color: #000;
      font-size: 30px;
      z-index: 999;
    }
  }
  .functionBox {
    text-align: center;
    border: 1px solid #ccc;
    // width: 1435px;
    display: flex;
    flex-wrap: nowrap;
    height: 200px;
    .functionItem {
      display: flex;
      flex-wrap: wrap;
      width: 240px;
      img {
        // width: 44px;
        // height: 50px;
        width: 18%;
        height: 26%;
        margin: 0 auto;
        margin-top: 50px;
      }
      span {
        font-size: 16px;
        letter-spacing: 3px;
        color: rgb(37, 37, 37);
        width: 240px;
        height: 20px;
        margin-bottom: 50px;
      }
    }
  }
  .advantageBox {
    width: 100%;
    text-align: center;
    height: 500px;
    background-color: rgba(247, 247, 247);
    .titleImg {
      width: 30px;
      margin: 50px auto 10px auto;
    }
    .titleText {
      font-size: 30px;
      letter-spacing: 6px;
      font-weight: 550;
    }
    .itemBox {
      width: 1245px;
      display: flex;
      flex-wrap: nowrap;
      margin: 0 auto;
      .advantageItem {
        width: 300px;
        height: 200px;
        margin-top: 50px;
        background-color: #fff;
        border-top: 3px solid #f7ca62;
        animation-duration: 1s;
        .logo {
          position: relative;
          left: 110px;
          top: -45px;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 5px 5px 2px #c1c1c1;
          .logoImg {
            width: 35px;
            height: 35px;
            margin-top: 20px;
          }
        }
        .item1 {
          color: #000;
          .item1Hover {
            width: 20px;
            height: 2px;
            background: #e9ba4d;
            margin: 10px auto;
          }
        }
        .item2 {
          display: block;
          font-size: 14px;
        }
      }
      .advantageItem:not(:first-child) {
        margin-left: 15px;
      }
      .advantageItem:hover .item1Hover {
        width: 50px;
        height: 2px;
        background: #e9ba4d;
        transition: 0.3s;
      }
    }
  }
  .imgShow {
    background: #f7f7f7;
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 650px;
    .imgBox1 {
      flex: 1;
      .imgBox6 {
        height: 100%;
        display: flex;
        flex-wrap: nowrap;
        position: relative;
        animation-duration: 1s;
        .imgBox4 {
          margin-right: 10px;
          .img2 {
            width: 100%;
            height: 315px;
          }
        }
        .imgBox5 {
          position: relative;

          .img3 {
            width: 100%;
            height: 315px;
          }
        }
      }
      .imgBox3 {
        overflow: hidden;
        width: 100%;
        height: 325px;
        margin-bottom: 10px;
        position: relative;
        animation-duration: 1s;
        .img1 {
          width: 100%;
          height: 325px;
        }
      }
    }
    .imgBox2 {
      margin-left: 10px;
      position: relative;
      animation-duration: 1s;
      flex: 1;
      .img4 {
        width: 100%;
        height: 650px;
      }
    }
    .imgText {
      position: absolute;
      top: 30px;
      left: 40px;
      color: rgb(54, 54, 54);
      letter-spacing: 3px;
      font-weight: 550;
    }
    .imgText2 {
      position: absolute;
      font-size: 13px;
      top: 60px;
      left: 40px;
      color: rgb(54, 54, 54);
      letter-spacing: 2px;
    }
  }
  .footImg {
    margin-top: 10px;
    width: 100%;
    position: relative;
    background: #f7f7f7;
    margin-bottom: 1px;
    .footLogo {
      position: absolute;
      top: 50px;
      left: 49%;
    }
    .footImgs {
      width: 100%;
      margin: 0 auto;
    }
    .footText {
      position: absolute;
      top: 110px;
      left: 35%;
      font-size: 35px;
      font-weight: 550;
      letter-spacing: 6px;
    }
  }
}
</style>

<style>
</style>
