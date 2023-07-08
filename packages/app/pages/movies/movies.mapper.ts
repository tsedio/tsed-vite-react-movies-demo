import {Movie} from "./movies.interface";

export interface ResponseMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string,
  Poster: string
}

export function mapToDomain(responseMovies: ResponseMovie[]): Movie[] {
  return responseMovies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    type: movie.Type,
    poster: movie.Poster
  }));
}
