import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryConatiner = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="-mt-60 relative z-20">
        <MovieList title={"Now Playing"} movie={movies.nowPlayingMovies} />
        <div className="bg-black">
          <MovieList title={"Top Rated Movies"} movie={movies.topRatedMovies} />
          <MovieList title={"Popular"} movie={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movie={movies.upComingMovies} />
          <MovieList title={"Now Playing"} movie={movies.nowPlayingMovies} />
          <MovieList title={"Now Playing"} movie={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryConatiner;
