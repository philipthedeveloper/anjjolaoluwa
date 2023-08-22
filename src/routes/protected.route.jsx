import React, { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Spinner } from "../components/reusable";
import SideNav from "../components/SideNav";
import { useUserContext } from "../context/UserContext";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const ProtectedRoute = () => {
  const { pending, data, error } = useFetch(`${BASE_URL}/user/isauth`);
  const location = useLocation();
  const { setUser } = useUserContext();

  useEffect(() => {
    if (data && data.user) {
      setUser(data.user);
    }
  }, [data, pending]);

  if (pending) {
    return createPortal(
      <Spinner
        size="MEDIUM"
        style={{
          backgroundColor: "var(--secondary-color)",
          position: "fixed",
          width: "100%",
          height: "100%",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      />,
      document.querySelector("#portal")
    );
  }

  return data?.isAuth ? (
    <>
      <SideNav />
      <Outlet />
    </>
  ) : (
    <Navigate to={"/"} state={{ from: location.pathname }} />
  );
};

export default ProtectedRoute;
