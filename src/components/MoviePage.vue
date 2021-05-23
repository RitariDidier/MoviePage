<template>
    
    <div class="moviePage">
        <div class="moviePage__info">
            
            <h3>{{ this.movie.title }}</h3>
          
            <ul class="genresList">
                <li class="genre" v-for="g in this.genres"
                 v-bind:key="g.id"
                > {{g.name}}</li>
                
            </ul>
              <p> Release Date: {{this.movie.release_date }} </p>
            <div class="votes">
                
                <p>
                    {{this.movie.vote_average}}
                </p>

                
                <img class="star" src="https://image.flaticon.com/icons/png/512/1828/1828884.png" alt="">
                
                
            </div>
           <div class="overview">
                <p >
                    {{this.movie.overview}}
                </p>
           </div>
            
        </div>
        <div class="moviePage__img">
            <img class="img1" v-bind:src="`https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`" alt="img" />
            <img class="img2" v-bind:src="`https://image.tmdb.org/t/p/w500/${this.movie.backdrop_path}`" alt="img" />

        </div>
    </div>

</template>

<script>
// import Movie from '../models/Movie.js';
import ApiService from "../services/api.service.js";
import Movie from '../models/Movie'
export default {
    name: "MoviePage",
    props: ["movieId"],
    data(){
        return {
           movie : Movie,
           genres : []
        }
    },
     mounted() {
    this.getMovie();
   
     },
    methods:{
        getMovie(){
            ApiService.getMovie(this.$route.params.id).then(({ data }) => {
                this.movie = data;
                this.genres = this.movie.genres;
              
      }) 
      
    },
   
    },

}
</script>

<style>
    
</style>