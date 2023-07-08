import {deserialize} from "@tsed/json-mapper";
import {Movie} from "./Movie";

export interface ResponseMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string,
  Poster: string
}

export function moviesMapper(responseMovies: ResponseMovie[]): Movie[] {
  return deserialize(responseMovies.map((movie) => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type,
      poster: movie.Poster
    }
  }), {type: Movie})
}
