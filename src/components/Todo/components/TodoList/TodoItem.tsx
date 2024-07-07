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
        border="1px solid black"
        borderRadius="24px"
        width="20px"
        height="20px"
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
      >
        {isCompleted && <Check />}
      </Box>
      <Box
        display="flex"
        justifyContent="start"
        alignItems="center"
        gap="5px"
        width="80%"
        sx={{ wordBreak: "break-all", cursor: "pointer" }}
        onClick={() => changeTodo(_id)}
      >
        <Typography
          onKeyDown={(event) => event.key === "Enter" && changeTodo(_id)}
          tabIndex={0}
          sx={{
            textDecoration: `${isCompleted ? "line-through solid red" : "none"}`,
            textDecorationThickness: "2px",
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
