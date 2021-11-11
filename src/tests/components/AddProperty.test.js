import asFragment from "react-testing-library";

test("does not render an error or a success message if message props is empty", () => {
  const { asFragment } = render(<Alert message="" />);
});
