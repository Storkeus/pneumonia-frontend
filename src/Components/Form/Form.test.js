import { render } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  /**
   * Smoke tests of Form components
   */

  test("Form renders without crashing", () => {
    render(<Form />);
  });
});
