import { hasExpectedRequestMetadata } from "@reduxjs/toolkit/dist/matchers";
import { fireEvent, render, screen, renderHook } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import WrapRouter from "../../utils/WrapRouter";
import Login from "../Login";
import Home from "./Home";
import Header from "../header/Header";
import * as useFetch from "../../hooks/useFetch";

// test("render Home component", () => {
//   //const items = ["prueba"];
//   render(
//     <Router>
//       <Home />
//     </Router>
//   );
//   //const renderedItems = screen.getAllByRole("listitem");
//   //expect(renderedItems.length).toEqual(items.length);

//   //expect(renderedItems.map((item) => item.textContent)).toEqual(["prueba"]);
// });

const renderWithRouter = (ui: JSX.Element, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

test("landing to a Login Page", () => {
  const route = "/login";
  render(
    <MemoryRouter initialEntries={[route]}>
      <Login />
    </MemoryRouter>
  );

  //screen.debug();

  expect(screen.getByTestId("login-page")).toBeInTheDocument();
});

// jest.mock("../../hooks/useFetch", () => ({
//   __esModule: true,
//   default: jest.fn(),
// }));
//jest.mock("../../hooks/useFetch");
const mockHooks = useFetch as jest.Mocked<typeof useFetch>
//const movies = [{ id: 345, title: "fall" },{ id: 123, title: "avenger" },{ id: 567, title: "Alive" },]

/*test("it returns movies", async () => {
  // beforeEach(() => {
  //   (fetchMovies as jest.Mock).mockResolvedValue([]);
  // });
  // render(WrapRouter(<Home />));

  // await screen.findByTestId("movies-empty");
  // mockHooks.default.mockImplementation(("") => [    
     
  // ])
  mockHooks.default.mockReturnValue(Promise.resolve({data:undefined,isLoading: true,error:""}))
});

/*
const mockChildComponent = jest.fn();
jest.mock("../header/Header", () => ({ props }: any) => {
  //return mockChildComponent(props);
  return <mockChildComponent handleItems={props} data-testid="header-filter" />;
});

test("correctly handles filtering a movie", async () => {
  // let mockChar = "Fall";
  // const mockMovie = [{ id: 985939, title: "fall" }];

  render(WrapRouter(<Home />));
  const filterItems = await screen.findByTestId("header-filter");
  fireEvent.change(filterItems, { value: "fall" });

  screen.debug(filterItems);

  expect(mockChildComponent).toHaveBeenCalledTimes(2);

  // const filterArray = jest.fn();

  // const element = await screen.findByTestId("content-filter");
  // fireEvent.change(element);
  // expect(filterArray.mock.calls.length).toBeCalledTimes(1);
});
*/
