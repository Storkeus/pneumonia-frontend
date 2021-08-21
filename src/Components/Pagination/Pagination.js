import React from "react";
import {
  StyledPagination,
  StyledPaginationButton,
  StyledPageInfo,
} from "./Styled";

/**
 * Pagination component
 * @param {object} props
 * @param  {number} props.page current page number
 * @param {function} props.handlePageChange page change handler
 * @returns {object} \<StyledPagination\>
 */
const Pagination = (props) => {
  const { page, handlePageChange, maxPage } = props;

  const handleClickBefore = (event) => {
    handlePageChange(page - 1);
  };
  const handleClickNext = (event) => {
    handlePageChange(page + 1);
  };

  return (
    <StyledPagination>
      <StyledPaginationButton
        data-hidden={page === 1}
        onClick={handleClickBefore}
      >
        Poprzednia
      </StyledPaginationButton>

      <StyledPageInfo>
        strona {page} z {maxPage}
      </StyledPageInfo>
      <StyledPaginationButton
        data-hidden={page === maxPage}
        onClick={handleClickNext}
      >
        Następna
      </StyledPaginationButton>
    </StyledPagination>
  );
};

export default Pagination;
