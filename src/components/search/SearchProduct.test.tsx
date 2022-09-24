import { fireEvent, render, screen } from "@testing-library/react";
import SearchProduct from "./SearchProduct";

test("render serach component", async () => {
  const handleItems = jest.fn();
  render(<SearchProduct handleItems={handleItems} />);
  const element = await screen.findByTestId("search-component");
  expect(element).toBeInTheDocument();
});

test("input onKeyPress correctly", async () => {
  const handleKeyPress = jest.fn();
  render(<SearchProduct handleItems={handleKeyPress} />);
  const input = await screen.findByTestId("input");
  fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
  expect(handleKeyPress.mock.calls.length).toBe(1);
});
