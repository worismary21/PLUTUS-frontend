
// import TransactionChart from "./TransactionChart";
// import TransactionsHome from "./TransactionsHome";
// import graph from "../../assets/graph.png"
import ProgressBar from './ProgressBar';
import {
  BsFillArrowUpCircleFill, 
  BsFillCaretUpFill,
  BsCaretDownFill,
  BsFillBarChartFill,
} from "react-icons/bs"
import {FaGreaterThan, FaLessThan, FaPlane} from 'react-icons/fa'
import "../../../App.css";
import "./DashboardHome.css";
import Add from "../../../assets/Add new.svg"
import Karen from "../../../assets/Karen Potter.jpeg"
import Leonard from "../../../assets/Leonard Smith.jpeg"
import Maria from "../../../assets/Maria Purple.jpeg"
import Oscar from "../../../assets/Oscar Wild.jpeg"
import TransactionsHome from '../TransactionsHome';
import TransactionChart from '../TransactionChart';
import TransactionsList from '../Transactions/mainCode/TransactionsList';





const DashboardHome = () => {
  

  return (
    <>
      <div className="flex gap-4 flex-row overflow-hidden w-full h-full ml-[4%]">
        <div className="flex flex-col p-8">
          <div className="ml-0 rounded-sm p-4 flex-1 flex items-center gap-4">

            {/* Total Balance Card */}
            
            <div className="content w-full h-48 p-4 mr-5">
              <div className="flex items-center justify-between">
                <span className="font-semibold sm:text-sm">Total Balance</span>
                <div>
                <BsFillArrowUpCircleFill className="ml-28 mt-2 text-teal-500" />
                <span className="ml-28 text-teal-500">2.36%</span>
                </div>                
                <div className="flex flex-column justify-end ">
                  <div className="rounded-full ml-20 mt-1 text-teal-500">
                
                  </div>
          
                </div>
              </div>
              <h1 className="font-semibold ml-0 text-3xl leading-9 p-2">USD 10,000.00</h1>
              {/* <div className="flex flex-row-reverse justify-between items-center">                
                  <div className="">                    
                    <div className="  ml-11 mt-1 text-teal-500">
                        <BsFillCaretUpFill />
                        <p className="text-xs font-normal">Income</p>
                    </div>
                    <h4 className="font-bold">USD 30,000.00</h4>
                    </div>             
              
                <div className="">
                  <div>
                  <BsCaretDownFill/>
                  <p className="text-xs font-normal">Expenses</p>
                  </div>            
                  <h4 className="font-bold">USD 20,000.00</h4>
                </div>
              </div> */}
              <div className="flex justify-between items-center gap-10 ml-1"> 
                <div >
                  <div className="flex items-center justify-center">
                  <BsFillCaretUpFill />
                    <p className="text-xs font-normal mr-24">Income</p>
                  </div>
                  <h1 className="font-semibold">USD 30,000</h1>
              </div>
              <div className="w-0 h-14 border border-red-500"></div>
                <div>
                <div className="flex items-center justify-start">
                  <BsCaretDownFill />
                        <p className="text-xs font-normal mr-20">Expenses</p>
                  </div>
                  <h1 className="font-semibold">USD 20,000</h1> 
              </div>

              </div>
            </div>

                {/* Total Savings */}
            <div className="content w-full h-48 p-6">
            <div className="flex flex-column justify-between">
                <h3 className="font-semibold sm:text-sm">Total savings</h3>
                <div className="flex flex-column justify-end ">
                  <div className="ml-11 mt-1 text-teal-500">
                <BsFillArrowUpCircleFill />
                  </div>
                <span  className="mr-10 text-teal-500">2.36%</span>
                </div>
              </div>
              <h1 className="text-3xl ml-[-4%] mt-1 font-semibold leading-9 p-4">USD 5,000.00</h1>
              <div className="flex flex-row  text-teal-500 p-6">
                <BsFillBarChartFill/>
              </div>
            </div>

          </div>

          
          {/* <div className="h-96 mb-3">
            <img style={{ width: '100%', height: '95%' }} src={graph} alt="graph" />
          </div> */}

          <div className="p-2">
          <TransactionChart/>
          </div>

          <div className="rounded-sm p-4 flex-1 flex items-center gap-4"> 
            <div className="goals h-40 p-4 mr-5 w-1/2">
            <div className="flex flex-column justify-between">
               <h3 className="font-black">Goals</h3>
                <div className="flex flex-column pl-10 justify-end ">
                  <div className="ml-11 mt-1 ">
                  <FaLessThan style={{ width: '1rem', height: '1rem' }} />
                  </div>
                  <div className="mr-10 mt-1 ">   
                    <FaGreaterThan style={{ width: '1rem', height: '1rem' }}/>
                  </div>
                </div>
              </div>
              <div>
              <p>Summer Vacation</p>
              </div>
              <div>
                <div>
                  <div className="flex flex-column justify-between p-3 ">
                    <div className="bg-white rounded-full flex items-center justify-center w-12 h-12">
                    <FaPlane className=" w-10 h-10" />
                    </div>
                    <div className="w-3/5">
                      <h2><b>62% reached</b></h2>
                      <ProgressBar percentage={80} />
                      <p>$1,485 out of $2,385</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spendingOverview flex flex-column p-4 h-40 w-1/2"> 
              <div className=" h-20">
                <h4 className="font-black">Spending Overview</h4>
                <div>
                <div className="w-3/2">
                  <div className="flex flex-column justify-between  items-center">
                      <ProgressBar percentage={68} />
                    <p>
                      <b className="ml-10">68%</b> 
                      </p>
                      <p>Groceries</p>
                   </div>
                  </div>
                  <div className="w-/2">
                  <div className="flex flex-column justify-between  items-center">
                      <ProgressBar percentage={20} />
                    <p>
                      <b className="ml-10">20%</b> 
                      </p>
                      <p>Withdrawal</p>
                   </div>
                  </div>
                  <div className="w-3/2">
                  <div className="flex flex-column justify-between  items-center">
                      <ProgressBar percentage={10} />
                    <p>
                      <b className="ml-10">10%</b> 
                      </p>
                      <p>Retail</p>
                   </div>
                  </div>
                  <div className="w-3/2">
                  <div className="flex flex-column justify-between  items-center">
                      <ProgressBar percentage={2} />
                    <p>
                      <b className="ml-10">2%</b> 
                      </p>
                      <p>Leisure</p>
                   </div>
                 </div>                  
                </div>
            </div>
            </div>
        
          </div>
        </div>


        <div className=" w-3/5 h-3/4">
          <div className="h-3/4">
              {/* <div className="flex flex-row w-44 pl-5">
              <p className="mr-3">All</p>
              <p className="mr-3">Expenses</p>
              <p>Income</p>
              </div> */}
            <TransactionsList userTransactions={[]} userDetails={undefined}/>
            </div>
            
          {/* <div className=" bg-gray-800  px-20 mt-7"> 
         <div className="flex w-full justify-between items-center mt-7 ">
        <h3 className="ml-7 font-bold text-sm text-white">Quick Transfer</h3>
                <div className="flex flex-column pl-10 text-white justify-between">
                  <div className="ml-11 mt-1 ">
                  <FaLessThan style={{ width: '1rem', height: '1rem' }} />
                  </div>
                  <div className="mr-10 mt-1">   
                    <FaGreaterThan style={{ width: '1rem', height: '1rem' }}/>
                  </div>
                </div>
        </div>
      <div className="flex mb-5" >
              <div className="mt-3 items-center text-center" >
                <div 
                  style={{
                    width: '60px', height: "60px",
                    backgroundColor: "white", borderRadius: "50%", display: "flex",
                    justifyContent:"center"
                  }}>
                <img style={{display: "flex",
                    justifySelf:"center", alignSelf : "center", width:"30px", height:"30px"}}  src={Add} alt="icon" /> 
              </div>
             
             <p className="text-xs mt-5">Add</p>
              <p className="text-xs">New</p>
         </div>
        <div className="mt-3 items-center text-center">
              <img className="h-14 w-14 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center ml-6" src={Maria} alt="icon" />
              <p className="text-xs mt-2">Maria</p>
               <p className="text-xs">Purple</p>
           </div>
          <div className="mt-3 items-center text-center">
             <img className="h-14 w-14 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center ml-6" src={Leonard} alt="icon" />
             <p className="text-xs mt-2">Leonard</p>
              <p className="text-xs">Smith</p>
          </div>
          <div className="mt-3 items-center text-center">
              <img className="h-14 w-14 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center ml-6" src={Oscar} alt="icon" />
             <p className="text-xs mt-2">Oscar</p>
              <p className="text-xs">Wild</p>
               </div>
             <div className="mt-3 items-center text-center">
               <img className="h-14 w-14 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center ml-6" src={Karen} alt="icon" />
               <p className="text-xs mt-2">Karen</p>
              <p className="text-xs">Potter</p>
          </div>
       </div>
            </div> */}

<div className="bg-gray-800 px-10 mt-7">
        <div className="flex w-full justify-between items-center mt-7">
              <h3 className="ml-4 font-white text-sm">Quick Transfer</h3>
              <div className="flex flex-column pl-10 justify-end ">
                  <div className="ml-11 mt-1 ">
                  <FaLessThan style={{ width: '1rem', height: '1rem' }} />
                  </div>
                  <div className="mr-10 mt-1 ">   
                    <FaGreaterThan style={{ width: '1rem', height: '1rem' }}/>
                  </div>
                </div>
        </div>
        <div className="flex mb-5 justify-evenly p-2" >
            <div className="mt-3 items-center text-center" >
                <img className="h-12 w-12 rounded-full bg-white bg-cover bg-no-repeat bg-center ml-6" src={Add} alt="icon" />
                <p className="text-xs mt-2 text-white">Add</p>
                <p className="text-xs text-white">New</p>
            </div>
            <div className="mt-3 items-center text-center">
                <img className="h-12 w-12 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center ml-6" src={Maria} alt="icon" />
                <p className="text-xs mt-2 text-white">Maria</p>
                <p className="text-xs text-white">Purple</p>
            </div>
            <div className="mt-3 items-center text-center">
                <img className="h-12 w-12 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center ml-6" src={Leonard} alt="icon" />
                <p className="text-xs mt-2 text-white">Leonard</p>
                <p className="text-xs text-white">Smith</p>
            </div>
            <div className="mt-3 items-center text-center">
                <img className="h-12 w-12 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center ml-6" src={Oscar} alt="icon" />
                <p className="text-xs mt-2 text-white">Oscar</p>
                <p className="text-xs text-white">Wild</p>
              </div>
              <div className="mt-3 items-center text-center">
                <img className="h-12 w-12 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center ml-6" src={Karen} alt="icon" />
                <p className="text-xs mt-2 text-white">Karen</p>
                <p className="text-xs text-white">Potter</p>
            </div>
        </div>
        
        </div>
        </div>
        
      </div>
    </>
  )
}

export default DashboardHome
