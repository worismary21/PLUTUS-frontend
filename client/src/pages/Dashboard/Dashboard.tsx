// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardHome from './DashboardHome'
import Transfer from './Transfer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <div style={{display:"flex"}} >
        
        <Sidebar />
        <div>
            <Navbar />
        <Routes>
                <Route path="" element={<DashboardHome />} />
                <Route path="/transfer" element={<Transfer />} />
        </Routes>

        </div>
       
    </div>
  )
}

export default Dashboard