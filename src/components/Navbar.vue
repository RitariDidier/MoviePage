<template>
  <nav>
 <div class="containerLinks">
      <router-link to="/">Popular Movies</router-link>
      <router-link to="/topmovies">Top Movies</router-link>
 </div>
      <router-view></router-view>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
  
}
.containerLinks{
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: flex-end;
  justify-content: flex-end;
  
}
</style>
