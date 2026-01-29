/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";

// const StyledLogo = styled.div`
//    text-align: center;

// `;

// const Img = styled.img`
//   height: 9.6rem;
//   width: auto;
// `;

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/WildOasis/logo-light.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
