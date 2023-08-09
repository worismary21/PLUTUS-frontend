// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardHome from './DashboardHome'
import Transfer from './Transfer/Transfer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Savings from './Transfer/Savings'
import Transactions from './Transactions/Transactions'
import { transaction } from "./Transactions/TransactionsList";

const Dashboard = () => {

  const transactions: transaction[] = [{user: "tony markle",
  otherUser: "Central Burger",
  userTotalBalance: 10000,
  amount: -189.36,
  type: "Quick Transfer",
  date: new Date(),
  id: "dubqidg82392t38"
}, {user: "tony markle",
userTotalBalance: 10000,
otherUser: "The Market",
amount: -92.50,
type: "Groceries",
date: new Date(),
id: "uwqueufh72389kqd"
},
{user: "tony markle",
userTotalBalance: 10000,
  otherUser: "Quick Transfer",
  amount: 350,
  type: "Quick Transfer",
  date: new Date(),
  id: "dubqidg82392t38"
},
{user: "tony markle",
userTotalBalance: 10000,
otherUser: "The Market",
amount: -36,
type: "Groceries",
date: new Date(),
id: "dubqidg82392t38"
},
{user: "tony markle",
userTotalBalance: 10000,
  otherUser: "Central Burger",
  amount: -18.40,
  type: "Cafe and Resturant",
  date: new Date(),
  id: "dubqidg82392t38"
},
{user: "tony markle",
userTotalBalance: 10000,
  otherUser: "Quick Transfer",
  amount: 350,
  type: "Cafe and Resturant",
  date: new Date(),
  id: "dubqidg82392t38"
}
]


  return (
    <div style={{display:"flex"}} >
        
        <Sidebar />
        <div>
            <Navbar />
        <Routes>
                <Route path="" element={<DashboardHome />} />
                <Route path="/transfer" element={<Transfer />} />
                <Route path="/transfer/savings" element={<Savings />} />
                <Route path="/transactions" element={<Transactions userTransactions={transactions}/>}/>


        </Routes>

        </div>
       
    </div>
  )
}

export default Dashboard