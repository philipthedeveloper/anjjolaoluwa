import React from "react";
import styled from "styled-components";
import SideNav from "../components/SideNav";
import MainDashboard from "../components/MainDashboard";

const Dashboard = () => {
  return (
    <PageContainer>
      <PageLayoutContainer>
        {/* <SideNav /> */}
        <MainDashboard />
      </PageLayoutContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  // min-width: 100vw;
  // min-height: 100vh;
  // background: var(--background-white);
`;

const PageLayoutContainer = styled.div`
  // width: 100%;
  // height: 100vh;
  // display: grid;
  // grid-template-columns: 250px 1fr;
  // grid-auto-rows: 100%;
`;

export default Dashboard;
