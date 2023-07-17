import {PageContext} from "../../renderer/types";
import {Movie} from "./movies.interface";

export function Page({movies, generatedAt}: PageContext & { movies: Movie[], generatedAt: string }) {
  return (
    <>
      <h1 className="text-xl font-bold mb-2">Movies</h1>
      <small className="text-gray-700 italic mb-5 block">This page was built {generatedAt}</small>

      <div className="grid gap-5 grid-cols-2">
        {
          movies.map((movie) => {
            return (
              <div key={movie.id} className="flex items-center bg-gray-200">
                <img src={movie.poster} alt={movie.title} style={{width: "100px"}}/>
                <h2 className="p-2">{movie.title}</h2>
              </div>
            );
          })
        }
      </div>
    </>
  );
}
