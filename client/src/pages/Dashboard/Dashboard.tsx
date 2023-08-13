// import React from 'react'

import Savings from './Transfer/Savings'
import Transactions from './Transactions/Transactions'
import { transaction } from "./Transactions/TransactionsList";
import { Route, Routes } from "react-router-dom";
import Investment from "./Investment/Investment";
import DashboardHome from "./DashboardHome";
import Transfer from "./Transfer/Transfer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AccountSettings from "../accountSettings/accountSetting";

const Dashboard = () => {

  const transactions: transaction[] = [{id: "uwuuuiwiwow123",
    accountNumber: 2636326829,
    amount: 200,
    transfer_purpose: "food",
    beneficiary_name: "tolu stacks",
    beneficiary_email: "tolustacks@gmail.com",
    payer_reference: "suosodnjosbidwu",
    information_for_beneficiary: "subdbybybaybaybs",
    status: "sucessful",
    senderId: "string"
}, {id: "uwuuuiwiwow123",
accountNumber: 2636326829,
amount: 200,
transfer_purpose: "food",
beneficiary_name: "tolu stacks",
beneficiary_email: "tolustacks@gmail.com",
payer_reference: "suosodnjosbidwu",
information_for_beneficiary: "subdbybybaybaybs",
status: "sucessful",
senderId: "string"
},
{id: "uwuuuiwiwow123",
    accountNumber: 2636326829,
    amount: 200,
    transfer_purpose: "food",
    beneficiary_name: "tolu stacks",
    beneficiary_email: "tolustacks@gmail.com",
    payer_reference: "suosodnjosbidwu",
    information_for_beneficiary: "subdbybybaybaybs",
    status: "sucessful",
    senderId: "string"
},
{id: "uwuuuiwiwow123",
    accountNumber: 2636326829,
    amount: 200,
    transfer_purpose: "food",
    beneficiary_name: "tolu stacks",
    beneficiary_email: "tolustacks@gmail.com",
    payer_reference: "suosodnjosbidwu",
    information_for_beneficiary: "subdbybybaybaybs",
    status: "sucessful",
    senderId: "string"
},
{id: "uwuuuiwiwow123",
accountNumber: 2636326829,
amount: 200,
transfer_purpose: "food",
beneficiary_name: "tolu stacks",
beneficiary_email: "tolustacks@gmail.com",
payer_reference: "suosodnjosbidwu",
information_for_beneficiary: "subdbybybaybaybs",
status: "sucessful",
senderId: "string"
},
{id: "uwuuuiwiwow123",
    accountNumber: 2636326829,
    amount: 200,
    transfer_purpose: "food",
    beneficiary_name: "tolu stacks",
    beneficiary_email: "tolustacks@gmail.com",
    payer_reference: "suosodnjosbidwu",
    information_for_beneficiary: "subdbybybaybaybs",
    status: "sucessful",
    senderId: "string"
},
{id: "uwuuuiwiwow123",
    accountNumber: 2636326829,
    amount: 200,
    transfer_purpose: "food",
    beneficiary_name: "tolu stacks",
    beneficiary_email: "tolustacks@gmail.com",
    payer_reference: "suosodnjosbidwu",
    information_for_beneficiary: "subdbybybaybaybs",
    status: "sucessful",
    senderId: "string"
},
{id: "uwuuuiwiwow123",
    accountNumber: 2636326829,
    amount: 200,
    transfer_purpose: "food",
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
          <Route path="" element={<DashboardHome />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="" element={<DashboardHome />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/transfer/savings" element={<Savings />} />
          <Route path="/accountSettings" element={<AccountSettings />} />
          <Route path="/notifications" element={<AccountSettings />} />
          <Route path="/password-and-security" element={<AccountSettings />} />
          <Route path="/choose-plan" element={<AccountSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
