import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";

import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";

const Layaut = ()=>{
  return (
    <>
    <MyNavbar/>
    <div className="container">     
      <Outlet/>     
    </div>
    <Footer/>
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layaut/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/post/:id",
        element: <Single/>
      },
      {
        path: "/write",
        element: <Write/>
      }
    ]
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  );
}



export default App;
