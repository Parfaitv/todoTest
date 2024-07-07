import { Box, Typography } from "@mui/material";

export const Header = () => (
  <Box
    display="flex"
    justifyContent="start"
    alignItems="center"
    border="2.5px solid transparent"
    height="2.5rem"
    width="100%"
    padding="16px"
    sx={{
      borderImage:
        "linear-gradient(to left top, red 10%, transparent 50%, transparent 50%, #0304e7 90%)",
      borderImageSlice: 1,
    }}
  >
    <Typography
      title="Hi! My name is Ali."
      fontWeight="500"
      fontSize="1.2rem"
      color="#fff"
      sx={{
        transition: "ease-in-out",
        transitionDuration: "300ms",
        textDecoration: "none",
        ":hover": {
          color: "red",
        },
      }}
    >
      Abduganiev Ali
    </Typography>
  </Box>
);
