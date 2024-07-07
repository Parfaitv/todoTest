import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TTodoItem } from "../../../types";
import { Box } from "@mui/material";

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
      padding="5px"
      borderRadius="24px"
      boxShadow="0px 4px 16px 0px rgba(0, 0, 0, 0.16)"
      position="sticky"
      top="-10px"
      sx={{ backgroundColor: "#fff" }}
    >
      <input
        type="text"
        aria-label="create-todo"
        value={title}
        onChange={(e) => {
          e.preventDefault();
          setTitle(e.target.value);
        }}
        onKeyDown={(e) => {
          e.preventDefault();
          e.key === "Enter" && addTodo(title);
        }}
        style={{
          backgroundColor: "#fff",
          width: "100%",
          borderRadius: "24px",
          lineHeight: "35px",
        }}
        placeholder="Add a task"
      />
    </Box>
  );
};
