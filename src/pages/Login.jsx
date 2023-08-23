import React, { useState } from "react";
import styled from "styled-components";
import background from "../assets/login-background.png";
import schoolLogo from "../assets/school-logo.jpg";
import { FormGroupComponent } from "../components/reusable";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

console.log(BASE_URL);

const Login = () => {
  const [details, setDetails] = useState({ username: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!details.username || !details.password)
      return toast.warn("Please fill all credentials");
    if (details.username.length < 3) {
      return toast.info("Username cannot be less than 3 characters");
    }
    if (details.password.length < 8) {
      return toast.info("Password must be at least 8 characters");
    }
    return loginUser(details);
    // navigate("/dashboard");
  };

  const loginUser = async (details) => {
    let toastId = toast.loading("Verifying credential");
    try {
      let response = await axios.post(`${BASE_URL}/user/login`, details, {
        withCredentials: true,
      });
      if (response.status === 200 || response.statusText === "OK") {
        toast.update(toastId, {
          render: "Login Successfully",
          isLoading: true,
        });
        toast.update(toastId, {
          isLoading: false,
          autoClose: true,
          render: "Redirecting",
          type: "info",
        });
        let tmo = setTimeout(() => {
          navigate("/dashboard");
          clearTimeout(tmo);
        }, 1500);
      } else {
        console.log(response);
        return toast.update(toastId, {
          render: response.data.message || "An error occured",
          isLoading: false,
          autoClose: true,
        });
      }
    } catch (error) {
      return toast.update(toastId, {
        render:
          error?.response?.data?.message ||
          error?.message ||
          "An error occured",
        isLoading: false,
        autoClose: true,
      });
    }
  };

  return (
    <PageContainer>
      <FormSectionContainer>
        <LogoContainer>
          <Logo src={schoolLogo} />
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
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    width: 150px;
  }
`;

const Logo = styled.img`
  width: 60%;
  height: auto;
  object-fit: contain;
  object-position: -4px 4px;
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
  cursor: pointer;
  transition: 0.4s ease;

  &:hover {
    opacity: 0.7;
  }
`;
export default Login;
