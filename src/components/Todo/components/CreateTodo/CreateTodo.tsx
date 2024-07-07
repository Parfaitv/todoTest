import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TTodoItem } from "../../../types";
import { Box, Input } from "@mui/material";

type TCreateTodoProps = {
  onCreateTodo: (prev: TTodoItem) => void;
};

export const CreateTodo = ({ onCreateTodo }: TCreateTodoProps) => {
  const [title, setTitle] = useState("");

  const addTodo = (title: TTodoItem["title"]) => {
    if (title.trim().length) {
      onCreateTodo({
        _id: uuidv4(),
        title,
        isCompleted: false,
      });
      setTitle("");
    }
  };

  return (
    <Box
      width="105%"
      display="flex"
      padding="8px"
      borderRadius="24px"
      boxShadow="0px 4px 16px 0px rgba(0, 0, 0, 0.16)"
      position="sticky"
      top="-10px"
      sx={{ backgroundColor: "#fff" }}
    >
      <Input
        sx={{ width: "100%" }}
        aria-label="create-todo"
        placeholder="Add a task"
        onKeyDown={(e) => e.key === "Enter" && addTodo(title)}
        value={title}
        onChange={(e) => {
          e.preventDefault();
          setTitle(e.target.value);
        }}
      />
    </Box>
  );
};
