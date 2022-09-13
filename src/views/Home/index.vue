<template>
  <div class="home-container">
    <!-- video --statrt -->
    <div v-animate="'animate__animated animate__fadeInUp'" class="videoWarp">
      <video-player class="video-player vjs-custom-skin diyVideo" ref="videoPlayer" highe="500" :playsinline="true" :options="playerOptions"></video-player>
    </div>
    <!-- video --end -->
    <!-- events --statrt -->
    <div class="eventsWarp">
      <div class="info">您需要的我们都有</div>
      <div class="info2">为完美的你做足保障</div>

      <div v-animate="'animate__animated animate__fadeInUp'" class="events">
        <div v-for="(item, index) in eventList" :key="index" class="event">{{ item }}</div>
      </div>
    </div>
    <!-- events --end -->
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
    <!-- 公司历程 --start -->
    <!-- 公司历程 --end -->
  </div>
</template>

<script>
import VideoPlayer from '@/components/VideoView'

export default {
  name: 'HomeIndex',
  components: { VideoPlayer },

  data() {
    return {
      eventList: ['仪式', '婚礼跟拍', '乐队', '司仪', '婚纱礼服', '造型化妆', '花艺', '婚纱租赁', '灯具'],
      playerOptions: {
        controls: false, //开启交互，即是用户可控。
        muted: true, //开启视频时是否静音
        fluid: true, //根据外层css样式大小，自动填充宽高！比较实用，可搭配响应式
        reload: 'auto', //重载
        autoplay: true, // 如果true,浏览器准备好时开始回放。
        // muted: false, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        // aspectRatio: '4:3', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        // fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
             src: 'https://marrydemo.oss-cn-hangzhou.aliyuncs.com/vedio/1.mp4', // 路径
             type: 'video/mp4' // 类型
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
}
.videoWarp {
  width: 1250px;
  // height: 500px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 80px;
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
.eventsWarp {
  .info {
    font-size: 35px;
    text-align: center;
    font-weight: lighter;
    color: #000;
  }
  .info2 {
    font-size: 30px;
    margin-bottom: 60px;
    text-align: center;
    font-weight: lighter;
    color: #000;
  }
  .events {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
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
.imgShow {
  background: #f7f7f7;
  display: flex;
  flex-wrap: nowrap;
  width: 1250px;
  margin: 0 auto;
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
</style>
