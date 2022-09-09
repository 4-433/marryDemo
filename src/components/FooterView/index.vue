<template>
  <div class="footer-container">
    <div class="line-warp">
      <img src="@/assets/image/footer-line.png" alt="" />
      <img src="@/assets/image/footer-line.png" alt="" />
    </div>
    <div class="links-warp">
      <div class="link">关于我们</div>
      <div class="link">版权信息</div>
      <div class="link">免责声明</div>
      <div class="link">联系我们</div>
    </div>
    <div class="icp-warp">管理信息中心主办 京ICP备00000000号-0</div>
    <div class="copyright-warp">
      <p>Copyright © 2021， Dream Rose Studio.Ltd. All Rights Reserved.</p>
      <p>梦蔷薇策划工作室</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterView',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.footer-container {
  width: 100vw;
  padding-bottom: 20px;
  .line-warp {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 93px;
    img {
      width: 40%;
      object-fit: cover;
      margin: 0 50px;
      &:nth-child(2) {
        transform: rotate(180deg);
      }
    }
  }
  .links-warp {
    display: flex;
    justify-content: center;
    align-items: center;
    .link {
      width: 128px;
      height: 16px;
      line-height: 16px;
      border-right: 1px solid #b5b5b5;
      text-align: center;
      font-size: 16px;
      color: #b5b5b5;
      transition: all 0.3s;
      &:hover {
        color: #d5b66f;
      }
      &:nth-child(4) {
        border-right: none;
      }
    }
  }
  .icp-warp {
    font-size: 16px;
    color: #666666;
    text-align: center;
    margin-top: 35px;
  }
  .copyright-warp {
    font-size: 18px;
    text-align: center;
    color: #aaaaaa;
  }
}
</style>
