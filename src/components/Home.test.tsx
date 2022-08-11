import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("render Home component", () => {
  const items = ["prueba"];
  render(<Home items={items} />);
  const renderedItems = screen.getAllByRole("listitem");
  expect(renderedItems.length).toEqual(items.length);

  expect(renderedItems.map((item) => item.textContent)).toEqual(["prueba"]);
});
