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
          <Route path="/dashboardHome" element={<DashboardHome />} />
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
