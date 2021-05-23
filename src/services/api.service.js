import axios from "axios";

const apiKey = "38f4ad5cc0254ac3cc83e49224c2dbd3";
const baseURL = `https://api.themoviedb.org/3/movie/`;
class ApiService {
  constructor() {
    this.resource = axios.create({ baseURL });
    this.apiKey = `api_key=${apiKey}&language=en-US`;
  }
  // Retorna las películas populares
  getPopular(currentPage) {
    return this.resource.get(`popular?${this.apiKey}&page=${currentPage}`);
  }
  // Retorna las películas mejores valoradas
  getTopRated(currentPage) {
    return this.resource.get(`top_rated?${this.apiKey}&page=${currentPage}`);
  }
  // Retorna una película en específico (según su id)
  getMovie(movieId) {
    return this.resource.get(`${movieId}?${this.apiKey}`);
  }
}
export default new ApiService();
