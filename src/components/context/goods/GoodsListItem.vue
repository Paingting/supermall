<template>
  <div class="goods-item" @click="getGoodsItem">
    <img :src="goodsItem.show.img" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    getGoodsItem() {
      // console.log(this.goodsItem);
      // this.$router.push("/detail/" + this.goodsItem.iid);
      this.$router.push({
        path: "/detail",
        query: {
          iid: this.goodsItem.iid,
        },
      });
    },
  },
};
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  width: 45%;
  position: relative;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
  border: 3px solid var(--color-tint);
}
.goods-info {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 5px;
  display: inline-block;
  font-size: 12px;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
}
</style>