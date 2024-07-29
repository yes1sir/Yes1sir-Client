import { createBrowserRouter } from "react-router-dom";
import Roots from "@/Roots";
import HomeLogin from "@/pages/HomeLogin/HomeLogin";
import HomeLogout from "@/pages/HomeLogout/HomeLogout";
import Login from "@/pages/Login/Login";
import Recommend from "@/pages/Recommend/Recommend";
import Age from "@/pages/Age/Age";
import Target from "@/pages/Target/Target";
import Test from "@/pages/Test/Test";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Roots />,
    children: [
      {
        path: "/",
        element: <HomeLogin />,
      },
      {
        path: "/HomeLogout",
        element: <HomeLogout />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Recommend",
        element: <Recommend />,
      },
      {
        path: "/Age",
        element: <Age />,
      },
      {
        path: "/Target",
        element: <Target />,
      },
      {
        path: "/Test",
        element: <Test />,
      },
    ],
  },
]);
