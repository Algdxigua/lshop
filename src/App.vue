<template>
  <div id="app">
    <router-view />
    <tabbar></tabbar>
  </div>
</template>

<script>
import  tabbar  from "./components/tabbar/tabbar.vue";
export default {
  name: "App",
  components: {
    tabbar,
  },
};
</script>

<style>
 #app{
   height: 100%;
   width: 100%;
 }
</style>

