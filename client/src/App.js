import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Register from "./pages/Register.jsx"
import Home from "./pages/Home.jsx"
import Write from "./pages/Write.jsx"
import Login from "./pages/Login.jsx"
import Single from "./pages/Single";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <div>This Home!</div>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/sigle",
    element: <Single/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },

]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App