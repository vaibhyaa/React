import React from "react";
import SingleButton from "../../ui/Button";
import { IoIosLogOut } from "react-icons/io";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

const Logout = () => {
  const { logout, isLoading } = useLogout();
  return (
    <SingleButton onClick={logout} disabled={isLoading}>
      {isLoading ? <SpinnerMini /> : <IoIosLogOut />}
    </SingleButton>
  );
};

export default Logout;
