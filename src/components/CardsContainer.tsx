import { Box, BoxProps } from "@mui/material";

export const CardsContainer = (props: BoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "4px",
        maxWidth: "960px",
        overflowX: "auto",
        paddingBottom: "5px",
        scrollSnapType: "x mandatory",
      }}
      {...props}
    />
  );
};
