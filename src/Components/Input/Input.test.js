import { render } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  /**
   * Smoke tests of ItemList Components
   */

  test("Input renders without crashing", () => {
    render(<Input />);
  });
});
