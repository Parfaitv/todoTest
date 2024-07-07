import { useEffect, useState } from "react";
import { CreateTodo, FooterTodos, TodoList } from "./components";
import { TTodoItem } from "../types";
import { Box } from "@mui/material";

export const Todo = () => {
  const [allTodos, setAllTodos] = useState<TTodoItem[]>([]);
  const [currentTodos, setCurrentTodos] = useState<TTodoItem[]>([]);

  useEffect(() => {
    const row = localStorage.getItem("todos") || "[]";
    const allTodosStorage = JSON.parse(row) as TTodoItem[];
    setAllTodos(allTodosStorage);
    setCurrentTodos(allTodosStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]);

  const changeTodo = (id: TTodoItem["_id"]) => {
    const newTodoList = allTodos.map((todo) => {
      if (todo._id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setAllTodos(newTodoList);
    setCurrentTodos(newTodoList);
  };

  const removeTodo = (id: TTodoItem["_id"]) => {
    const newTodoList = allTodos.filter((todo) => todo._id !== id);
    setAllTodos(newTodoList);
    setCurrentTodos(newTodoList);
  };

  const handleCreateTodo = (newTodo: TTodoItem) => {
    const newTodoList = [newTodo, ...allTodos];
    setAllTodos(newTodoList);
    setCurrentTodos(newTodoList);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      width="500px"
      height="100%"
      padding="16px"
      gap="1rem"
      borderRadius="24px"
      sx={{
        overflowY: "scroll",
        overflowX: "hidden",
        backgroundColor: "#fff",
        "&::-webkit-scrollbar": {
          width: "0",
        },
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="100%"
        gap="5px"
      >
        <CreateTodo onCreateTodo={handleCreateTodo} />
        <TodoList
          todoList={currentTodos}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      </Box>

      <FooterTodos
        allTodos={allTodos}
        setAllTodos={setAllTodos}
        setCurrentTodos={setCurrentTodos}
        lengthCurrentTodos={currentTodos.length}
      />
    </Box>
  );
};
