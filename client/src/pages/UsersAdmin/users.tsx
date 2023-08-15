import React, { useEffect, useState } from 'react'
import data from "./users.json"
import { Link } from 'react-router-dom';
import { apiGet } from '../../utils/axios';
import Pagination from '../AdminPageTransactions/Pagination';

// interface users {
//      id:string,
//      firstname
// }


function UsersAdmin() {

     const [currentPage, setCurrentPage] = useState(1)
     const [userPerPage, setUserPerPage] = useState(10)
     const [userDetails, setUserDetails] = useState([])
     const [searchInput, setSearchInput] = useState("")


     const search = () => {
          return data.filter((item) => 
          item.email.toLowerCase().includes(searchInput) 
          // item.id.toLowerCase().includes(searchInput) } 
          )
     }

     const handleChange = (e) => {
          e.preventDefault()
          setSearchInput(e.target.value)
     }

   

     const getUsers = async () => {
          const response = await apiGet("/transactions/getUserDetails")
          console.log(response.data.data)
          setUserDetails(response.data.data)
     }

     console.log("data", data)

     useEffect(()=>{
          getUsers()
     }, [userDetails])

  return (
     <>
          <div className='pl-6'>

               <div className='m-5 w-96 '> 
                    <input type='search' placeholder='Search...' onChange={handleChange} value={searchInput} className='w-full h-10 rounded-lg align-end'/>
                </div>
               <table className='ml-10'>    
                    <thead className='shadow-lg sticky top-0 bg-blue-500 text-white-50'>
                         <th className='p-4 w-4'>ID</th>
                         <th className='p-2 w-4'>First Name</th>
                         <th className='p-2 w-4'>Last Name</th>
                         <th className='p-2 w-4'>Email</th>
                         <th className='p-2 w-4'>Account Number</th>
                         <th className='p-2 w-4'>Savings Wallet</th>
                         <th className='p-2 w-4'>Account Balance</th>
                         <th className='p-2 w-4'>Options</th>
                    </thead>

                    <tbody>
                         {search(data).map((val) => (
                              <tr key={val.id} className='h-20 shadow-sm hover:bg-blue-300 bg-blue-100'>
                                   <td className='text-center w-4'>{val.id}</td>
                                   <td className='text-center w-4'>{val.firstName}</td>
                                   <td className='text-center w-4'>{val.lastName}</td>
                                   <td className='text-center w-4'>{val.email}</td>
                                   <td className='text-center w-4'>{val.accountNumber}</td>
                                   <td className='text-center w-4'>{val.savingsWallet}</td>
                                   <td className='text-center w-4'>{val.accountBalance}</td>
                                   <td className='text-center w-1'>
                                        <button className='border bg-red-400 hover:bg-red-600 w-40 h-10 text-white rounded' >Delete</button>
                                   </td>

                              </tr>
                         ))}
                    </tbody>
               </table>
                <div className = "mx-auto w-10 border-16 py-10">
                <Pagination totalTransactions = {data.length} postsPerPage = {userPerPage} setCurrentPage = {setCurrentPage} currentPage = {currentPage} />
            </div>
               
          </div>
     </>
  )
}

export default UsersAdmin
