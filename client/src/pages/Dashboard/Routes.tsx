// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Investment from "./Investment/Investment";
import DashboardHome from "./HomeDashBoard/DashboardHome";
import Transfer from "./Transfer/Transfer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Savings from "./Transfer/Savings";
import Invest from "./Transfer/investment"
import AddBeneficiary from "./Transfer/AddBeneficiary"
import AccountSettings from "./accountSettings/accountSetting";

const RoutesDashBoard = () => {
  return (
    <div style={{ display: "flex", overflowX: "hidden" }}>
      <Sidebar />
      <div>
        <Navbar />
        <Routes>
<<<<<<< HEAD
                <Route path="" element={<DashboardHome />} />
                <Route path="/transfer" element={<Transfer />} />
                <Route path="/transfer/savings" element={<Savings />} />
                <Route path="/transactions" element={<Transactions userTransactions={transactions} userDetails ={userDetails}/>}/>


          <Route path="/dashboardHome" element={<DashboardHome userTransactions={transactions} />} />
=======
          <Route path="/dashboardHome" element={<DashboardHome />} />
>>>>>>> c7348cf33c2158ada0b24edf374f4acfc81d1b62
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/transfer/savings" element={<Savings />} />
          <Route path="/accountSettings" element={<AccountSettings />} />
          <Route path="/notifications" element={<AccountSettings />} />
          <Route path="/password-and-security" element={<AccountSettings />} />
          <Route path="/choose-plan" element={<AccountSettings />} />
          <Route path="/transfer/investment" element={<Invest />} />
          <Route path="/transfer/addbeneficiary" element={<AddBeneficiary />} />


        </Routes>
      </div>
    </div>
  );
};

export default RoutesDashBoard;
