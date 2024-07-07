import { render, screen } from "@testing-library/react";
import { Todo } from "./Todo";

describe("Testing Todo", () => {
  test("render TODO", () => {
    render(<Todo />);
  });

  test("check input", () => {
    render(<Todo />);
    const inputElement = screen.getByPlaceholderText("Add a task");
    expect(inputElement).toBeInTheDocument();
  });

  test("check buttons", () => {
    render(<Todo />);
    const buttonAll = screen.getByText("All");
    const buttonActive = screen.getByText("Active");
    const buttonCompleted = screen.getByText("Completed");
    const buttonClearCompleted = screen.getByText("Clear completed");
    expect(buttonAll).toBeInTheDocument();
    expect(buttonActive).toBeInTheDocument();
    expect(buttonCompleted).toBeInTheDocument();
    expect(buttonClearCompleted).toBeInTheDocument();
  });
});
