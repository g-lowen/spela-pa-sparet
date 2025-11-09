import { Pagination, Stack } from "@mui/material";
import { Match } from "../types";
import { ChartCard } from "./ChartCard";
import { useState } from "react";

export const Carousel = ({
  matches,
  groupStartIndex,
}: {
  matches: Match[];
  groupStartIndex: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentIndex(value);
  };

  return (
    <Stack spacing={2} alignItems="center">
      {matches.map(
        (match, index) =>
          index + 1 === currentIndex && (
            <ChartCard match={match} matchIndex={index + groupStartIndex} />
          )
      )}
      <Pagination
        color="primary"
        count={matches.length}
        page={currentIndex}
        onChange={handleChange}
      />
    </Stack>
  );
};
