import React from "react";
import ItemListTable from "./ItemListTable";

/**
 * Renders default ItemList presentation component
 * @param {object} props
 * @param {boolean} props.isLoading true if data is currently loading
 * @param {null|Array.<{name: String, columnName: String}>} props.head  informations about data labels
 * @param {null|array} props.rows  informations displayed in list items
 * @param {null|string} props.search search keyword
 * @param {null|number} props.page page number
 * @param {null|number} props.maxPage max page number
 * @param {null|function} props.handleSearchChange search change handler
 * @param {null|function} props.handlePageChange page change handler
 * @param {null|Array.<{key: String, title: String, onClick: Function}>} props.actions actions that user can perform on each list item
 * @returns {object} \<ItemListTable\>
 */
const ItemList = (props) => {
  return <ItemListTable {...props}></ItemListTable>;
};

export default ItemList;
