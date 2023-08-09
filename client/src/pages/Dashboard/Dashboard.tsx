// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Investment from "./Investment/Investment";
import DashboardHome from "./DashboardHome";
import Transfer from "./Transfer/Transfer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Savings from "./Transfer/Savings";

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
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
