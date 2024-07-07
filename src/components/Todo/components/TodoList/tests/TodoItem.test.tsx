import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../TodoItem";

describe("Testing TodoItem", () => {
  test("render TodoItem", () => {
    const mockTodoList = {
      _id: "V31Dds$1",
      isCompleted: false,
      title: "Title 1",
    };
    render(
      <TodoItem
        todo={mockTodoList}
        changeTodo={() => {}}
        removeTodo={() => {}}
      />,
    );
    const element = screen.getByText("Title 1");
    const iconDeleted = screen.getByLabelText("Deleted");
    expect(element).toBeInTheDocument();
    expect(iconDeleted).toBeInTheDocument();
  });

  test("checked icon Check", () => {
    const mockTodoList = {
      _id: "V31Dds$1",
      isCompleted: true,
      title: "Title 1",
    };
    render(
      <TodoItem
        todo={mockTodoList}
        changeTodo={() => {}}
        removeTodo={() => {}}
      />,
    );
    const iconCheck = screen.getByLabelText("Check");
    expect(iconCheck).toBeInTheDocument();
  });

  test("clicked title", () => {
    const mockTodoList = {
      _id: "V31Dds$1",
      isCompleted: false,
      title: "Title 1",
    };
    const mockChangeTodo = jest.fn();
    render(
      <TodoItem
        todo={mockTodoList}
        changeTodo={mockChangeTodo}
        removeTodo={() => {}}
      />,
    );
    const element = screen.getByText("Title 1");
    fireEvent.click(element);
    expect(mockChangeTodo).toBeCalled();
  });

  test("clicked icon Deleted", () => {
    const mockTodoList = {
      _id: "V31Dds$1",
      isCompleted: false,
      title: "Title 1",
    };
    const mockChangeTodo = jest.fn();
    const mockremoveTodo = jest.fn();
    render(
      <TodoItem
        todo={mockTodoList}
        changeTodo={mockChangeTodo}
        removeTodo={mockremoveTodo}
      />,
    );
    const iconDeleted = screen.getByLabelText("Deleted");
    fireEvent.click(iconDeleted);
    expect(mockremoveTodo).toBeCalled();
    expect(mockChangeTodo).not.toBeCalled();
  });
});
