import PopularMovies from "../components/PopularMovies";
import TopMovies from "../components/TopMovies";
import MoviePage from "../components/MoviePage";

export const routes = [
  { path: "/", component: PopularMovies },
  { path: "/topmovies", component: TopMovies },
  { name:"moviepage" ,path: "/moviepage/:id", component: MoviePage},
  
];
