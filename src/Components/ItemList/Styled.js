import styled from "styled-components";
import {
  COLOR_CONTENT_BACKGROUND,
  COLOR_DARK,
  COLOR_LIGHT,
  COLOR_SPECIAL,
} from "../../Const";

export const StyledItemListTableScrollable = styled.div`
  overflow-x: auto;
  box-sizing: border-box;
  width: 100%;
`;

export const StyledItemListTableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: min-content;
  padding: 3rem;
  background-color: ${COLOR_CONTENT_BACKGROUND};
  box-sizing: border-box;
  box-shadow: -0.5rem 0.5rem 1.2rem -0.6rem rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: -0.5rem 0.5rem 1.2rem -0.6rem rgba(0, 0, 0, 0.5);
  -moz-box-shadow: -0.5rem 0.5rem 1.2rem -0.6rem rgba(0, 0, 0, 0.5);
`;

export const StyledItemListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;

export const StyledItemListTableRow = styled.tr`
  border-bottom: 0.1rem solid ${COLOR_LIGHT};
  opacity: 1;
  transition: opacity 100ms;
  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background-color: ${COLOR_LIGHT};
  }
  &[data-is-loading="true"] {
    opacity: 0;
    transition: opacity 0;
    /* position: relative; */
    /* z-index:-1; */
  }
`;

export const StyledItemListTableHeader = styled.th`
  padding: 1.5rem 1.5rem;
  background-color: ${COLOR_DARK};
  color: ${COLOR_LIGHT};
`;

export const StyledItemListTableCell = styled.td`
  padding: 1.5rem 1.5rem;
`;

export const StyledItemListTableActionButton = styled.button`
  border: none;
  background: none;
  margin: 3px;
  color: inherit;

  &:hover {
    cursor: pointer;
  }

  &:focus,
  &:active,
  &:focus-visible {
    outline: 0.2rem solid ${COLOR_SPECIAL};
  }
`;

export const StyledItemListSearchLabel = styled.label`
  margin-right: auto;
  font-weight: 700;
`;

export const StyledItemListSearch = styled.input`
  border-color: ${COLOR_DARK};
  border-width: 0.2rem;

  font-size: 1.4rem;
  padding: 0.5rem 1rem;

  &:focus,
  &:active,
  &:focus-visible {
    outline: 0.2rem solid ${COLOR_SPECIAL};
    outline-offset: 0.2rem;
  }
`;

export const StyledItemListActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  &:not(:empty) {
    margin: 0 0 2rem;
  }
`;

export const StyledItemListFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  width: 100%;
  &:not(:empty) {
    margin: 2rem 0 0;
  }
`;

const StyledItemListBadge = styled.span`
display:block;
padding:5px 10px;
display:inline-flex;
align-items:center;
justify-content:center;
color:#fff;
`;

export const StyledItemListHealthyBadge = styled(StyledItemListBadge)`
background-color:#00cc00;
`;

export const StyledItemListUnhealthyBadge = styled(StyledItemListBadge)`
background-color:#ffcc00;
`;


export const StyledItemListUnclearBadge = styled(StyledItemListBadge)`
background-color:#c90;
`;