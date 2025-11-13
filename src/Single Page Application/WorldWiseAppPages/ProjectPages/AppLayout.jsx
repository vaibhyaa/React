import React from "react";
import styles from "./AppLayout.module.css";
import SideBar from "../../WorldWiseAppComponents/SideBar";
import Map from "../../WorldWiseAppComponents/Map";
import User from "../../WorldWiseAppComponents/User";

// this will me main layout component for app (left side list and right side map design)
const AppLayout = () => {
  return (
    // <ProtectedRoute>
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
    // </ProtectedRoute>
  );
};

export default AppLayout;
