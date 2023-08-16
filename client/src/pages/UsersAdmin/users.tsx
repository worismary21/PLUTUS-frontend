import React, { useEffect, useState } from 'react'
import { apiGet } from '../../utils/axios';
import Pagination from '../AdminPageTransactions/Pagination';

// interface users {
//      id:string,
//      firstname
// }

interface User {
     id: string;
     firstName: string;
     lastName: string;
     email: string;
     accountNumber: string;
     savingsWallet: string;
     accountBalance: number;
  }
  


function UsersAdmin() {

     const [currentPage, setCurrentPage] = useState(1)
     const [userPerPage] = useState(10)
     const [userDetails, setUserDetails] = useState<User[]>([])
     const [searchInput, setSearchInput] = useState<string>("")


     // const search = (userDetails: any[]) => {
     //      return userDetails.filter((item) => 
     //      item.email.toLowerCase().includes(searchInput) 
     //      // item.id.toLowerCase().includes(searchInput) } 
     //      )
     // }

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault()
          setSearchInput(e.target.value)
     }

   

     const getUsers = async () => {
          try {
               const response = await apiGet("/user/get")
          console.log(response.data.data)
          setUserDetails(response.data.data)
          } catch (error) {
               console.error(error)
          }
     }

     useEffect(()=>{
          getUsers()
     }, [])

  return (
     <>

          <div className='mr-0 m-3 w-3/12 text-end'> 
               <input className='w-full h-10 rounded-lg' type='search' placeholder='Search...' onChange={handleChange} value={searchInput} />
          </div>
          <div className='pl-6'>
               
               <table className='ml-10'>     
                    <thead className='shadow-lg sticky top-0 bg-blue-500 text-white-50'>
                         <tr>
                              <th className='p-4 w-4'>ID</th>
                              <th className='p-2 w-4'>First Name</th>
                              <th className='p-2 w-4'>Last Name</th>
                              <th className='p-2 w-4'>Email</th>
                              <th className='p-2 w-4'>Account Number</th>
                              <th className='p-2 w-4'>Savings Wallet</th>
                              <th className='p-2 w-4'>Account Balance</th>
                              <th className='p-2 w-4'>Options</th>
                         </tr>
                    </thead>

                    <tbody>
                         {userDetails.map((user) => (
                              <tr key={user.id} className='h-20 shadow-sm hover:bg-blue-300 bg-blue-100'>
                                   <td className='text-center w-4'>{user.id}</td>
                                   <td className='text-center w-4'>{user.firstName}</td>
                                   <td className='text-center w-4'>{user.lastName}</td>
                                   <td className='text-center w-4'>{user.email}</td>
                                   <td className='text-center w-4'>{user.accountNumber}</td>
                                   <td className='text-center w-4'>{user.savingsWallet}</td>
                                   <td className='text-center w-4'>{user.accountBalance}</td>
                                   <td className='text-center w-1'>
                                        <button className='border bg-red-400 hover:bg-red-600 w-40 h-10 text-white rounded' >Delete</button>
                                   </td>

                              </tr>
                         ))}
                    </tbody>
               </table>
               <div className = "mx-auto w-10 border-16 py-10">
                    <Pagination totalTransactions = {userDetails.length} postsPerPage = {userPerPage} setCurrentPage = {setCurrentPage} currentPage = {currentPage} />
               </div>
               
          </div>
     </>
  )
}

export default UsersAdmin
