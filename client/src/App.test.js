import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the store title", () => {
  render(<App />);
  expect(screen.getByText(/eCommerce Store/i)).toBeInTheDocument();
});
