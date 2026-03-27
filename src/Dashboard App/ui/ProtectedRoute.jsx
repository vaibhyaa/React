import React from "react";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-gray-50);
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  // 1, Load the authenticated user
  const { isLoading, user } = useUser();

  // 2. Redirect if not authenticated
  useEffect(() => {
    // if (!isLoading && user1)

    if (!isLoading && user?.role !== "authenticated") {
      navigate("/login", { replace: true });
    }
  }, [isLoading, user?.role, navigate]);

  // 2, while loading , show spinner
  if (isLoading) {
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );
  }

  // 4. If authenticated, render children
  if (user?.role === "authenticated") return children;

  // 5. While redirecting, render nothing
  return null;
};

export default ProtectedRoute;
