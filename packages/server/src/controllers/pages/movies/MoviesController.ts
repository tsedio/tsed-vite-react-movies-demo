import {Controller} from "@tsed/common";
import {Get, Returns} from "@tsed/schema";
import {Vite} from "@tsed/vite-ssr-plugin";
import {moviesMapper, ResponseMovie} from "./MovieMapper";

@Controller("/movies")
export class MoviesController {
  @Get("/")
  @Vite()
  @(Returns(200, String).ContentType("text/html"))
  async getMovies() {
    const response = await fetch("http://www.omdbapi.com/?apikey=ad06eb84&s=star%20wars");

    const {Search} = (await response.json()) as {Search: ResponseMovie[]};

    return {
      movies: moviesMapper(Search),
      generatedAt: new Date().toISOString()
    };
  }
}
