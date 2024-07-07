import { act, fireEvent, render, screen } from "@testing-library/react";
import { CreateTodo } from "./CreateTodo";

const setup = (mockOnCreateTodo: jest.Mock<any, any>) => {
  const utils = render(<CreateTodo onCreateTodo={mockOnCreateTodo} />);
  const input = screen.getByLabelText("create-todo");
  return {
    input,
    ...utils,
  };
};

describe("Testing CreateTodo", () => {
  test("render CreateTodo", () => {
    render(<CreateTodo onCreateTodo={() => { }} />);
  });

  test("checked input", () => {
    const mockOnCreateTodo = jest.fn();
    const { input } = setup(mockOnCreateTodo);
    expect(input).toBeInTheDocument();
  });

  test("checked input value", () => {
    const mockOnCreateTodo = jest.fn();
    const { input } = setup(mockOnCreateTodo);
    fireEvent.change(input, { target: { value: "this value" } });
    expect(screen.getByDisplayValue('this value')).toBeInTheDocument();
  });

  test("checked input onKeyDown", () => {
    const mockOnCreateTodo = jest.fn();
    const { input } = setup(mockOnCreateTodo);
    fireEvent.change(input, { target: { value: "this value" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });
    expect(mockOnCreateTodo).toBeCalled();
  });
});
