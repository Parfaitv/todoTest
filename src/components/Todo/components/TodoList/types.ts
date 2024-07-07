import { TTodoItem } from "../../../types";

export type TTodoListProps = {
  todoList: TTodoItem[];
  changeTodo: (id: TTodoItem["_id"]) => void;
  removeTodo: (id: TTodoItem["_id"]) => void;
};

export type TTodoItemProps = {
  todo: TTodoItem;
  changeTodo: (id: TTodoItem["_id"]) => void;
  removeTodo: (id: TTodoItem["_id"]) => void;
};
