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
import XBarChart from "./XBarChart";

interface Props {
  userTransactions: transaction[];
  userDetails: any;
}

export default function Transactions({ userTransactions ,userDetails}: Props) {
  // const [transactions, setTransactions] = useState([])

  //  const tstn = await apiGet('/getAllTransactions')
  //  setTransactions(tstn);
  
  

  return (
    <div className="pr-[7%] lg:pr-[0%]">
    <h6 className="bg-slate-900 ml-20 mb-5 mt-5 p-2  w-fit text-white">Checking Account</h6>
    <div className='flex flex-col lg:flex-row justify-between'>
      <div className="ml-20 h-full">
        <div className='flex  flex-col lg:flex-row justify-between h-3/5'>
          <CheckingAccount userDetails={userDetails}/>
          <MasterCard userDetails={userDetails}/>
        </div >
        <h1 className="pt-10">Spending Overview</h1>
        <div className="w-full flex flex-col pt-10" >
        <div className="chart-blue">
          <YBarChart userTransactions={userTransactions}></YBarChart>
        </div>
        <div className="chart-purple mt-10">
        <XBarChart userTransactions={userTransactions}></XBarChart>
        
        </div>
        </div>
      </div>
    <div className="lg:w-2/5 pl-5 pr-5 ml-[10%] lg:ml-[0%]">
    <TransactionsList userTransactions={userTransactions}/>
    </div>
    </div>
    </div>
  );
}
