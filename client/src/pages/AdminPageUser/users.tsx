import React, { useEffect, useState } from 'react'
import { apiDelete, apiGet } from '../../utils/axios';
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
     amount: number;
  }
  


function UsersAdmin() {

     const [currentPage, setCurrentPage] = useState(1)
     const [userPerPage] = useState(10)
     const [userDetails, setUserDetails] = useState<User[]>([])
     const [searchInput, setSearchInput] = useState<string>("")


     const search = (userDetails: User[]) => {
          return userDetails.filter((user) => 
          user.email.toLowerCase().includes(searchInput) ||
          user.accountNumber.toLowerCase().includes(searchInput)||
          user.firstName.toLowerCase().includes(searchInput)||
          user.firstName.toLowerCase().includes(searchInput) ) 
     
     } 
     
     const searchedUsers = search(userDetails)


     

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault()
          setSearchInput(e.target.value)
     }

     const handleDelete = async (id: string) => {
          try {
               const response = await apiDelete(`/user/deleteUser/${id}`)

               if(response){
                    const newUserArray = userDetails.filter((list) => list.id !== id)
                    setUserDetails(newUserArray)

               }
          } catch (error) {
               console.error(error)
          }
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
     }, [userDetails])

  return (
     <>
<div className='m-3 sm:ml-[70%] sm:w-3/12'>
  <input className='w-full h-10 rounded-lg' type='search' placeholder='Search...' onChange={handleChange} value={searchInput} />
</div>
<div className='pl-3 sm:pl-6'>
  <div className='overflow-x-auto'>
    <table className='w-full shadow-lg text-xs'>
      <thead className='shadow-lg sticky top-0 bg-blue-500 text-white-50'>
        <tr>
          <th className='p-4'>ID</th>
          <th className='p-2'>First Name</th>
          <th className='p-2'>Last Name</th>
          <th className='p-2'>Email</th>
          <th className='p-2'>Account Number</th>
          <th className='p-2'>Savings Wallet</th>
          <th className='p-2'>Account Balance</th>
          <th className='p-2'>Options</th>
        </tr>
      </thead>
      <tbody>
        {searchedUsers.map((user, i) => (
          <tr key={user.id} className='h-20 shadow-sm hover:bg-blue-300 bg-blue-100 ml-2 sm:ml-5'>
            <td className='text-center'>{i + 1}</td>
            <td className='text-center'>{user.firstName}</td>
            <td className='text-center'>{user.lastName}</td>
            <td className='text-center'>{user.email}</td>
            <td className='text-center'>{user.accountNumber}</td>
            <td className='text-center'>{user.savingsWallet}</td>
            <td className='text-center'>{user.accountBalance}</td>
            <td className='text-center'>
              <button className='border bg-red-400 hover:bg-red-600 w-28 sm:w-40 h-10 text-white rounded' onClick={() => handleDelete(user.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
<div className = "mx-auto w-10 border-16 py-10">
               <Pagination totalTransactions = {userDetails.length} postsPerPage = {userPerPage} setCurrentPage = {setCurrentPage} currentPage = {currentPage} filterPageNumber = {searchedUsers.length}/>
          </div>


          

     </>
  )
}

export default UsersAdmin
