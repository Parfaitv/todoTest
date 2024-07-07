import { ReactNode } from "react";
import { Box } from "@mui/material";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="start"
      height="100vh"
      overflow="hidden"
      alignItems="center"
      gap="20px"
      sx={{ backgroundColor: "#111827" }}
    >
      {children}
    </Box>
  );
};
