import React from "react";
import { PageContainer } from "../components/reusable";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <PageContainer
      style={{
        width: "100vw",
        height: "100vh",
        gridColumn: "1 / -1",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "2rem" }}>Page not found🥺🥺🥺</h1>
      <Link
        to={"/dashboard"}
        style={{
          padding: " 1rem 2rem",
          backgroundColor: "var(--secondary-color)",
          color: "#fff",
        }}
      >
        Back to homepage
      </Link>
    </PageContainer>
  );
};

export default NotFound;
