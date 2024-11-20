import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainConatiner = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return <div>Loading...</div>; // Check if the movies data is available before rendering the component

  const mainMovies = movies[0];
  console.log(mainMovies);

  const { original_title, overview, id } = mainMovies;

  return (
    <div className="relative">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainConatiner;
