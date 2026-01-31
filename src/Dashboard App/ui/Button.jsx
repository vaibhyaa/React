// import styled, { css } from "styled-components";

// const sizes = {
//   small: css`
//     font-size: 1.3rem;
//     padding: 15px 20px;
//   `,
//   medium: css`
//     font-size: 1.5rem;
//     padding: 10px 20px;
//   `,
//   large: css`
//     font-size: 1.6rem;
//     padding: 10px 20px;
//   `,
// };

// const variations = {
//   primary: css`
//     background: linear-gradient(
//       135deg,
//       var(--color-brand-500),
//       var(--color-brand-700)
//     );
//     color: white;
//   `,

//   secondary: css`
//     background: linear-gradient(
//       135deg,
//       var(--color-grey-0),
//       var(--color-grey-100)
//     );
//     color: var(--color-grey-800);
//   `,

//   danger: css`
//     background: linear-gradient(
//       135deg,
//       var(--color-red-600),
//       var(--color-red-800)
//     );
//     color: white;
//   `,
// };

// const Button = styled.button`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.8rem;
//   padding: 7px;
//   border: none;
//   border-radius: 999px;
//   font-family: inherit;
//   font-weight: 600;
//   letter-spacing: 0.02em;
//   white-space: nowrap;

//   cursor: pointer;

//   ${(props) => sizes[props.size]}
//   ${(props) => variations[props.variation]}

//   box-shadow:
//     0 6px 14px rgba(0, 0, 0, 0.15),
//     inset 0 1px 0 rgba(255, 255, 255, 0.25);

//   transition:
//     transform 0.15s ease,
//     box-shadow 0.15s ease,
//     filter 0.15s ease;

//   &:hover:not(:disabled) {
//     filter: brightness(1.05);
//     box-shadow:
//       0 10px 22px rgba(0, 0, 0, 0.18),
//       inset 0 1px 0 rgba(255, 255, 255, 0.35);
//   }

//   &:active:not(:disabled) {
//     transform: translateY(2px);
//     box-shadow:
//       0 4px 10px rgba(0, 0, 0, 0.18),
//       inset 0 2px 4px rgba(0, 0, 0, 0.2);
//   }

//   &:focus-visible {
//     outline: none;
//     box-shadow:
//       0 0 0 4px rgba(79, 70, 229, 0.35),
//       0 8px 20px rgba(0, 0, 0, 0.2);
//   }

//   &:disabled {
//     opacity: 0.55;
//     cursor: not-allowed;
//     box-shadow: none;
//   }

//   ${(props) =>
//     props.fullWidth &&
//     css`
//       width: 100%;
//     `}

//   /* 📱 Responsive tweak */
//   @media (max-width: 480px) {
//     width: 100%;
//     font-size: 1.4rem;
//     padding: 1.2rem;
//   }
// `;

// Button.defaultProps = {
//   variation: "primary",
//   size: "medium",
// };

// export default Button;

import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
