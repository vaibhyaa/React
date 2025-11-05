import React from "react";
import styles from "./AppLayout.module.css";
import SideBar from "../../WorldWiseAppComponents/SideBar";
import Map from "../../WorldWiseAppComponents/Map";

// this will me main layout component for app (left side list and right side map design)
const AppLayout = () => {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
};

export default AppLayout;
