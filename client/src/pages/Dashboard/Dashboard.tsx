// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardHome from './DashboardHome'
import Transfer from './Transfer/Transfer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import AccountSettings from "../accountSettings/accountSetting"
import Savings from './Transfer/Savings'

const Dashboard = () => {
  return (
    <div style={{display:"flex"}} >
        
        <Sidebar />
        <div>
            <Navbar />
        <Routes>
                <Route path="" element={<DashboardHome />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/accountSettings" element={<AccountSettings />} />
          <Route path='/notifications' element={<AccountSettings />} />
          <Route path='/password-and-security' element={<AccountSettings />}/>
          <Route path='/choose-plan' element={<AccountSettings />}/>
          <Route path="/transfer/savings" element={<Savings />} />


        </Routes>

        </div>
       
    </div>
  )
}

export default Dashboard