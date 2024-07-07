import { TodoItem } from "./TodoItem";
import { TTodoListProps } from "./types";

export const TodoList = ({
  todoList,
  changeTodo,
  removeTodo,
}: TTodoListProps) => {
  return (
    <>
      {todoList.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </>
  );
};
