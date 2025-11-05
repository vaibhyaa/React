import React from "react";
import style from "./Sidebar.module.css";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
const SideBar = () => {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />
      {/* <p>List of cities </p> */}
      <Outlet />
      {/* <Outlet /> is a special component from React Router (v6+) that acts as a placeholder for nested routes */}
      {/* same as childern prop */}
      <footer className={style.footer}>
        <p className={style.copyright}>
          Copyright {new Date().getFullYear()} by WorldeWise Inc.
        </p>
      </footer>
    </div>
  );
};

export default SideBar;


{/* <AppLayout>
 ├── SideBar
 ├── Outlet  ← this is where the current child route appears
      ├── /app/cities → CityList
      ├── /app/cities/:cityid → City
      ├── /app/countries → CountryList
      ├── /app/form → Form
 */}
