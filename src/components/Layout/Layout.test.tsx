import { render, screen } from "@testing-library/react";
import { Layout } from "./Layout";

describe("Testing Layout", () => {
  test("render Layout", () => {
    render(<Layout>{"Hello"}</Layout>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
