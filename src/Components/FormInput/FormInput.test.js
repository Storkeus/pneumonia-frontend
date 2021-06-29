import { render } from "@testing-library/react";
import FormInput from "./FormInput";

describe("Input", () => {
  /**
   * Smoke tests of ItemList Components
   */

  test("Input renders without crashing", () => {
    render(<FormInput />);
  });
});
