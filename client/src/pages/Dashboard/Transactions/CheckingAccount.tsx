// import React from 'react'
interface Props {
    accBalance: number
}
export default function CheckingAccount({accBalance}: Props) {
  return (
    <div className="text-left bg-slate-900 w-2/5">
      <div className="flex p-2 justify-between ">
        <h6 className="text-white">Checking Account</h6>
        <h6 className="text-blue-300">^2.36%</h6>
      </div>

      <div className="flex-col p-2">
        <h6 className="text-white">Balance</h6>
        <h2 className="text-blue-300">USD {accBalance}</h2>
        <h6 className="text-white">Available</h6>
        <h4 className="text-blue-300">USD {accBalance}</h4>
      </div>

      <div className="flex p-2 justify-between">
        <div>
            <h6 className="text-white">Income</h6>
            <h5 className="text-white">USD {accBalance}</h5>     
        </div>
        <div>
            <h6 className="text-white">Expenses</h6>
            <h5 className="text-white">USD {accBalance}</h5>     
        </div>
        
      </div>
    </div>
  )
}
