import { render, screen } from "@testing-library/react";
import { TodoList } from "../TodoList";

describe("Testing TodoList", () => {
  const mockTodoList = [
    { _id: "V31Dds$1", isCompleted: false, title: "Title 1" },
    { _id: "V3dsfs$2", isCompleted: false, title: "Title 2" },
    { _id: "V3scvf$3", isCompleted: false, title: "Title 3" },
  ];

  test("render TodoList", () => {
    render(
      <TodoList
        todoList={mockTodoList}
        changeTodo={() => {}}
        removeTodo={() => {}}
      />,
    );
    const element1 = screen.getByText("Title 1");
    const element2 = screen.getByText("Title 2");
    const element3 = screen.getByText("Title 3");
    expect(element1).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
    expect(element3).toBeInTheDocument();
  });
});
