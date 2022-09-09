<template>
  <div class="history-container">
    <div class="bgWarp">
      <img src="@/assets/image/history_bg3.png" alt="" />
      <div class="text">
        <div class="zh">走近我们，了解你自己</div>
        <div class="en">Come to us and know yourself</div>
      </div>
    </div>
    <div class="historyWarp">
      <div class="title">
        <div class="zh">公司历程</div>
        <div class="en">Company History</div>
      </div>
      <div class="times">
        <div class="bg">
          <img src="@/assets/image/history_line.png" alt="" />
        </div>
        <!-- content --start -->
        <div v-animate="'animate__animated animate__fadeInUp'" v-for="(time, index) in timeList" :key="index" class="timeItem">
          <div class="inner">
            <div class="time">
              <img :src="time.image" alt="" />
            </div>
            <div class="titleEn">{{ time.titleEn }}</div>
            <div class="titleZh">{{ time.titleZh }}</div>
            <div class="desc">{{ time.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import time1 from '@/assets/image/history_time1.png'
import time2 from '@/assets/image/history_time2.png'
import time3 from '@/assets/image/history_time3.png'
import time4 from '@/assets/image/history_time4.png'
import time5 from '@/assets/image/history_time5.png'

export default {
  name: 'HistoryIndex',
  data() {
    return {
      timeList: [
        {
          image: time1,
          titleEn: 'Dream Rose · Luxury Planning',
          titleZh: '梦蔷薇项目于10月正式立项',
          desc: '为了让客户可以在家电话或app下单便能享受到 派对，梦蔷薇项目于2019年10月立项，启动派对 解决计划。'
        },
        {
          image: time2,
          titleEn: 'Dream Rose · Luxury Planning',
          titleZh: '南通工作室正式成立',
          desc: '历经半年沉淀，公司最初的两个合伙人正式成立公司，南通第一家工作室成立。'
        },
        {
          image: time3,
          titleEn: 'Dream Rose · Luxury Planning',
          titleZh: '第一套宣传照片制作完毕，公司投入线上宣传',
          desc: '公司在线拍摄了第一套宣传照片，同样感谢当时在场的工作人员，没有他们公司不会开始朋友圈的线上投放。并着手规划西安工作室。'
        },
        {
          image: time4,
          titleEn: 'Dream Rose · Luxury Planning',
          titleZh: '公司核心团队扩张',
          desc: '公司初创团队中剩余的三人加入团队，核心团队一共五人共同合作。规划未来。'
        },
        {
          image: time5,
          titleEn: 'Dream Rose · Luxury Planning',
          titleZh: '',
          desc: '梦蔷薇 奢华订制'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.history-container {
  .bgWarp {
    height: 500px;
    width: 1435px;
    margin: 0 auto;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
      text-align: center;
      font-weight: lighter;
      .en {
        font-size: 30px;
      }
      .zh {
        font-size: 40px;
      }
    }
  }
  .historyWarp {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    overflow: hidden;
    margin-bottom: 80px;
    color: #000;
    .title {
      text-align: center;
      padding-top: 140px;
      .en {
        font-size: 23px;
      }
      .zh {
        font-size: 38px;
      }
    }
    .times {
      margin-top: 100px;
      position: relative;
      padding: 0 60px;
      .bg {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .timeItem {
        padding: 40px 0;
        animation-duration: 1s;
        &:nth-child(odd) {
          display: flex;
          flex-direction: row-reverse;
        }
        &:last-child {
          .inner {
            .desc {
              font-family: '宋体';
              font-size: 28px;
              color: #999999;
            }
          }
        }
        .inner {
          width: 360px;
          .time {
            height: 62px;
            margin-bottom: 10px;
            img {
              height: 100%;
              object-fit: cover;
            }
          }
          .titleEn {
            font-size: 21px;
            margin-bottom: 10px;
            color: #000;
            font-weight: 600;
          }
          .titleZh {
            font-size: 21px;
            margin-bottom: 25px;
            color: #000;
            font-weight: 600;
          }
          .desc {
            font-family: '宋体';
            font-size: 17px;
            color: #999999;
          }
        }
      }
    }
  }
}
</style>
