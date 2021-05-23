<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <i class="iconfont ;" slot="item-icon">&#xe745;</i>
      <i class="iconfont ;" slot="item-icon-active">&#xe678;</i>
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <i class="iconfont ;" slot="item-icon">&#xe747;</i>
      <i class="iconfont ;" slot="item-icon-active">&#xe678;</i>
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <i class="iconfont ;" slot="item-icon">&#xe748;</i>
      <i class="iconfont ;" slot="item-icon-active">&#xe678;</i>
      <div slot="item-text">购物车</div>
    </tab-bar-item>

    <tab-bar-item path="/profile">
      <i class="iconfont ;" slot="item-icon">&#xe6ef;</i>
      <i class="iconfont ;" slot="item-icon-active">&#xe678;</i>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<style scoped>
</style>

<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>