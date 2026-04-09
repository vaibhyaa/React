import React from "react";
import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";

const StyledHeaderMenu = styled.ul`
  /* display: flex;
  gap: 0.4rem; */
  display: flex;
  gap: 0.4rem;
  list-style: none;
  margin: 0px;
  padding: 2px;
`;
const HeaderMenu = () => {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <AiOutlineUserAdd />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
