// import React from 'react'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa", width: "15%", height: "100vh" }}>
      Sidebar
      <ul>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/dashboard/transfer">Transfer</Link>
        </li>
        <li>
          <Link to="/dashboard/investment">Investments</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
