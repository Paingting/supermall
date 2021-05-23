<template >
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="TabClick"
      ref="tabControl1"
      class="tab-con"
      v-show="isTopFixed"
    ></tab-control>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="moreUp"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="TabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="GoodsList"></goods-list>
    </scroll>

    <!-- 监听事件添加native可以监听组件 -->
    <back-top @click.native="backClick" v-show="isbackTop"> </back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import FeatureView from "./childComps/FeatureView";

import TabControl from "components/context/tabControl/TabControl";
import NavBar from "../../components/common/navbar/NavBar";
import GoodsList from "components/context/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backtop/BackTop";

import { getHomeMulitidata, getHomeGoods } from "../../network/home.js";
import { debounce } from "common/utils/Utils.js";

export default {
  name: "Home",
  components: {
    HomeRecommendView,
    HomeSwiper,
    FeatureView,

    TabControl,
    NavBar,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      correntType: "pop",
      isbackTop: false,
      tabOffsetTop: 0,
      isTopFixed: false,

      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  computed: {
    GoodsList() {
      return this.goods[this.correntType].list;
    },
  },

  activated() {
    //0秒滚动到之前停留的位置
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    //为了避免b-s的bug 再次将b-s进行一次刷新
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // console.log(this.$refs.scroll.saveY());
    // 记录离开时的位置
    this.saveY = this.$refs.scroll.saveY();
  },

  created() {
    // 请求多个数据
    this.getHomeMulitidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("news");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 防抖函数的使用
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    //监听图片加载完成
    this.$bus.$on("itemImageLoad", function () {
      refresh();
    });
  },
  methods: {
    //事件监听相关的方法
    TabClick(index) {
      switch (index) {
        case 0:
          this.correntType = "pop";
          break;
        case 1:
          this.correntType = "news";
          break;
        case 2:
          this.correntType = "sell";
          break;
      }

      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isbackTop = -position.y > 1000;
      // 2.判断是否吸顶
      this.isTopFixed = -position.y > this.tabOffsetTop - 45;
    },
    moreUp() {
      getHomeGoods(this.currentType);
      console.log("123");
    },
    swiperImageLoad() {
      //得到tabControl的offsetTop值
      //所有的组件都有一个属性$el：获取组件的根元素对象
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    //网络请求相关的方法
    getHomeMulitidata() {
      getHomeMulitidata().then((res) => {
        // this.result = res;
        this.banners = res.data.banners;
        this.recommends = res.data.recommends;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // console.log(res);
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 94vh;

  /* position: relative; */
}

.home-nav {
  /* position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9; */

  background-color: var(--color-tint);
  color: var(--color-background);
}

.content {
  /* position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0; */
  height: calc(100vh - 93px);
  overflow: hidden;
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
}
.tab-con {
  width: 100%;
  position: fixed;
  z-index: 9;
}
</style>
