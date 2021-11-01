import { render } from "@testing-library/react";
import Alert from "../../components/Alert";

it("displays an error message", () => {
  const component = render(<Alert message="Error!" />);

  const alertMessageNode = component.getByText("Error!");

  expect(alertMessageNode.textContent).toBe("Error!");
});
