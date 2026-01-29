/* eslint-disable react/react-in-jsx-scope */
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiHome,
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHomeModern,
  HiOutlineUser,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-200);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const MainNav = () => {
  return (
    <nav>
      <NavList>
        <li>
          {/* <NavLink to="/dashboard">Home</NavLink> */}
          <StyledNavLink to="/dashboard">
            <span>
              <HiHome />
            </span>
            Home
          </StyledNavLink>
          {/* <Link to="/dashboard">Home</Link> */}
        </li>
        <li>
          {/* <Link to="/bookings">Bookings</Link> */}
          <StyledNavLink to="/bookings">
            <span>
              <HiOutlineCalendarDays />
            </span>
            Bookings
          </StyledNavLink>
          {/* <Link to="/bookings">Bookings</Link> */}
        </li>

        <li>
          <StyledNavLink to="/cabins">
            <span>
              <HiOutlineHomeModern />
            </span>
            Cabins
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/users">
            <span>
              <HiOutlineUser />
            </span>
            Users
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/settings">
            <span>
              <HiOutlineCog6Tooth />
            </span>
            Settings
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
};

export default MainNav;

// navlink
// What it does:
// Navigates without page reload
// Knows which route is active
// Automatically applies active styles/classes

// The correct rule ✅
// ✅ Use <nav>
// For layout & semantics
// It’s just an HTML container
// Does not handle routing

// ✅ Use <NavLink> / <Link>
// For navigation behavior
// Handles client-side routing
// Prevents page reload

// Use NavLink when:
// Sidebar
// Navbar
// Tabs
// Order history list
// Menu items

// ❌ Use Link when:
// Buttons
// Submit flows
// One-time navigation
// Not part of navigation UI
