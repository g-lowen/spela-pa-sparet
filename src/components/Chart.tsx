import { PieChart } from "@mui/x-charts/PieChart";
import { Match } from "../types";

interface ChartProps {
  data:
    | {
        id: number | string;
        betters: string;
        value: number;
        label: (location: "legend" | "tooltip" | "arc") => string;
      }[]
    | null;
  matchType: Match["matchType"];
}

export const Chart = ({ data, matchType }: ChartProps) => {
  if (!data) {
    return null;
  }
  return (
    <PieChart
      slotProps={{
        legend: {
          direction: "horizontal",
          position: { vertical: "bottom", horizontal: "start" },
        },
      }}
      series={[
        {
          data: data.map((d) => ({
            id: d.id,
            value: d.value,
            label: d.label,
          })),
          valueFormatter: (_value, { dataIndex }) => data[dataIndex].betters,
        },
      ]}
      sx={{ "&&": { touchAction: "auto", userSelect: "none" } }}
      height={300}
    />
  );
};
