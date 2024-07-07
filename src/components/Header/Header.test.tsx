import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Testing Header", () => {
  test("render Header", () => {
    render(<Header />);
    expect(screen.getByText("Abduganiev Ali")).toBeInTheDocument();
  });
});
