test("adds product to cart when Add to Cart is clicked", async () => {
  render(<App />);
  await waitFor(() => screen.getByText(/Laptop/i));

  fireEvent.click(screen.getAllByText(/Add to Cart/i)[0]); // click first Add to Cart
  expect(screen.getByText(/Total:/i)).toHaveTextContent("1000");
});

test("updates total when multiple products are added", async () => {
  render(<App />);
  await waitFor(() => screen.getByText(/Laptop/i));

  fireEvent.click(screen.getAllByText(/Add to Cart/i)[0]);
  fireEvent.click(screen.getAllByText(/Add to Cart/i)[1]);

  expect(screen.getByText(/Total:/i)).toHaveTextContent("1050");
});
