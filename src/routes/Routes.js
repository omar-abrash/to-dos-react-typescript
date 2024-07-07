import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ToDosPage from "../pages/ToDosPage/ToDosPage";
import AddToDoPage from "../pages/AddToDoPage/AddToDoPage";

import MainLayout from "../layouts/MainLayout/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <ToDosPage /> },
      { path: "/add-todo", element: <AddToDoPage /> },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={routes} />;
};

export default Routes;
