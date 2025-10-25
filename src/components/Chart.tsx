import { PieChart } from "@mui/x-charts/PieChart";
import { getPalette } from "./helpers/getPalette";

interface ChartProps {
  data:
    | {
        id: number | string;
        betters: string;
        value: number;
        label: (location: "legend" | "tooltip" | "arc") => string;
      }[]
    | null;
}

export const Chart = ({ data }: ChartProps) => {
  if (!data) {
    return null;
  }
  return (
    <PieChart
      colors={getPalette()}
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
