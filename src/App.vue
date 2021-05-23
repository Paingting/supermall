<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <keep-alive exclude="Detail"><router-view /></keep-alive>
  </div>
</template>

<script>
import mainTabBar from "./components/context/mainTabBar/mainTabBar";
export default {
  name: "App",
  components: {
    mainTabBar,
  },
};
</script>

<style scoped>
@import "./assets/css/base.css";
</style>
