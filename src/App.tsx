import { Typography } from "@mui/material";
import { Header, Layout, Todo } from "./components";

export const App = () => {
  return (
    <Layout>
      <Header />
      <Typography
        fontWeight="900"
        fontSize="1.5rem"
        color="#fff"
        title="todo list"
      >
        TODO
      </Typography>
      <Todo />
    </Layout>
  );
};
