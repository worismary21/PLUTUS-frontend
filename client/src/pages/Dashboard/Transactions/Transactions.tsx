/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from 'react';
import TransactionsList from "./TransactionsList";
import { transaction } from "./TransactionsList";
// import SpendingYGraph from "./SpendingYGraph";
// import SpendingXGraph from "./SpendingXGraph"
import YBarChart from "./YBarChart"
import CheckingAccount from "./CheckingAccount";
import MasterCard from "./MasterCard";
// import { apiGet } from '../../../utils/axios';
// import axios from 'axios';
import "./style.css"

interface Props {
  userTransactions: transaction[];
  userDetails: any;
}

export default function Transactions({ userTransactions ,userDetails}: Props) {
  // const [transactions, setTransactions] = useState([])

  //  const tstn = await apiGet('/getAllTransactions')
  //  setTransactions(tstn);
  
  

  return (
    <>
    <h6 className="bg-slate-900 ml-20 mb-5 mt-5 p-2 w-2/6 w-fit text-white">Checking Account</h6>
    <div className='flex justify-between'>
      <div className="ml-20 h-full">
        <div className='flex justify-between h-3/5'>
          <CheckingAccount userDetails={userDetails}/>
          <MasterCard userDetails={userDetails}/>
        </div >
        <div className="w-full" >
        <div className="chart">
          <YBarChart userTransactions={userTransactions}></YBarChart>
        </div>
        <div className="chart">
        <YBarChart userTransactions={userTransactions}></YBarChart>
        </div>
        </div>
      </div>
    <div className="w-2/5 pl-5 pr-5">
    <TransactionsList userTransactions={userTransactions}/>
    </div>
    </div>
    </>
  );
}
