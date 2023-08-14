
// import graph from "../../assets/graph.png"
import ProgressBar from './ProgressBar';
import {
  BsFillArrowUpCircleFill, 
  BsFillCaretUpFill,
  BsCaretDownFill,
} from "react-icons/bs"
import {FaGreaterThan, FaLessThan, FaPlane} from 'react-icons/fa'
import "../../../App.css";
import "./DashboardHome.css";




const DashboardHome = () => {
  

  return (
    <>
      <div className="flex flex-row w-full h-full ml-[4%]">
        <div className="flex flex-col p-10">
          <div className="  flex flex-row mb-5">
            <div className="content w-full h-48 p-4 mr-5">
              <div className="flex flex-column justify-between">
                <h3>Total balance</h3>
                <div className="flex flex-column justify-end ">
                  <div className="ml-11 mt-1 text-teal-500">
                <BsFillArrowUpCircleFill />
                  </div>
                <p className="mr-10 text-teal-500" >2.36%</p>
                </div>
              </div>
              <h1 className="font-bold m-2 text-3xl leading-9 p-2">USD 10,000.00</h1>
              <div className="flex flex-row">
                <div className="">
                  <div>
                    <div className="flex flex-column  ">
                    <div className="ml-11 mt-1 text-teal-500">
                        <BsFillCaretUpFill />
                    </div>
                    <p className="text-xs font-normal">Income</p>
                    </div>
                    <h4 className="font-bold">USD 30,000.00</h4>
                  </div>
                </div>
                <div className="">
                  <BsCaretDownFill/>
                  <p className="text-xs font-normal">Expenses</p>
                  <h4 className="font-bold">USD 30,000.00</h4>
                </div>
              </div>
            </div>

            <div className="content w-full h-48 p-4 ">
            <div className="flex flex-column justify-between">
                <h3>Total savings</h3>
                <div className="flex flex-column justify-end ">
                  <div className="ml-11 mt-1 text-teal-500">
                <BsFillArrowUpCircleFill />
                  </div>
                <p  className="mr-10 text-teal-500">2.36%</p>
                </div>
              </div>
              <h1 className="font-bold m-2 text-2xl leading-9 p-2">USD 5,000.00</h1>
              <div className="flex flex-row">
              </div>
            </div>
          </div>
          <div className="h-96 mb-2">
            <img src={graph} alt="graph" />
          </div>
          <div className="flex flex-row"> 
            <div className="goals h-40 p-4 mr-5 w-1/2">
            <div className="flex flex-column justify-between">
               <h3 className="font-black ">Goals</h3>
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
        <div className=" w-3/5">
          <div className="flex flex-row  p-5 pr-10 " >
            <h4 className="text-xl font-medium leading-7">Transactions</h4>
            <p className="text-end"> View all</p>
          </div> 
            <div className="flex flex-row w-44 pl-5">
              <p className="mr-3">All</p>
              <p className="mr-3">Expenses</p>
              <p>Income</p>
          </div>
          <div className="h-1/4">
            {/* Here we would be adding the component coming from the transactions */}
            {/* <transaction /> */}
          </div>
          <div>
            beneficiary
          </div>
        </div>
        
      </div>
    </>
  )
}

export default DashboardHome



