// import React from 'react'
interface Props {
    accBalance: number;
    cardDetails: string;
}
export default function MasterCard({accBalance, cardDetails}: Props) {
  return (
    <div className="bg-orange-500 rounded-3xl w-2/5">
        <div>
      <h6 className="p-2">Available Balance</h6>
      <h2 className="p-2">USD {accBalance}</h2>
      </div>
      <div className="p-2">
        {cardDetails}
      </div>

      <div className="flex p-2 justify-between">
        <h6>userName</h6>
        <h6>date/date</h6>
      </div>
    </div>
  )
}
