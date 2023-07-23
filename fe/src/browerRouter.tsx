import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>App error</h1>,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <h1>Home error</h1>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <h1> Login error</h1>,
  },
]);

export default router;
