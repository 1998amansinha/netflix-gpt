import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {
  if (!movie) return;

  return (
    <div className="ml-6 text-white">
      <h1 className="text-3xl  ml-2">{title}</h1>
      <div className="flex py-8 overflow-x-scroll scrollbar-hide">
        <div className="flex ">
          {movie.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.backdrop_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
