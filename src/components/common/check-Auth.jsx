import { Navigate, useLocation, Outlet } from "react-router-dom";

const CheckAuth = ({ isAuthenticated, user }) => {
  const location = useLocation();
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/login" replace />;
  }
  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default CheckAuth;
