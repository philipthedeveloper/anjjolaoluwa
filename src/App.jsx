import React from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Router from "./routes/Router";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AppContainer>
        <Router />
        {/* <Login /> */}
        {/* <Dashboard /> */}
      </AppContainer>
    </>
  );
};

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-auto-rows: 100%;
  background: var(--background-white);
`;

export default App;
