/* eslint-disable react/prop-types */
import Favorite_Icon from "./Favorite_Icon";

const MovieCard = ({ movieData }) => {
  if (!movieData) {
    return <div>No movie data available</div>;
  }

  const { id, movie, rating, imdb_url } = movieData;

  const handleRedirect = (e) => {
    if (e.target.id !== "like") {
      // window.location.href = imdb_url
      window.open(imdb_url, "_blank");
    }
  };

  return (
    <div
      onClick={handleRedirect}
      className=" flex flex-col space-between  h-[150px] w-[250px] p-2 border border-1 border-black rounded shadow-md bg-white "
    >
      <Favorite_Icon id={id} />
      <div className="">
        <h1>Name : {movie}</h1>
        <h1>IMDB Rating: {rating}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
