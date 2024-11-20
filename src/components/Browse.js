import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies";
import Header from "./Header";
import MainConatiner from "./MainConatiner";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainConatiner />
    </div>
  );
};

export default Browse;
