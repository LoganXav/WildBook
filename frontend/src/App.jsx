import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import SidePanel from "./components/commons/SidePanel";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Author from "./pages/Author";
import Search from "./pages/Search";
import Article from "./pages/Article";


function App() {
  const Layout = () => {                         
    return(
            <div className="flex flex-col md:flex-row w-full">
              <div className="flex-[2] md:sticky top-0 z-10 md:h-screen bg-homePanel bg-no-repeat bg-center bg-cover">
              <SidePanel />
              </div>
              <div className= "flex-[3]">
                <Outlet />
              </div>  
            </div>
      )
    }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout />
      ),
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/author",
          element: <Author />
        },
        {
          path: "/search",
          element: <Search />
        },
        {
          path: "/article/:id",
          element: <Article />
        }
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
