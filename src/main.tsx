import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import MainContent from "./components/MainContent/MainContent.tsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/reset.scss";
import "./styles/global.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import UserDetails from "./components/UserDetails/UserDetails.tsx";
import { UsersContextProvider } from "./context/UsersContext.tsx";
import { FiltersContextProvider } from "./context/FiltersContext.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FiltersContextProvider>
      <UsersContextProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </UsersContextProvider>
    </FiltersContextProvider>
  </React.StrictMode>
);
