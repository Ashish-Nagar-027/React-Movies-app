import Layout from "./components/Layout";
import FavMovies from "./pages/FavMovies";
import Movies from "./pages/Movies";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Movies /> },

      { path: "/fav", element: <FavMovies /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
