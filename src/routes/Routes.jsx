import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepages/Homepage";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Friends from "../pages/friends/Friends";
import FriendDetails from "../components/FriendDetails";


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
        path: "/friends",
        element: <Friends />
      },
      {
        path: "/friendDetails/:id",
        element: <FriendDetails />
      }
    ],
    errorElement: <ErrorPage />,
  }
])
