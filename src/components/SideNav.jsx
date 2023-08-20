import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    Icon: <i className="fi fi-sr-house-crack"></i>,
  },
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
    name: "Results",
    path: "/results",
    Icon: <i className="fi fi-sr-test"></i>,
  },
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
    name: "Parents",
    path: "/parents",
    Icon: <i className="fi fi-sr-people"></i>,
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
];

const SideNav = () => {
  return (
    <SideNavContainer>
      <Header>
        <i className="fi fi-br-menu-burger"></i>
      </Header>
      <NavList>
        {routes.map(({ path, name, Icon }) => (
          <LinkItem to={path}>
            {Icon}
            {name}
          </LinkItem>
        ))}
      </NavList>
    </SideNavContainer>
  );
};

const SideNavContainer = styled.nav`
  //   display: flex;
  width: 100%;
  grid-column: 1 / 2;
  background-color: var(--secondary-color);
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
`;

export default SideNav;
