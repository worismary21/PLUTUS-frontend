import React, { useEffect, useState } from 'react'
import data from "./users.json"
import { Link } from 'react-router-dom';
import { apiGet } from '../../utils/axios';

// interface users {
//      id:string,
//      firstname
// }


function UsersAdmin() {

     const [userDetails, setUserDetails] = useState([])
     const [currentPage, setCurrentPage] = useState(1)
     const [searchInput, setSearchInput] = useState("")


     const recordsPerPage = 10;
     const lastIndex = currentPage * recordsPerPage
     const firstIndex = lastIndex - recordsPerPage
     const records = data.slice(firstIndex, lastIndex)
     const npage = Math.ceil(data.length / recordsPerPage)
     const numbers = [...Array(npage + 1).keys()].slice(1)

     const handleChange = (e) => {
          e.preventDefault()
          setSearchInput(e.target.value)
     }

     if (searchInput.length > 0){
          userDetails.filter((userDetail) => {
               return userDetail.id.match(searchInput)
          })
     }


     function nextPage(){
          if(currentPage !== firstIndex){
               setCurrentPage(currentPage + 1)
          }
     }


     function prePage(){
          if(currentPage !== firstIndex){
               setCurrentPage(currentPage - 1)
          }
     }

     function changeCPage(id){
          setCurrentPage(id)
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

               <div className='mx-auto p-'> 
                    <input type='search' placeholder='Search here' onChange={handleChange} value={searchInput} className='w-full h-10 rounded-lg m-auto'/>
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
                         {records.map((val) => (
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
               <nav className='ml-40 '>
                    <ul className='flex flex-row'>
                         <li>
                              <Link  to="#" onClick={prePage}>Prev</Link>
                         </li>
                         {
                              numbers.map((n,i) => (
                                   <li className={`${currentPage === n ? 'active' : ""} w-10`} key={i}>
                                        <Link to="#" className='' onClick={()=>changeCPage(n)} >
                                             {n} </Link>
                                   </li>
                              ))
                         }
                         <li>
                              <Link to="#" onClick={nextPage}>Next</Link>
                         </li>

                    </ul>

               </nav>

               
          </div>
     </>
  )
}

export default UsersAdmin
