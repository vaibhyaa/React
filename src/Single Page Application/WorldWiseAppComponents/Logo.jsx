import styles from "./Logo.module.css";
import React from "react";
import bngImg from "../images/logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src={bngImg} alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
