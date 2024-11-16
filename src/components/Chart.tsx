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
      margin={{
        top: 0,
        right: 0,
        bottom: matchType === "semifinal" ? 200 : 100,
        left: 0
      }}
      slotProps={{
        legend: {
          direction: "row",
          position: { vertical: "bottom", horizontal: "left" }
        }
      }}
      series={[
        {
          arcLabel: "label",
          data: data.map((d) => ({
            id: d.id,
            value: d.value,
            label: d.label
          })),
          valueFormatter: (_value, { dataIndex }) => data[dataIndex].betters
        }
      ]}
      height={matchType === "semifinal" ? 400 : 300}
    />
  );
};
