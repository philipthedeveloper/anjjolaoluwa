import React, { useState } from "react";
import styled from "styled-components";
import background from "../assets/login-background.png";
import techULogo from "../assets/tech-u-logo.png";
import { FormGroupComponent } from "../components/resuable";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [details, setDetails] = useState({ username: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.vaule }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <PageContainer>
      <FormSectionContainer>
        <LogoContainer>
          <Logo src={techULogo} />
        </LogoContainer>
        <Form>
          <FormGroupComponent
            type={"text"}
            name={"username"}
            required={true}
            value={details.username}
            placeholder={"Username"}
            label={"Username"}
            key={"dajkdfs"}
            onChange={handleInputChange}
          />
          <FormGroupComponent
            type={"password"}
            name={"password"}
            required={true}
            value={details.password}
            placeholder={"Password"}
            label={"Password"}
            onChange={handleInputChange}
            passwordVisible={passwordVisible}
            setPasswordVisible={setPasswordVisible}
          />
          <SubmitButton onClick={(e) => handleSubmit(e)}>Log In</SubmitButton>
        </Form>
      </FormSectionContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    position: relative;
    z-index: 5;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.45;
    z-index: 1;
  }
`;

const FormSectionContainer = styled.div`
  background-color: var(--white);
  min-width: 250px;
  max-width: 650px;
  width: 50%;
  margin: auto;
  min-height: 500px;
  aspect-ratio: 3 /2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const LogoContainer = styled.div`
  width: 200px;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    width: 150px;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const Form = styled.form`
  width: 90%;
`;

const SubmitButton = styled.button`
  border: none;
  outline: none;
  padding: 0.7rem 1rem;
  background-color: var(--primary-color);
  width: 100%;
  color: #fff;
  margin-top: 1rem;
`;
export default Login;
