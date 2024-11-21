import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import usePopularMovies from "../utils/hooks/usePopularMovies";
import useRatedMovies from "../utils/hooks/useRatedMovies";
import useUpcomingMovies from "../utils/hooks/useUpcomingMovies";
import Header from "./Header";
import MainConatiner from "./MainConatiner";
import SecondaryConatiner from "./SecondaryConatiner";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainConatiner />
      <SecondaryConatiner />
    </div>
  );
};

export default Browse;
