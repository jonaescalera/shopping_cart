import { render, screen } from "@testing-library/react";
import Help from "./Help";

test("render text in help page", async () => {
  render(<Help />);
  const element = await screen.findByText(/This is help page/i);
  expect(element).toBeInTheDocument();
});
