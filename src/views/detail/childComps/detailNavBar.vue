<template>
  <nav-bar>
    <div slot="left" class="back" @click="backUp">
      <img src="~assets/images/common/back.svg" alt="left" />
    </div>
    <div slot="center" class="detail">
      <div
        v-for="(item, index) in titles"
        :key="index"
        class="title"
        @click="detail(index)"
        :class="{ active: currentIndex === index }"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "detailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    detail(index) {
      this.currentIndex = index;
      console.log(index);
    },
    backUp() {
      this.$router.go(-1);
      // this.$router.back();
    },
  },
};
</script>

<style scoped>
.back img {
  margin-top: 10px;
}
.detail {
  display: flex;
}
.title {
  flex: 1;
}
.active {
  color: red;
  border-bottom: 3px solid red;
}
</style>