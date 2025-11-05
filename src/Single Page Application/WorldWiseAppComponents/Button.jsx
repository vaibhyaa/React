/* eslint-disable react/prop-types */
import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, type, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: "#007bff", // blue color
        color: "white", // white text
        border: "none", // remove border
        padding: "8px 16px", // button padding
        borderRadius: "8px", // rounded corners
        cursor: "pointer", // pointer on hover
        fontSize: "16px",
        fontWeight: "500",
        marginTop: "10px",
        transition: "background-color 0.3s ease",
      }}
      className={`${styles.btn} ${styles[type]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

// type prop conflict
// In HTML, <button> already has a type attribute (like "button", "submit", "reset").
// But you’re using type as a custom style prop (primary, secondary).
// This creates confusion, because right now you’re literally writing styles.type, not styles.primary.

// Dynamic class issue
// ${styles.type} always looks for a class named "type" in your CSS module, which doesn’t exist.
// What you probably want is something like styles[type], so "primary" maps to your CSS class.

// Case of onClick
// React expects the prop name onClick (camelCase).
// You’re using onclick (lowercase). That means your button won’t trigger correctly.
