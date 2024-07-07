import { Check, DeleteOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { TTodoItemProps } from "./types";

export const TodoItem = ({ todo, changeTodo, removeTodo }: TTodoItemProps) => {
  const { _id, isCompleted, title } = todo;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      gap="8px"
      borderBottom="1px solid rgba(0, 0, 0, 0.16)"
    >
      <Box
        display="flex"
        gap="5px"
        width="80%"
        alignItems="center"
        sx={{ wordBreak: "break-all", cursor: "pointer" }}
        onClick={() => changeTodo(_id)}
      >
        {isCompleted && (
          <Button aria-label="Check">
            <Check />
          </Button>
        )}
        <Typography
          onKeyDown={(event) => event.key === "Enter" && changeTodo(_id)}
          tabIndex={0}
          sx={{
            textDecoration: `${isCompleted ? "line-through solid red" : "none"}`,
            textDecorationThickness: "3px",
          }}
        >
          {title}
        </Typography>
      </Box>

      <Button aria-label="Deleted" onClick={() => removeTodo(_id)}>
        <DeleteOutlined />
      </Button>
    </Box>
  );
};
