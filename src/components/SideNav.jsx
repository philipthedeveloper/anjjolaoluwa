import React, { useRef } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useRouterContext } from "../context/RouteContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useUserContext } from "../context/UserContext";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    Icon: <i className="fi fi-sr-house-crack"></i>,
  },

  // {
  //   name: "Results",
  //   path: "/results",
  //   Icon: <i className="fi fi-sr-test"></i>,
  // },
  {
    name: "Attendance",
    path: "/attendance",
    Icon: <i className="fi fi-sr-clipboard-list-check"></i>,
  },
  {
    name: "Subjects",
    path: "/subjects",
    Icon: <i className="fi fi-sr-books"></i>,
  },

  {
    name: "Teachers",
    path: "/teachers",
    Icon: <i className="fi fi-sr-chalkboard-user"></i>,
  },
  {
    name: "Notice",
    path: "/notice",
    Icon: <i className="fi fi-sr-exclamation"></i>,
  },
  {
    name: "Chats",
    path: "/chats",
    Icon: <i className="fi fi-sr-comment"></i>,
  },
];

const protectedRoutes = [
  {
    name: "Students",
    path: "/students",
    Icon: <i className="fi fi-sr-person-simple"></i>,
  },
  {
    name: "Classes",
    path: "/classes",
    Icon: <i className="fi fi-sr-presentation"></i>,
  },
  {
    name: "Parents",
    path: "/parents",
    Icon: <i className="fi fi-sr-people"></i>,
  },
];

const SideNav = () => {
  const { currentPath } = useRouterContext();
  const navigate = useNavigate("/");
  const sideNavRef = useRef(null);
  const { user } = useUserContext();

  const toggleHide = (e) => {
    e.preventDefault();
    sideNavRef.current.classList.toggle("hide");
  };

  const logoutUser = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        `${BASE_URL}/user/logout`,
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        toast.success("Logout successfully...");
        return navigate("/");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || error?.message || "An error occured"
      );
    }
  };
  return (
    <SideNavContainer ref={sideNavRef}>
      <Header onClick={(e) => toggleHide(e)}>
        <i className="fi fi-br-menu-burger"></i>
      </Header>
      <NavList>
        {routes.map(({ path, name, Icon }) => (
          <LinkItem
            to={path}
            key={path + name}
            className={`${currentPath.includes(path) && "active"}`}
          >
            {Icon}
            {name}
          </LinkItem>
        ))}

        {user && user.accountType === "Teacher" && (
          <>
            {protectedRoutes.map(({ path, name, Icon }) => (
              <LinkItem
                to={path}
                key={path + name}
                className={`${currentPath.includes(path) && "active"}`}
              >
                {Icon}
                {name}
              </LinkItem>
            ))}
          </>
        )}
      </NavList>
      <LogoutButton onClick={(e) => logoutUser(e)}>
        <i className="fi fi-sr-sign-out-alt"></i>
        <span>Logout</span>
      </LogoutButton>
    </SideNavContainer>
  );
};

const SideNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-column: 1 / 2;
  background-color: var(--secondary-color);
  transition: 0.4s ease;
  overflow: hidden;

  &.hide {
    width: 70px;

    a,
    button {
      gap: 30px;
      padding-left: 25px;
    }
  }
`;

const Header = styled.header`
  padding: 1rem;

  i {
    color: #fff;
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li``;

const LinkItem = styled(Link)`
  display: flex;
  padding: 1rem 2rem;
  color: #fff;
  gap: 1rem;

  &:hover {
    background: var(--light-secondary-color);
  }

  &.active {
    background: var(--light-secondary-color);
  }
`;

const LogoutButton = styled.button`
  display: flex;
  padding: 1rem 2rem;
  color: #fff;
  gap: 1rem;
  border: none;
  outline: none;
  margin-top: auto;
  background: none;
  width: 100%;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: var(--light-secondary-color);
  }

  &.active {
    background: var(--light-secondary-color);
  }
`;

export default SideNav;
