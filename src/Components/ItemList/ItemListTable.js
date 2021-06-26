import React from "react";
import {
  StyledItemListTableContainer,
  StyledItemListTable,
  StyledItemListTableRow,
  StyledItemListTableCell,
  StyledItemListTableHeader,
  StyledItemListTableActionButton,
  StyledItemListTableScrollable,
  StyledItemListSearchLabel,
  StyledItemListSearch,
  StyledItemListActionContainer,
  StyledItemListFooter,
} from "./Styled";
import Pagination from "../Pagination/Pagination";

/**
 * Presentation Component for ItemList based on html <table>
 * @param {object} props
 * @param {boolean} props.isLoading true if data is currently loading
 * @param {null|Array.<{name: String, columnName: String}>} props.head  informations about table headers
 * @param {null|array} props.rows  informations displayed in rows
 * @param {null|string} props.search search keyword
 * @param {null|number} props.page page number
 * @param {null|function} props.handleSearchChange search change handler
 * @param {null|function} props.handlePageChange page change handler
 * @param {null|Array.<{key: String, title: String, onClick: Function}>} props.actions actions that user can perform on each row
 * @returns {object} \<StyledItemListTableScrollable\>
 */
const ItemListTable = (props) => {
  const {
    isLoading = false,
    head = [],
    rows = [],
    search,
    page,
    handleSearchChange,
    handlePageChange,
    actions = [],
  } = props;

  const areActions = !!actions;

  return (
    <StyledItemListTableScrollable>
      <StyledItemListTableContainer>
        <StyledItemListActionContainer>
          {handleSearchChange ? (
            <StyledItemListSearchLabel>
              Wyszukaj:{" "}
              <StyledItemListSearch
                value={search}
                onChange={handleSearchChange}
              />
            </StyledItemListSearchLabel>
          ) : null}

          {handlePageChange ? (
            <Pagination
              page={page}
              handlePageChange={handlePageChange}
            ></Pagination>
          ) : null}
        </StyledItemListActionContainer>
        <StyledItemListTable>
          <thead>
            <StyledItemListTableRow>
              {head.map(({ name }, key) => (
                <StyledItemListTableHeader key={key}>
                  {name}
                </StyledItemListTableHeader>
              ))}
              {areActions ? (
                <StyledItemListTableHeader>Akcje</StyledItemListTableHeader>
              ) : null}
            </StyledItemListTableRow>
          </thead>
          <tbody>
            {rows.map((row, rowKey) => (
              <StyledItemListTableRow data-is-loading={isLoading} key={rowKey}>
                {head.map(({ columnName }, columnKey) => (
                  <StyledItemListTableCell key={columnKey}>
                    {row[columnName]}
                  </StyledItemListTableCell>
                ))}
                {areActions ? (
                  <StyledItemListTableCell>
                    {actions.map(({ title, name, handler }, key) => (
                      <StyledItemListTableActionButton
                        key={key}
                        title={title}
                        onClick={() => handler(row.id)}
                      >
                        {name}
                      </StyledItemListTableActionButton>
                    ))}
                  </StyledItemListTableCell>
                ) : null}
              </StyledItemListTableRow>
            ))}
          </tbody>
        </StyledItemListTable>
        <StyledItemListFooter>
          {handlePageChange ? (
            <Pagination
              page={page}
              handlePageChange={handlePageChange}
            ></Pagination>
          ) : null}
        </StyledItemListFooter>
      </StyledItemListTableContainer>
    </StyledItemListTableScrollable>
  );
};

export default ItemListTable;
