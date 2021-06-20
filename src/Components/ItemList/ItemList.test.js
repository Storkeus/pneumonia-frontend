import { render, screen, fireEvent } from "@testing-library/react";
import ItemListTable from "./ItemListTable";
import ItemList from "./ItemList";

describe("ItemList", () => {
  /**
   * Smoke tests of ItemList Components
   */

  test("ItemListTable renders without crashing", () => {
    render(<ItemListTable />);
  });

  test("ItemList renders without crashing", () => {
    render(<ItemList />);
  });
});
