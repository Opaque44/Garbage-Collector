import React from "react";
import MainLayout from "./components/layouts/MainLayout";
import CheckAuth from "./components/common/check-Auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/layouts/Auth/Login";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { store } from "./redux/store";
import HomePage from "./pages/Home";
import Contact from "./pages/contact";
import About from "./pages/About/About";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "posts",
          element: <div>Posts Page</div>,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
        // {
        //   element: <CheckAuth isAuthenticated={false} user={null} />,
        //   children: [
        //     {
        //       path: "login",
        //       element: <Login />,
        //     },
        //     {
        //       path: "register",
        //       element: <div>Register Page</div>,
        //     },
        //   ],
        // },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <Toaster />
      <RouterProvider router={router} />
      {/* <Login /> */}
      {/* <CheckAuth isAuthenticated={false} user={null} /> */}
    </Provider>
  );
};

export default App;
