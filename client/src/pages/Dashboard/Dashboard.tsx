// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Investment from "./Investment/Investment";
import DashboardHome from "./DashboardHome";
import Transfer from "./Transfer/Transfer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Savings from "./Transfer/Savings";
import AccountSettings from "../accountSettings/accountSetting";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", overflowX: "hidden" }}>
      <Sidebar />
      <div>
        <Navbar />
        <Routes>
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
