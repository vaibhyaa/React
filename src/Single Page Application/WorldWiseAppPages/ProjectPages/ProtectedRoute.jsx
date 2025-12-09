/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/FakeAuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  //here problem is with useeffect function because when useeffect function will get call when compoent renders
  //so component renders first then user values will be null
  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return isAuth ? children : null;
};

export default ProtectedRoute;
