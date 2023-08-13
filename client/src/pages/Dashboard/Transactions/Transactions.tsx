/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
import TransactionsList from "./TransactionsList";
import { transaction } from "./TransactionsList";
import SpendingYGraph from "./SpendingYGraph";
import SpendingXGraph from "./SpendingXGraph"
import CheckingAccount from "./CheckingAccount";
import MasterCard from "./MasterCard";

interface Props {
  userTransactions: transaction[];
  userDetails: any;
}
export default function Transactions({ userTransactions, userDetails}: Props) {
  return (
    <>
    <div className='flex justify-between'>
      <div className="ml-20 h-screen">
        <div className='flex justify-between'>
          <CheckingAccount userDetails={userDetails}/>
          <MasterCard userDetails={userDetails}/>
        </div >
        <div className="" >
        <div className="">
        {/* <SpendingYGraph userTransactions={userTransactions}/> */}
        </div>
        <div className="">
        {/* <SpendingXGraph userTransactions={userTransactions}></SpendingXGraph> */}
        </div>
        </div>
      </div>
    <div className="w-2/5">
    <TransactionsList userTransactions={userTransactions}/>
    </div>
    </div>
    </>
  );
}
