import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-row mb-5  justify-around bg-slate-400 p-4">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-400" : "text-white"
          }
        >
          Movies
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/fav"
          className={({ isActive }) =>
            isActive ? "text-red-400" : "text-white"
          }
        >
          Favorite Movies
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
