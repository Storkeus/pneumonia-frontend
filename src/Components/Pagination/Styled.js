import styled from "styled-components";
import { COLOR_DARK, COLOR_LIGHT, COLOR_SPECIAL } from "../../Const";

export const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:auto;
`;

export const StyledPaginationButton = styled.button`
  border: none;
  background: ${COLOR_DARK};
  color: ${COLOR_LIGHT};
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.9rem 0.5rem 1.1rem;
  font-size: 1.3rem;

  &[data-hidden="true"] {
    visibility: hidden;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus,
  &:active,
  &:focus-visible {
    outline: 0.2rem solid ${COLOR_SPECIAL};
    outline-offset: 0.1rem;
  }
`;

export const StyledPageInfo = styled.div`
  text-align: center;
  margin: 0 1rem;
`;
