<template>
  <div class="box">
    <div>
      <span class="head"><img :src="ownInfo.img" alt="" /></span>
      <span class="name"> {{ ownInfo.headName }}</span>
    </div>
    <div class="box1">
      <div class="left">
        <div class="a1">{{ ownInfo.sale }}万</div>
        <div class="a2">
          {{ ownInfo.restore }}
        </div>
        <div class="b1">总销量</div>
        <div class="b2">全部宝贝</div>
      </div>
      <div class="right"></div>
    </div>
    <span>{{ ownInfo.create | showDate }}</span>
    <!-- <div>{{ showDate(ownInfo.create) }}</div> -->
  </div>
</template>

<script>
//引入非defalut时使用花括号
import { formatDate } from "../../../common/time";
export default {
  name: "detailOwnInfo",
  components() {
    formatDate;
  },
  props: {
    ownInfo: Object,
    default() {
      return {};
    },
  },
  filters: {
    // 评论时间格式化
    showDate(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
    // 方法二用计算属性 因为vue3的过滤器失效

    // computed: {
    //   showDate() {
    //     return function (value) {
    //       // 将时间戳转成Date对象
    //       // console.log(ownInfo);
    //       const date = new Date(value * 1000);
    //       //将date进行格式化
    //       return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    //     };
    //   },
    // },
  },
};
</script>

<style scoped>
.box {
  height: 100vh;
  width: 100%;
}
.head img {
  border-radius: 50%;
}
.name {
  font-size: 20px;
  vertical-align: super;
  margin-left: 10px;
}
.left {
  display: inline-block;
  width: 50%;
}
.right {
  display: inline-block;
  width: 50%;
  background: lightcoral;
}
.box1 {
  padding-top: 25px;
}
.a1,
.a2,
.b1,
.b2 {
  display: inline-block;
  width: 100px;
}
.a1,
.b1 {
  text-align: center;
}
.a2,
.b2 {
  text-align: center;
  border-right: 2px solid rgba(114, 106, 106, 0.2);
}
</style>