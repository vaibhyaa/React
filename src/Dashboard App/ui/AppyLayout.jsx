import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import styled from "styled-components";
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

export const Main = styled.main`
  background-color: var(--color-gray-200);
  padding: 4rem 4.8rem;
`;

const AppyLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
};

export default AppyLayout;
