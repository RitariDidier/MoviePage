<template>
  <div class="popularMovies" :key="rndKey" v-if="isMounted">
    <ul class="cards">
      <Card v-on:click.native="FotoClickeada(Movie)"
        v-for="Movie in MoviesV"
        v-bind:key="Movie.ID"
        :title="Movie.title"
        :poster_path="Movie.poster_path"
        
      />
    </ul>

  <button class="box button" v-on:click="loadMore()" >Load More</button>

  </div>
</template>

<script>
import ApiService from "../services/api.service.js";
import Movie from "../models/Movie.js";
import Card from "./Card";
export default {
  name: "PopularMovies",
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
      ApiService.getPopular().then(({ data }) => {
        for (let i = 0; i < data.results.length; i++) {
     
          this.MoviesV[i] = new Movie(data.results[i]);
        }
        this.isMounted = true;
      });
    },
    loadMore(){
      console.log("LOADING MORE");
  
      this.page = this.page + 1;
  
      ApiService.getTopRated(this.page).then(({ data }) => {
        var largo = this.MoviesV.length;
        for (let i = 0; i < data.results.length; i++) {
       
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

<style>
.cards{
  display: grid;
  grid-template-columns: repeat(4, 1fr) ;
}
</style>
