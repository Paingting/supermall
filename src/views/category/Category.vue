<template>
  <div class="wrapper"></div>
</template>
<style scoped>
.wrapper {
  height: 400px;
  overflow: hidden;
}
</style>
<script>
import BScroll, { PullDownRefresh } from "better-scroll";
export default {
  name: "Category",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(".wrapper", {
      probeType: 3,
      pullUpLoad: true,
    });
    this.scroll.on("scroll", (position) => {
      // console.log(position);
    });
    this.scroll.on("pullingUp", () => {
      console.log("jiazai");
    });
  },
};
</script>