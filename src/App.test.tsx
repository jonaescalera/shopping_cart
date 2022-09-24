import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const renderWithRouter = (ui: JSX.Element, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

test("renders text shoppin cart", async () => {
  // render(<App />, {wrapper: BrowserRouter})
  // //const linkElement = screen.getByText(/learn react/i);
  // const classElement = screen.fin(/shopping cart/i);
  // expect(classElement).toBeInTheDocument();
  const { user } = renderWithRouter(<App />);
  expect(screen.getByTestId("app")).toBeInTheDocument();

  // const element = screen.getByText(/help page/i);
  // screen.debug(element);

  // await user.click(element);

  // expect(screen.getByText(/This is help page/i)).toBeInTheDocument();
});
