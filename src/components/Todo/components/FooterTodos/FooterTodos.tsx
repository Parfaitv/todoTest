import { Box, Button, Typography } from "@mui/material";
import { TTodoItem } from "../../../types";

type TFooterTodosProps = {
  allTodos: TTodoItem[];
  lengthCurrentTodos: number;
  setCurrentTodos: (value: TTodoItem[]) => void;
  setAllTodos: (value: TTodoItem[]) => void;
};

export const FooterTodos = ({
  allTodos,
  lengthCurrentTodos,
  setAllTodos,
  setCurrentTodos,
}: TFooterTodosProps) => {
  const changeAllTodos = () => setCurrentTodos(allTodos);
  const changeActiveTodos = () => {
    const activeTodos = [...allTodos].filter((todo) => !todo.isCompleted);
    setCurrentTodos(activeTodos);
  };
  const changeCompletedTodos = () => {
    const completedTodos = [...allTodos].filter((todo) => todo.isCompleted);
    setCurrentTodos(completedTodos);
  };
  const clearCompletedTodos = () => {
    const activeTodos = [...allTodos].filter((todo) => !todo.isCompleted);
    setCurrentTodos(activeTodos);
    setAllTodos(activeTodos);
  };

  return (
    <Box
      display="flex"
      position="sticky"
      bottom="-10px"
      justifyContent="space-between"
      alignItems="center"
      width="105%"
      sx={{ backgroundColor: "#fff" }}
      borderRadius="9px"
      boxShadow="0px 2px 5px 0px rgba(0, 0, 0, 0.16)"
    >
      <Typography>{lengthCurrentTodos} items left</Typography>
      <Box>
        <Button size="small" onClick={changeAllTodos}>
          All
        </Button>
        <Button size="small" onClick={changeActiveTodos}>
          Active
        </Button>
        <Button size="small" onClick={changeCompletedTodos}>
          Completed
        </Button>
      </Box>
      <Box>
        <Button size="small" onClick={clearCompletedTodos}>
          Clear completed
        </Button>
      </Box>
    </Box>
  );
};
