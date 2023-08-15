import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { transaction } from "./TransactionsList";
import "./style.css"

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface Props {
  userTransactions: transaction[];
}

export default function YGraph({ userTransactions }: Props) {
  const expensesCountObj: Record<string, number> = {};
  const expensesCountKeyArr: string[] = [];
  const expensesCountValueArr: number[] = [];

  const expenses: transaction[] = userTransactions.filter(
    (transaction) => transaction.amount < 0
  );
  expenses.forEach((expense) => {
    if (!expensesCountObj[expense.transfer_purpose]) {
      expensesCountObj[expense.transfer_purpose] = 0;
    }
    expensesCountObj[expense.transfer_purpose]++;
  });

  for (const key in expensesCountObj) {
    expensesCountKeyArr.push(key);
    expensesCountValueArr.push(expensesCountObj[key]);
  }

  const data = {
    labels: expensesCountKeyArr,
    datasets: [
      {
        label: "spending overview",
        data: expensesCountValueArr,
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <>
      <Bar data={data} options={options}></Bar>
    </>
  );
}
