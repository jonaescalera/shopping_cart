import { MemoryRouter } from "react-router-dom";

export default function WrapRouter(children?: React.ReactNode): JSX.Element {
  return <MemoryRouter>{children}</MemoryRouter>;
}
