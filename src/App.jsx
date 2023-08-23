import React, { useRef } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Router from "./routes/Router";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouterContext } from "./context/RouteContext";

const App = () => {
  const { currentPath } = useRouterContext();

  const toggleInView = (e) => {
    e.preventDefault();
    document.querySelector(".side-nav")?.classList.toggle("out-of-view");
  };

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
      {console.log(currentPath)}
      {currentPath !== "/" && (
        <Header onClick={(e) => toggleInView(e)}>
          <i className="fi fi-br-menu-burger"></i>
        </Header>
      )}
      <AppContainer shouldHavePadding={currentPath !== "/"}>
        <Router />
        {/* <Login /> */}
        {/* <Dashboard /> */}
      </AppContainer>
    </>
  );
};

const Header = styled.header`
  padding: 1rem;
  background-color: var(--secondary-color);
  position: absolute;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 70px;
  display: none;

  i {
    color: #fff;
    font-size: 1.6rem;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    display: block;
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100dvh;
  display: grid;
  grid-template-columns: minmax(70px, min-content) 1fr;
  grid-auto-rows: 100%;
  background: var(--background-white);
  transition: 0.4s ease;
  position: relative;

  @media (max-width: 400px) {
    padding-top: ${(props) => (props.shouldHavePadding ? "69px" : "0px")};
    grid-template-columns: 1fr;
  }
`;

export default App;
