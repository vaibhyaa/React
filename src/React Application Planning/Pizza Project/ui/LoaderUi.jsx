import React from "react";

const LoaderUi = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent"></div>
    </div>
  );
};

export default LoaderUi;
