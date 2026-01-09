/* eslint-disable react/prop-types */
import React from "react";
import { Children } from "react";

const Button = ({ children, disabled }) => {
  return (
    <button
      className="
    inline-flex items-center justify-center
    rounded-full
    bg-yellow-400
    px-6 py-3
    text-sm font-semibold uppercase tracking-wide
    text-stone-800
    transition-all duration-300
    hover:bg-yellow-300
    focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2
    disabled:cursor-not-allowed
    disabled:bg-yellow-200
    disabled:text-stone-500
    disabled:hover:bg-yellow-200
  "
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
