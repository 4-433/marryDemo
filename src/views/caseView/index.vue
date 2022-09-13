<template>
  <div class="case-container">
    <div class="casesWarp">
      <div class="info">我们为您提供的套餐</div>

      <!-- card --statrt -->
      <div v-animate="'animate__animated animate__fadeInUp'" class="cardWarp">
        <div v-for="(item, index) in mealList" :key="index" class="card">
          <div class="title">{{ item.name }}</div>
          <div class="desc">{{ item.desc }}</div>
          <div class="more">查看更多优惠</div>
        </div>
      </div>
      <!-- case --end -->

      <!-- advertising --statrt -->
      <div class="advertisingWarp">
        <div class="bg">
          <img src="@/assets/image/case_bg.png" alt="" />
        </div>
        <div class="mask"></div>
        <div class="inner">
          <div class="note1">为您独家定制的服务</div>
          <div class="line"></div>
          <div class="note2">我们是专业的代名词</div>
          <div class="coverWarp">
            <div class="item">
              <img src="@/assets/image/case_cover_1.png" alt="" />
              <div class="text">专属</div>
            </div>
            <div class="item">
              <img src="@/assets/image/case_cover_2.png" alt="" />
              <div class="text">你的</div>
            </div>
            <div class="item">
              <img src="@/assets/image/case_cover_3.png" alt="" />
              <div class="text">婚礼</div>
            </div>
          </div>
        </div>
      </div>
      <!-- advertising --end -->

      <!-- events --statrt -->
      <div class="eventsWarp">
        <div class="info">您需要的我们都有</div>
        <div v-animate="'animate__animated animate__fadeInUp'" class="events">
          <div v-for="(item, index) in eventList" :key="index" class="event">{{ item }}</div>
        </div>
      </div>
      <!-- events --end -->

      <!-- video --statrt -->
      <div v-animate="'animate__animated animate__fadeInUp'" class="videoWarp">
        <video-player class="video-player vjs-custom-skin diyVideo" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
      </div>
      <!-- video --end -->

      <!-- logo --statrt -->
      <div class="logoWarp">
        <img src="@/assets/image/case_logo.png" alt="" />
      </div>
      <!-- logo --end -->

      <!-- btn --statrt -->
      <div v-animate="'animate__animated animate__fadeInUp'" class="btnWarp">定制你的婚礼</div>
      <!-- btn --end -->
    </div>
  </div>
</template>

<script>
import VideoPlayer from '@/components/VideoView'
// import 'video.js/dist/video-js.css'

export default {
  name: 'CaseIndex',
  components: { VideoPlayer },
  data() {
    return {
      // 套餐列表
      mealList: [
        {
          name: '香槟金奢华欧式婚礼',
          desc: '你要的高贵奢华都在这里'
        },
        {
          name: '蓝色的爱给亲爱的你',
          desc: '更多美好属性等你揭开'
        },
        {
          name: '森系大地婚礼',
          desc: '选我们就是选了专业'
        }
      ],
      // 项目列表
      eventList: ['仪式', '婚礼跟拍', '乐队', '司仪', '婚纱礼服', '造型化妆', '花艺', '婚纱租赁', '灯具'],
      playerOptions: {
        controls: false, //开启交互，即是用户可控。
        muted: true, //开启视频时是否静音
        fluid: true, //根据外层css样式大小，自动填充宽高！比较实用，可搭配响应式
        reload: 'auto', //重载
        // playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: true, // 如果true,浏览器准备好时开始回放。
        // muted: false, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        // aspectRatio: '4:3', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        // fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            // src: require('@/assets/video/4.mp4'), // 路径
            src: 'https://marrydemo.oss-cn-hangzhou.aliyuncs.com/vedio/4.mp4',
            type: 'video/mp4' // 类型
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.case-container {
  width: 1435px;
  margin: 0 auto;
  .casesWarp {
    .info {
      font-size: 35px;
      margin-top: 68px;
      margin-bottom: 55px;
      text-align: center;
      font-weight: lighter;
      letter-spacing: 3px;
      color: #000;
    }
    .cardWarp {
      display: flex;
      justify-content: center;
      margin-bottom: 110px;
      animation-duration: 1s;
      .card {
        width: 370px;
        height: 170px;
        background-color: #f0f1f0;
        color: #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        margin-right: 50px;
        &:last-child {
          margin-right: 0;
        }
        .title {
          font-size: 20px;
          margin-top: 20px;
          margin-bottom: 25px;
        }
        .desc {
          color: #8c8a8a;
          margin-bottom: 14px;
        }
        .more {
          color: #c39646;
        }
      }
    }
    .advertisingWarp {
      height: 800px;
      position: relative;
      overflow: hidden;
      animation-duration: 1s;

      img {
        height: 100%;
        object-fit: cover;
      }
      .mask {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(102, 64, 97, 0.3);
      }
      .inner {
        position: absolute;
        top: 70px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        .note1 {
          color: #fff;
          text-align: center;
          font-size: 50px;
          margin-bottom: 20px;
          font-weight: lighter;
        }
        .line {
          width: 112px;
          height: 3px;
          background-color: #fff;
          margin: 0 auto;
          margin-bottom: 10px;
        }
        .note2 {
          color: #fff;
          text-align: center;
          font-size: 30px;
          font-weight: lighter;
        }
        .coverWarp {
          width: 1250px;
          height: 500px;
          margin: 0 auto;
          display: flex;
          margin-top: 40px;
          .item {
            flex: 1;
            position: relative;
            background-color: #804b7e;
            .text {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              z-index: 2;
              font-size: 50px;
              color: #fff;
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
    .eventsWarp {
      .info {
        font-size: 30px;
        margin-top: 85px;
        margin-bottom: 60px;
        text-align: center;
        letter-spacing: 3px;
        font-weight: lighter;
        color: #000;
      }
      .events {
        width: 1100px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 50px;
        animation-duration: 1s;
        .event {
          width: 350px;
          height: 80px;
          background-color: #fff;
          margin-right: 20px;
          margin-bottom: 48px;
          line-height: 80px;
          text-align: center;
          font-size: 24px;
          color: #222;
          box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
          &:nth-child(3n) {
            margin-right: 0;
          }
        }
      }
    }
    .videoWarp {
      width: 1250px;
      height: 660px;
      margin: 0 auto;
      position: relative;
      margin-bottom: 130px;
      animation-duration: 1s;
      ::v-deep {
        .video-js {
          border-radius: 30px !important;
          .vjs-modal-dialog {
            border-radius: 30px !important;
          }
        }
      }
    }
    .logoWarp {
      width: 650px;
      margin: 0 auto;
      margin-bottom: 90px;
      img {
        width: 650px;
        // object-fit: cover;
        margin: 0 auto;
      }
    }
    .btnWarp {
      width: 200px;
      height: 65px;
      margin: 0 auto;
      margin-bottom: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 23px;
      font-weight: lighter;
      color: #fff;
      background-color: #142337;
      border-radius: 15px;
      animation-duration: 1s;
    }
  }
}
</style>
