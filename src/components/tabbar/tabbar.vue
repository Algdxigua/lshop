<template>
  <div class="tabbar">
    <div
      class="tab_item"
      :class="{ selectIt: $route.path == '/index' }"
      @click="toJumpTo('/index')"
    >
      <span class="iconfont icon-TABbar-fill2"></span>
      <span>首页</span>
    </div>
    <div
      class="tab_item"
      :class="{ selectIt: $route.path == '/active' }"
      @click="toJumpTo('/active')"
    >
      <span class="iconfont icon-tabbar-market-active"></span>
      <span>商店</span>
    </div>
    <div
      class="tab_item"
      :class="{ selectIt: $route.path == '/shop' }"
      @click="toJumpTo('/shop')"
    >
      <span class="iconfont icon-TABbar-fill1"></span>
      <span>订单</span>
    </div>
    <div
      class="tab_item"
      :class="{ selectIt: $route.path == '/me' }"
      @click="toJumpTo('/me')"
    >
      <span class="iconfont icon-TABbar-fill"></span>
      <span>我的</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    //跳转页面
    toJumpTo:function(e){
      this.$router.replace(e)
    }
  },
};
</script>
<style lang="scss" scoped>
.tabbar {
  width: 100%;
  height: 55px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  display: flex;
  border-top: 1px solid #eaeaea;
  padding: 5px 0px;
  box-sizing: border-box;
  .selectIt {
    span {
      color: forestgreen !important;
    }
  }
  .tab_item {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #333333;
    font-size: 30px;

    span {
      font-size: 14px;
      color: #999999;

      &:first-child {
        font-size: 25px;
      }
    }
  }
}
</style>  