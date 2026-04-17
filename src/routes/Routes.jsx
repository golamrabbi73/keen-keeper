import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepages/Homepage";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Friends from "../pages/friends/Friends";
import FriendDetails from "../components/FriendDetails";
import Timline from "../pages/timeline/Timline";
import Stats from "../pages/stats/Stats";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "/timeline",
        element: <Timline />
      },
      {
        path: "/friendDetails/:id",
        element: <FriendDetails />,
        loader: () => fetch("/friends.json"),
      },
      {
        path: "/stats",
        element: <Stats />
      },
    ],
    errorElement: <ErrorPage />,
  }
])
