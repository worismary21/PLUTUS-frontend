import orange from "../../assets/orange.png"
import purple from "../../assets/purple.png"
import graph from "../../assets/graph.png"
import "../../App.css"

const DashboardHome = () => {


  return (
    <>
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-col">
          <div className="  flex flex-row">
            <div className="content w-full h-48 p-4 m-3 ">
              <h3>Total balance</h3>
              <h1 className="font-bold m-2 text-2xl leading-9 p-2">USD 10,000.00</h1>
              <div className="flex flex-row">
                <div className="">
                  <p>income</p>
                  <h4>USD 30,000.00</h4>
                </div>
                <div className="">
                  <p>expenses</p>
                  <h4>USD 30,000.00</h4>
                </div>
              </div>
            </div>

            <div className="content w-full h-48 p-4 m-3 ">
              <h3>Total savings</h3>
              <h1 className="font-bold m-2 text-2xl leading-9 p-2">USD 5,000.00</h1>
              <div className="flex flex-row">
              </div>
            </div>
          </div>
          <div className="h-80">
            <img src={graph} alt="graph" />
          </div>
          <div className="flex flex-row"> 
            <div className="h-20 w-1/2">
            <img src={purple} alt="graph" />
            </div>
            <div className="h-20 w-1/2"> 
            <img src={orange} alt="graph" />
            </div>
          </div>
        </div>
        <div className="flex flex-column w-3/5">
          <div>
            Transactions
          </div>
          <div>
            Beneficiary
          </div>

        </div>
        
      </div>
    </>
  )
}

export default DashboardHome