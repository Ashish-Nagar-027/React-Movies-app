import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  const favoriteMovies = useSelector((state) => state.FavMoviesData.FavMovies);

  return (
    <div className="flex flex-row mb-5  bg-slate-300 ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex-1 text-center p-4 text-xl  ${
            isActive
              ? "border-b-4  font-bold border-slate-600 text-[#4e42d4] bg-slate-400"
              : "text-black  font-semibold"
          }
           hover:text-[#4e42d4] 
           hover:font-bold 
        
           hover:border-b-4
          
          `
        }
      >
        Movies
      </NavLink>

      <NavLink
        to="/fav"
        className={({ isActive }) =>
          `flex-1 text-center text-xl  p-4 ${
            isActive
              ? "text-[#4e42d4]  font-bold bg-slate-400 border-b-4 border-slate-600 "
              : "text-black  font-semibold "
          }
          
           hover:text-[#4e42d4] 
           hover:font-bold 
           hover:border-b-4
         
          `
        }
      >
        Favorite Movies ({favoriteMovies?.length})
      </NavLink>
    </div>
  );
};

export default NavBar;
