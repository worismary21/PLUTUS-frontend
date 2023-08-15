import React, {useEffect, useState} from 'react';
import axios from '../../api/axios';
import { apiGet } from '../../utils/axios';
import Pagination from './pagination';
 
function Transactions (){
    const [transactionDetails, setTransactionsDetails] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [transactionsPerPage, setTransactionsPerPage] = useState(10)

    const getTransactions = async() => {
        const response = await apiGet("/transfer/successfultransactions")
        // console.log(response.data.data)

        setTransactionsDetails(response.data.data)
    }
    
    useEffect(() => {
        getTransactions()
    }, [transactionDetails])

    // interface transactionDetails{
    //     id:string,
    //     accountNumber:number

    // }

    function handleClick(id){
        const newTransactions = transactionDetails.filter((list) => list.id !== id)
        setTransactionsDetails(newTransactions)
    }
    const lastTransactionIndex = currentPage * transactionsPerPage
    const firstPostIndex = lastTransactionIndex - transactionsPerPage
    const currentTransactions = transactionDetails.slice(firstPostIndex, lastTransactionIndex)
    
    // console.log(transactionDetails)
    return (
        <>
        <div className="mt-12 releative w-full flex flex-col shadow-lg mb-6">
            <div className = "flex flex-wrap items-center">
                <div className = "relative w-full px-4 max-w-full flex-grow">
            <p className = "text-center text-xl decoration-from-font text-red-700">TRANSACTIONS FOR ALL USERS</p>
            </div>
            </div>

            <div className = "block bg-transparent m-4 p-4 w-full overflow-x-auto">
            <table className = " border-2 w-6/12 ml-38 pt-px">
                <thead>
                    <tr className = "border border-solid border-l-0 bg-green-500">
                        <th className = "text-md px-6 py-1">id</th>
                        <th className = "text-md px-6 py-1">accountNumber</th>
                        <th className = "text-md px-6 py-1">amount</th>
                        <th className = "text-md px-6 py-1 ">transfer_purpose</th>
                        <th className = "text-md px-6 py-1">beneficiary_name</th>
                        <th className = "text-md px-6 py-1 ">beneficiary_email</th>
                        <th className = "text-md px-6 py-1">status</th>
                        <th className = "text-md px-6 py-1">senderId</th>
                        <th className = "text-md px-6 py-1 bg-red-600">DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentTransactions.map((val) => {
                            return <tr className = "hover:bg-green-300 cursor-pointer bg-green-100" key = {val.id}>
                            <td className = "text-sm  py-1 text-center w-80">{val.id}</td>
                            <td className = "text-sm px-6 py-1 text-center">{val.accountNumber}</td>
                            <td className = "text-sm px-6 py-1 text-center">{val.amount}</td>
                            <td className = "text-sm px-6 py-1 text-center">{val.transfer_purpose}</td>
                            <td className = "text-sm px-6 py-1 text-center">{val.beneficiary_name}</td>
                            <td className = "text-sm px-6 py-1 text-center">{val.beneficiary_email}</td>
                            <td className = "text-sm px-6 py-1 text-center">{val.status}</td>
                            <td className = "text-sm px-6 py-1 text-center">{val.senderId}</td>
                            <td> <button type = "button" className = "bg-red-400 hover:bg-red-600" onClick = {() => handleClick(val.id)}>DELETE</button> </td>
                         </tr>
                        })
                    }
                </tbody>
            </table>
            <div className = "mx-auto w-10 border-16 py-10">
                <Pagination totalTransactions = {transactionDetails.length} postsPerPage = {transactionsPerPage} setCurrentPage = {setCurrentPage} currentPage = {currentPage} />
            </div>
            </div>
        </div>
        </>
    )
}

export default Transactions
