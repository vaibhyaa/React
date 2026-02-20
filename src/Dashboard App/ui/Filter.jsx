/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

// Why do we add $ before a prop?
// Because in styled-components, props that start with $ are treated as transient props.
// That means:
// They are used for styling only
// They are NOT passed to the DOM

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.$active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <StyledFilter>
      {/* <FilterButton
        onClick={() => {
          searchParams.set(filterField, options[0].value);
          setSearchParams(searchParams);
        }}
      >
        {options[0].label}
      </FilterButton>
      <FilterButton
        onClick={() => {
          searchParams.set(filterField, options[1].value);
          setSearchParams(searchParams);
        }}
      >
        {options[1].label}
      </FilterButton>
      <FilterButton
        onClick={() => {
          searchParams.set(filterField, options[2].value);
          setSearchParams(searchParams);
        }}
      >
        {options[2].label}
      </FilterButton> */}
      {options.map((option) => {
        return (
          <FilterButton
            key={option.value}
            $active={searchParams.get(filterField) === option.value}
            // onClick={() => {
            //   searchParams.set(filterField, option.value);
            //   setSearchParams(searchParams);
            // }}
            // onClick={() => {
            //   const newParams = new URLSearchParams(searchParams);
            //   newParams.set(filterField, option.value);
            //   setSearchParams(newParams);
            // }}
            onClick={() =>
              setSearchParams((prev) => {
                const newParams = new URLSearchParams(prev);
                newParams.set(filterField, option.value);
                return newParams;
              })
            }
          >
            {option.label}
          </FilterButton>
        );
      })}
    </StyledFilter>
  );
};

export default Filter;
