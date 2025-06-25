import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Footer from "./Footer/footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Login />
      <Register />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
