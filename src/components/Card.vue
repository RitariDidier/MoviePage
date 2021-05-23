<template>

  <div class="box" >
      <div class="imgBx">
          <img v-bind:src="`${poster_path}`" alt="img" /> 
      </div>
      <div class="content">
          <h2> {{title}}  <span></span> </h2>
      </div>
  </div>



  <!-- <div class="card">
    
    <img v-bind:src="`${poster_path}`" alt="img" />
    
    <p>Titulo: {{ title }}</p>
    
  </div> -->

</template>

<script>
export default {
  name: "Card",
  props: ["title", "poster_path"],
};
</script>

<style>
  
</style>
