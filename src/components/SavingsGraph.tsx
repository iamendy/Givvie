import { useAccount, useContractRead } from "wagmi";

import {
  Chart as ChartJs,
  LineElement,
  LineController,
  LinearScale,
  Tooltip,
  Legend,
  CategoryScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJs.register(
  LineElement,
  LineController,
  LinearScale,
  CategoryScale,
  PointElement,
  Tooltip,
  Legend
);

const SavingsGraph = () => {
  const { address } = useAccount();

  const chartData = {
    labels: [30, 32, 23, 60, 54, 37].map((d) => d),
    datasets: [
      {
        label: "Amount",
        data: [100, 200, 120, 100, 50, 37].map((d) => d),
        fill: false,
        borderColor: "rgb(0, 0, 0)",
        tension: 0.1,
        backgroundColor: "rgb(21 128 61 / 0.9)",
        width: 5,
        borderWidth: 1,
        borderRadius: 15,
      },
    ],
  };

  return (
    <div className="mt-9">
      <h3 className="font-semibold mb-1">Savings Trend</h3>

      {history?.length > 0 ? (
        <Line data={chartData} />
      ) : (
        <div className="text-center">No record found</div>
      )}
    </div>
  );
};
export default SavingsGraph;
