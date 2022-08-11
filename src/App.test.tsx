import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders text shoppin cart", () => {
  render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  const classElement = screen.getByText(/shopping cart/i);
  expect(classElement).toBeInTheDocument();
});
