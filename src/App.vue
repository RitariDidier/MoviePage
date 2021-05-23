<template>
  <div id="app">
    <div class="content">
      <Navbar />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
};
</script>

<style lang="scss" src="../src/style/style.scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
//   margin: 0%;
//   padding: 0;
// }
// .content{
//   display: flex;
//   flex-direction: column;
// }
</style>
