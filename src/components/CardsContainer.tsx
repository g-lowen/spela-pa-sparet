import Box, { BoxProps } from "@mui/material/Box";

export const CardsContainer = (props: BoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "2px",
        overflowX: "scroll",
        scrollSnapType: "x mandatory"
      }}
      {...props}
    />
  );
};