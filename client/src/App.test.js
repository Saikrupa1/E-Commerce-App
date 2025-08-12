// client/src/App.test.js
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

// Mock fetch API
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          { id: 1, name: "Laptop", price: 1000 },
          { id: 2, name: "Mouse", price: 50 },
        ]),
    })
  );
});

test("renders product list from API", async () => {
  render(<App />);
  expect(screen.getByText(/eCommerce Store/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/Laptop/i)).toBeInTheDocument();
    expect(screen.getByText(/Mouse/i)).toBeInTheDocument();
  });
});

test("adds product to cart when Add to Cart is clicked", async () => {
  render(<App />);
  await waitFor(() => screen.getByText(/Laptop/i));

  fireEvent.click(screen.getAllByText(/Add to Cart/i)[0]); // click first Add to Cart
  expect(screen.getByText(/Total: \$1000/i)).toBeInTheDocument();
});

test("updates total when multiple products are added", async () => {
  render(<App />);
  await waitFor(() => screen.getByText(/Laptop/i));

  fireEvent.click(screen.getAllByText(/Add to Cart/i)[0]);
  fireEvent.click(screen.getAllByText(/Add to Cart/i)[1]);

  expect(screen.getByText(/Total: \$1050/i)).toBeInTheDocument();
});
