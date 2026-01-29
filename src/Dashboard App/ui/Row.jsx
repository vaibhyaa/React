// import styled, { css } from "styled-components";

// const Row = styled.div`
//   display: flex;

//   ${(props) =>
//     props.type === "horizontal" &&
//     css`
//       justify-content: space-between;
//       align-items: center;
//     `}

//   ${(props) =>
//     props.type === "vertical" &&
//     css`
//       flex-direction: column-reverse;
//       gap: 2rem;
//     `}
// `;

// Row.defaultProps = {
//   type: "vertical",
// };
// export default Row;

import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${({ type = "vertical" }) =>
    type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    `}

  ${({ type = "vertical" }) =>
    type === "vertical" &&
    css`
      flex-direction: column;
      gap: 2rem;
    `}
`;

export default Row;
