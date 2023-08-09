/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
import TransactionsList from "./TransactionsList";
import { transaction } from "./TransactionsList";
import SpendingYGraph from "./SpendingYGraph";
import CheckingAccount from "./CheckingAccount";
import MasterCard from "./MasterCard";

interface Props {
  userTransactions: transaction[];
}
export default function Transactions({ userTransactions}: Props) {
  return (
    <div className='flex justify-between'>
      <div>
        <div className='flex justify-between'>
          <CheckingAccount accBalance={10000}/>
          <MasterCard accBalance={10000} cardDetails='2345 7689 9005 4222'/>
        </div >
        <div className="">
        <SpendingYGraph userTransactions={userTransactions}/>
        </div>
      </div>
    <div className="w-2/5">
    <TransactionsList userTransactions={userTransactions}/>
    </div>
    </div>
  );
}
