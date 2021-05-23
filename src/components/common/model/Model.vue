<template>
  <div class="con">
    <button @click="model">点击</button>
    <h2>{{ context }}</h2>
  </div>
</template>

<script>
import { model } from "../../../network/model";
export default {
  name: "Model",
  data() {
    return {
      context: {},
    };
  },

  methods: {
    model() {
      model().then((res) => {
        this.context = res;
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
</style>