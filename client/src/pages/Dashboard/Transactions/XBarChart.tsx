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
    
    const toSort: [string, number][] = [];
  
    const expenses: transaction[] = userTransactions.filter(
      (transaction) => transaction.amount < 0
    );
    expenses.forEach((expense) => {
      if (!expensesCountObj[expense.transfer_purpose]) {
        expensesCountObj[expense.transfer_purpose] = 0;
      }
      expensesCountObj[expense.transfer_purpose] += -1 * expense.amount;
    });
  
    for (const key in expensesCountObj) {
      toSort.push([key, expensesCountObj[key]]);
    }

    toSort.sort((a,b)=> b[1]-a[1]);
  
    toSort.forEach(expense=> {
        expensesCountKeyArr.push(expense[0]) 
        expensesCountValueArr.push(expense[1])
    })

    const data = {
      labels: expensesCountKeyArr,
      datasets: [
        {
          label: "Amount",
          data: expensesCountValueArr,
          backgroundColor: "black",
          borderColor: "black",
          borderWidth: 1,
          barThickness: 50,
          maxThickness: 50,
          barPercentage: 0.9,
          categoryPercentage: 1
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
        <Bar height="100%" className="pl-10 pr-40" data={data} options={options}></Bar>
      </>
    );
  }
  