// import React from 'react'

import Savings from './Transfer/Savings'
import Transactions from './Transactions/Transactions'
import { transaction } from "./Transactions/TransactionsList";
import { Route, Routes } from "react-router-dom";
import Investment from "./Investment/Investment";
import DashboardHome from "./HomeDashBoard/DashboardHome";
import Transfer from "./Transfer/Transfer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import AccountSettings from "../accountSettings/accountSetting";


  





const RoutesDashBoard = () => {

  const transactions: transaction[] = [{id: "1",
    accountNumber: 2636326829,
    amount: -200,
    transfer_purpose: "food",
    beneficiary_name: "tolu stacks",
    beneficiary_email: "tolustacks@gmail.com",
    payer_reference: "suosodnjosbidwu",
    information_for_beneficiary: "subdbybybaybaybs",
    status: "sucessful",
    senderId: "string"
}, {id: "2",
accountNumber: 2636326829,
amount: -200,
transfer_purpose: "food",
beneficiary_name: "Victoria Helen",
beneficiary_email: "tolustacks@gmail.com",
payer_reference: "suosodnjosbidwu",
information_for_beneficiary: "subdbybybaybaybs",
status: "sucessful",
senderId: "string"
},
{id: "3",
    accountNumber: 2636326829,
    amount: 200,
    transfer_purpose: "food",
    beneficiary_name: "Tony Bands",
    beneficiary_email: "tolustacks@gmail.com",
    payer_reference: "suosodnjosbidwu",
    information_for_beneficiary: "subdbybybaybaybs",
    status: "sucessful",
    senderId: "string"
},
{id: "4",
    accountNumber: 2636326829,
    amount: -50,
    transfer_purpose: "drinks",
    beneficiary_name: "Gig Briggs",
    beneficiary_email: "tolustacks@gmail.com",
    payer_reference: "suosodnjosbidwu",
    information_for_beneficiary: "subdbybybaybaybs",
    status: "sucessful",
    senderId: "string"
},
{id: "5",
accountNumber: 2636326829,
amount: -5000,
transfer_purpose: "vacation",
beneficiary_name: "Saturn Light",
beneficiary_email: "tolustacks@gmail.com",
payer_reference: "suosodnjosbidwu",
information_for_beneficiary: "subdbybybaybaybs",
status: "sucessful",
senderId: "string"
},
{id: "6",
    accountNumber: 2636326829,
    amount: -2000,
    transfer_purpose: "vacation",
    beneficiary_name: "Gojo Satori",
    beneficiary_email: "tolustacks@gmail.com",
    payer_reference: "suosodnjosbidwu",
    information_for_beneficiary: "subdbybybaybaybs",
    status: "sucessful",
    senderId: "string"
},
{id: "7",
    accountNumber: 2636326829,
    amount: -200,
    transfer_purpose: "food",
    beneficiary_name: "Jide Uchiha",
    beneficiary_email: "tolustacks@gmail.com",
    payer_reference: "suosodnjosbidwu",
    information_for_beneficiary: "subdbybybaybaybs",
    status: "sucessful",
    senderId: "string"
},
{id: "8",
    accountNumber: 2636326829,
    amount: -200,
    transfer_purpose: "food",
    beneficiary_name: "Virgo Tune",
    beneficiary_email: "tolustacks@gmail.com",
    payer_reference: "suosodnjosbidwu",
    information_for_beneficiary: "subdbybybaybaybs",
    status: "sucessful",
    senderId: "string"
},
{id: "9",
    accountNumber: 2636326829,
    amount: -200,
    transfer_purpose: "entertainment",
    beneficiary_name: "tolu stacks",
    beneficiary_email: "tolustacks@gmail.com",
    payer_reference: "suosodnjosbidwu",
    information_for_beneficiary: "subdbybybaybaybs",
    status: "sucessful",
    senderId: "string"
},
{id: "10",
    accountNumber: 2636326829,
    amount: -200,
    transfer_purpose: "entertainment",
    beneficiary_name: "tolu stacks",
    beneficiary_email: "tolustacks@gmail.com",
    payer_reference: "suosodnjosbidwu",
    information_for_beneficiary: "subdbybybaybaybs",
    status: "sucessful",
    senderId: "string"
},
{id: "11",
    accountNumber: 2636326829,
    amount: 10200,
    transfer_purpose: "revenue",
    beneficiary_name: "tolu stacks",
    beneficiary_email: "tolustacks@gmail.com",
    payer_reference: "suosodnjosbidwu",
    information_for_beneficiary: "subdbybybaybaybs",
    status: "sucessful",
    senderId: "string"
}
]

const userDetails = {
  fullName: "tolu bands",
  cardNumber: "4444 4444 4444 4444",
  accountBalance: 10000,
  cardexp: "2/28"

}
  return (
    <div style={{ display: "flex", overflowX: "hidden" }}>
      <Sidebar />
      <div>
        <Navbar />
        <Routes>
               <Route path="" element={<DashboardHome />} />
               <Route path="/transfer" element={<Transfer />} />
               <Route path="/transfer/savings" element={<Savings />} />
               <Route path="/transactions" element={<Transactions userTransactions={transactions} userDetails ={userDetails}/>}/>
               <Route path="/dashboardHome" element={<DashboardHome />} />
               <Route path="/transfer" element={<Transfer />} />
               <Route path="/investment" element={<Investment />} />
               <Route path="/transfer" element={<Transfer />} />
               <Route path="/transfer/savings" element={<Savings />} />
               {/* <Route path="/accountSettings" element={<AccountSettings />} /> */}
               {/* <Route path="/notifications" element={<AccountSettings />} /> */}
               {/* <Route path="/password-and-security" element={<AccountSettings />} /> */}
               {/* <Route path="/choose-plan" element={<AccountSettings />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default RoutesDashBoard;
