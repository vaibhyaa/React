import React from "react";
import { useSelector } from "react-redux";

const UserName = () => {
  const username = useSelector((state) => state.user.userName);

  if (!username) {
    return null;
  }

  return (
    <div
      className="
        hidden md:block
        text-sm
        font-semibold
        text-stone-700
        bg-stone-100
        px-9 py-1
        rounded-full
        shadow-sm
      "
    >
      {username}
    </div>
  );
};

export default UserName;
