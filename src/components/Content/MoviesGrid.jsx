import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";

export const MoviesGrid = () => {
  const movies = useSelector((state) => state.movies.Search);
  console.log(movies);

  //Si no hay peliculas
  if (!movies) {
    return (
      <div className="text-center p-3">
        <h1>No Movies</h1>
      </div>
    );
  }
  return (
    <div className="row justify-content-md-center align-items-center p-3 text-center">
      {movies.map((movie) => (
        <Card img={movie.Poster} title={movie.Title} imdbID={movie.imdbID} year={movie.Year} type={movie.Type}/>
      ))}
    </div>
  );
};
