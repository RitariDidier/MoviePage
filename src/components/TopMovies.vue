<template>
  <div class="topMovies" :key="rndKey" v-if="isMounted">
    <ul  class="cards">
      <Card v-on:click.native="FotoClickeada(Movie)"
        v-for="Movie in MoviesV"
        v-bind:key="Movie.ID"
        :title="Movie.title"
        :poster_path="Movie.poster_path"
      />
    </ul>
    <button v-on:click="loadMore()" >Load More</button>
  </div>
</template>

<script>
import ApiService from "../services/api.service.js";
import Card from "./Card";
import Movie from "../models/Movie";
export default {
  name: "TopMovies",
  components: { Card },
  data() {
    return {
      MoviesV: [],
      isMounted: false,
      page: 0,
      rndKey:0,
    };
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      ApiService.getTopRated().then(({ data }) => {
        for (let i = 0; i < data.results.length; i++) {
          // console.log(data);
          this.MoviesV[i] = new Movie(data.results[i]);
         
        }
        this.page = this.page + 1;
        this.isMounted = true;
      });
    },
    loadMore(){
    
  
      this.page = this.page + 1;
  
      ApiService.getTopRated(this.page).then(({ data }) => {
        var largo = this.MoviesV.length;
        for (let i = 0; i < data.results.length; i++) {
          // console.log(data);
          this.MoviesV[largo] = new Movie(data.results[i]);
          largo = largo +1;
        }
      this.rndKey = this.rndKey+1;
      });
      
    },
    FotoClickeada(Movie){

      this.$router.push({ name: 'moviepage', params: { id: Movie.id } });
 
  
    }

  },
};
</script>

<style></style>
