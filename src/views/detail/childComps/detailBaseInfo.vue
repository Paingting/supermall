<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="indo-price">
      <span class="n-price">￥{{ goods.newPrice }}</span>
      <span class="o-price">￥{{ goods.lowNowPrice }}</span>
      <div class="radius">
        <span class="discount">{{ goods.discount }}</span>
      </div>
      <span v-if="goods.do"></span>
    </div>
    <div class="number-price">
      <span class="services">销量 {{ shopInfo.services }}</span>
      <span class="favor">收藏 {{ shopInfo.favor }}</span>
      <span class="time">{{ shopInfo.time }}</span>
    </div>
    <div class="back">
      <span class="tip"> {{ shopInfo.tip }}</span>
      <span class="free"> {{ shopInfo.free }}</span>
      <span class="cancle"> {{ shopInfo.cancle }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBaseInfo",
  props: {
    goods: {
      typeof: Object,
      default() {
        return {};
      },
    },
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  padding: 0 5px;
}
.info-title {
  font-size: 25px;
  font-style: initial;
  padding: 20px 0;
}
.indo-price {
  padding-bottom: 20px;
}
.n-price {
  color: palevioletred;
  font-size: 25px;
}
.o-price {
  color: gray;
  text-decoration: line-through;
  padding: 0 10px;
}
.radius {
  border: 1px solid red;
  border-radius: 8px;
  background: red;
  color: white;
  vertical-align: top;
  display: inline-block;
}
.discount {
  padding: 5px;
}
.number-price {
  font-size: 17px;
  padding-bottom: 10px;
  display: flex;
  color: rgb(114, 106, 106);
  border-bottom: 2px solid rgba(114, 106, 106, 0.2);
}
.services,
.favor {
  flex: 1;
}

.back {
  padding-bottom: 20px;
  padding-top: 20px;
  display: flex;
  font-size: 18px;
  border-bottom: 8px solid rgba(114, 106, 106, 0.1);
}
.tip,
.free {
  flex: 1;
}
</style>