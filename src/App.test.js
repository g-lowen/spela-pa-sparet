import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /🌙/i });
  expect(buttonElement).toBeInTheDocument();
});
