<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" :shopInfo="shopInfo" />
      <detail-own-info :ownInfo="ownInfo"></detail-own-info>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import detailSwiper from "./childComps/detailSwiper";
import detailNavBar from "./childComps/detailNavBar";
import detailBaseInfo from "./childComps/detailBaseInfo";
import detailOwnInfo from "./childComps/detailOwnInfo";
import { getDetail, Goods } from "network/detail";

export default {
  name: "Detail",
  components: {
    Scroll,
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailOwnInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: [],
      showInfo: [],
      ownInfo: [],
    };
  },
  created() {
    //保存传入的iid
    this.iid = this.$route.query.iid;
    console.log(this.iid);
    //根据iid请求数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;

      // 获取顶部的图片轮播数据
      this.topImages = data.itemInfo.topImages;

      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取shopInfo信息
      this.shopInfo = data.shopInfo;
      //获取资料信息
      this.ownInfo = data.ownInfo;
    });
  },
};
</script>

<style scoped>
.content {
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>