import { Box, BoxProps } from "@mui/material";
import { getPalette } from "./helpers/getPalette";
import { HALLOWEEN_PALETTE } from "../constants/palette";

export const Carousel = (props: BoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "4px",
        maxWidth: "355px",
        overflowX: "auto",
        paddingBottom: "5px",
        scrollBehavior: "smooth",
        scrollSnapType: "x mandatory",
        anchorName: "--carousel",
        scrollMarkerGroup: "after",
        "&::-webkit-scrollbar": { display: "none" },
        "&::scroll-button(right), &::scroll-button(left)": {
          content: '"↣"',
          alignItems: "center",
          backgroundColor: getPalette()?.[0] || HALLOWEEN_PALETTE[0],
          border: "none",
          borderRadius: "50%",
          color: "white",
          cursor: "pointer",
          display: "inline-flex",
          fontSize: "2rem",
          height: "44px",
          justifyContent: "center",
          left: "calc(50% + 135px)",
          marginTop: "-16px",
          position: "absolute",
          width: "44px",
        },
        "&::scroll-button(left)": {
          content: '"↢"',
          left: "calc(50% - 180px)",
        },
        "&::scroll-button(right):disabled, &::scroll-button(left):disabled": {
          cursor: "auto",
          opacity: "0.5",
        },
        "&::scroll-marker-group": {
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        },
      }}
      {...props}
    />
  );
};
