import React, { useState } from "react";
import ItemListTable from "./ItemListTable";

/**
 * A component that loades default ItemList presenation component.
 */
const ItemList = (props) => {
  return <ItemListTable {...props}></ItemListTable>;
};

export default ItemList;
