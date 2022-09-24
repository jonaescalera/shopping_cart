import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import WrapRouter from "../../utils/WrapRouter";
import Help from "../help/Help";

import Header from "./Header";

const renderWithRouter = (ui: JSX.Element, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

// jest.mock("../help", () =>{
//   return (
//     Help: () => <div>This is help page</div>
//   );
// });

test("Click help page", async () => {
  //const { user } = renderWithRouter(<Header />);
  const handleItems = jest.fn((x) => "");
  render(WrapRouter(<Header handleItems={handleItems} />));

  const element = await screen.findByTestId("header-page");

  expect(element).toBeInTheDocument();

  // const element = screen.getByTestId(/someID/i);

  // screen.debug(element);

  // await user.click(screen.getByTestId(/someID/i));

  // expect(screen.getByText(/This is help page/i)).toBeInTheDocument();
});
