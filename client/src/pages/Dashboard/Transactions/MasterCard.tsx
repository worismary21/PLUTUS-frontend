/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
    userDetails: any;
}
export default function MasterCard({userDetails}: Props) {
  return (
    
    <div className=" flex-col bg-orange-500 rounded-l-3xl rounded-r-3xl w-2/5 text-left p-5">
        <div>
      <h6 className="p-2 text-xs">Available Balance</h6>
      <h2 className="p-2">USD {userDetails.accountBalance}</h2>
      </div>
      <div className="p-2">
        {userDetails.cardNumber}
      </div>

      <div className="flex p-2 justify-between">
        <h6>{userDetails.fullName}</h6>
        <h6>{userDetails.cardexp}</h6>
      </div>
    </div>
    
  )
}