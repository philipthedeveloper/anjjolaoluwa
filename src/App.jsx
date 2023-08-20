import React from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Router from "./routes/Router";
import styled from "styled-components";

const App = () => {
  return (
    <AppContainer>
      <Router />
      {/* <Login /> */}
      {/* <Dashboard /> */}
    </AppContainer>
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
