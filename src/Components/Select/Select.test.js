import { render } from "@testing-library/react";
import Select from "./Select";

describe("Select", () => {
  /**
   * Smoke tests of Select component
   */

  test("Select renders without crashing", () => {
    render(<Select />);
  });
});
