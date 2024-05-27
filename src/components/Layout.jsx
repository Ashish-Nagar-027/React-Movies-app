import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className=" flex-1 flex-column ">
      <h1 className="py-5 text-red-400 text-center">Movies App</h1>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
