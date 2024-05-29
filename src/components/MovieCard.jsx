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
      className=" 
      transition-all duration-500 ease-in-out
      flex flex-col  
      justify-around   
      h-[150px] w-[250px] 
      p-2 border border-1 
       border-slate-300
  
      rounded 
      bg-white 
      hover:scale-[1.03]
       hover:border-slate-600
      
      "
    >
      <Favorite_Icon id={id} />
      <div className="">
        <h1>
          <span className="font-bold">Movie Name : </span>
          <span className="text-blue-600">{movie}</span>
        </h1>
        <h1>
          <span className="font-bold">IMDB Rating: </span>
          <span className="text-blue-600">{rating}</span>
        </h1>
      </div>
    </div>
  );
};

export default MovieCard;
