/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
    userDetails: any;
}
export default function CheckingAccount({userDetails}: Props) {
  return (
    
    <div className="text-left w-7/12 p-5 checkingaccount-black">
      <div className="flex p-2 justify-between">
      <h6 className="text-white">Checking Account</h6>
      <h6 className="text-blue-300">^2.36%</h6>
      </div>

      <div className="flex-col p-2">
        <h6 className="text-white text-xs pb-1">Balance</h6>
        <h2 className="text-blue-300">USD <span className="pl-2">{userDetails.accountBalance}</span></h2>
        <h6 className="text-white text-xs pb-2">Available</h6>
        <h4 className="text-blue-300">USD <span className="pl-2">{userDetails.accountBalance}</span></h4>
      </div>

      <div className="flex p-2 justify-between">
        <div>
        <h6 className="text-white text-xs">Income</h6>
        <h5 className="text-white">USD {userDetails.accountBalance}</h5>     
        </div>
        <div>
        <h6 className="text-white text-xs">Expenses</h6>
        <h5 className="text-white">USD {userDetails.accountBalance}</h5>     
        </div>
        
      </div>
    </div>
  )
}