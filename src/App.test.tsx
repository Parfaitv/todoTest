import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("Testing App", () => {
  test("check Header", () => {
    render(<App />);
    const linkElement = screen.getByText("Abduganiev Ali");
    expect(linkElement).toBeInTheDocument();
  });

  test("check Title", () => {
    render(<App />);
    const linkElement = screen.getByText("TODO");
    expect(linkElement).toBeInTheDocument();
  });
});
