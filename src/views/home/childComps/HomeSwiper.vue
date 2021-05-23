<template>
  <swiper>
    <swiper-item :key="index" v-for="(item, index) in banners">
      <a :href="item.link">
        <img :src="item.img" alt="" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      flag: false,
    };
  },
  name: "HomeSwiper",
  components: { Swiper, SwiperItem },
  methods: {
    imageLoad() {
      // if (!flags) {
      this.$emit("swiperImageLoad");
      //   this.flags = true;
      // }
    },
  },
};
</script>
<style>
</style>