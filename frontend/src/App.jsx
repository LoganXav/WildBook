import { createBrowserRouter, RouterProvider, Outlet, useParams } from "react-router-dom"
import SidePanel from "./components/commons/SidePanel";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Plans from "./pages/Plans";
import Author from "./pages/Author";
import Search from "./pages/Search";
import Article from "./pages/Article";
import FeaturedPost from "./pages/FeaturedPost";


function App() {
  const Layout = () => {     
    const url  = useParams()  
    console.log(url)                  
    console.log(window.document.location.pathname)                  
    return(
            <div className="flex flex-col lg:flex-row w-full">
              <div className="lg:flex-[2] lg:sticky top-0 z-20 lg:h-screen bg-homePanel bg-no-repeat bg-center bg-cover">
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
          path: "/plans",
          element: <Plans />
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
        },
        {
          path: "/post/:id",
          element: <FeaturedPost />
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
