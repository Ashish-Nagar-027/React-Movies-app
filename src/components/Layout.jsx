import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div id="layout" className="bg-[#f7f9fb] flex-1 flex-column ">
      <h1 className="py-4  text-2xl font-bold text-[#4e42d4] text-center">
        Movies App
      </h1>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
