import invest from "./Investment.module.css";
("use client");

import { Table } from "flowbite-react";
import { TbCurrencyNaira } from "react-icons/tb";
import { FaCoins } from "react-icons/fa";
import { GiAnticlockwiseRotation } from "react-icons/gi";
// import Plot from "@observablehq/plot";
// import { useEffect, useRef, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Investment = () => {
  const ror = "+4.75%";
  const ti = "#10,000";
  const noi = "1600";

  // const data = [
  //   { Year: "2017", Users: "3" },
  //   { Year: "2018", Users: "2.3" },
  //   { Year: "2019", Users: "1.9" },
  //   { Year: "2020", Users: "3.5" },
  //   { Year: "2021", Users: "2.5" },
  //   { Year: "2022", Users: "3.1" },
  // ];
  // const YInvestment = () => {
  //   const plotRef = useRef();

  //   useEffect(() => {
  //     const barChart = Plot.plot({
  //       marks: [
  //         Plot.barY(data, {
  //           x: "Year",
  //           y: "Users",
  //         }),
  //       ],
  //       y: { grid: true },
  //       marginTop: 50,
  //       marginBottom: 50,
  //       marginLeft: 50,
  //     });
  //     plotRef.current.append(barChart);
  //     return () => barChart.remove();
  //   }, [data]);
  //   return <div ref={plotRef}></div>;
  // };

  const Idata = [
    { name: "Page A", value: "3.0" },
    { name: "Page B", value: 2.3 },
    { name: "Page C", value: 1.9 },
    { name: "Page D", value: 3.5 },
    { name: "Page E", value: 3.5 },
    { name: "Page F", value: 3.1 },
  ];

  const renderInvBarChart = (
    <BarChart width={550} height={200} data={Idata}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="value" fill="#b5dcf2" barSize={23} />
    </BarChart>
  );

  const Irevenue = [
    { name: "Page A", value: "3.0" },
    { name: "Page B", value: 2.3 },
    { name: "Page C", value: 1.9 },
    { name: "Page D", value: 3.5 },
    { name: "Page E", value: 3.5 },
    { name: "Page F", value: 3.1 },
  ];

  const renderRevBarChart = (
    <BarChart width={550} height={200} data={Irevenue}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="value" fill="#c6b5f2" barSize={23} />
    </BarChart>
  );

  return (
    <>
      <div>
        <h3>Investment</h3>
        <div className=" px-[5%] flex justify-between my-[5%] md:flex-row ">
          <div className="bg-[#f8f9fa] w-[30%] flex justify-center py-[3%] rounded-md">
            <div className="bg-[#b5dcf2] w-[30px] h-[30px] rounded-[50%] flex items-center m-[10px]">
              <TbCurrencyNaira />
            </div>
            <div className="w-[auto]">
              <p>Total Invested</p>
              <p>{ti}</p>
            </div>
          </div>
          <div className="bg-[#f8f9fa] w-[30%] flex justify-center py-[3%] rounded-md">
            <div className="bg-[#c6b5f2] w-[30px] h-[30px] rounded-[50%] flex items-center m-[10px] ">
              <FaCoins />
            </div>

            <div className="w-[auto]">
              <p>No. of investments</p>
              <p>{noi}</p>
            </div>
          </div>
          <div className="bg-[#f8f9fa] w-[30%] flex justify-center py-[3%] rounded-md">
            <div className="bg-[#f5bfa6] w-[30px] h-[30px] rounded-[50%] flex items-center m-[10px] ">
              <GiAnticlockwiseRotation />
            </div>

            <div className="w-[auto]">
              <p>Rate of return</p>
              <p>{ror}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={invest.secondline}>
        <p style={{ fontSize: 20 }}>Yearly total investment</p>

        <p style={{ fontSize: 20 }}>Yearly total revenue</p>
      </div>

      <div className={invest.secondinv}>
        <div className={invest.secondinvone}>{renderInvBarChart}</div>
        <div className={invest.secondinvtwo}>
          {renderRevBarChart}
          Graph 2
        </div>
      </div>

      <div className={invest.thirdline}>
        <p style={{ fontSize: 20 }}>My investment</p>

        <p style={{ fontSize: 20, marginLeft: 130 }}>Trending stock</p>
      </div>

      <div className="flex justify-between px-[5%] h-[20vh] ">
        <div className="w-[40%] pt-[2%]">
          <Table striped>
            <Table.Body className="divide-y ">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Apple Market
                </Table.Cell>
                <Table.Cell>$200</Table.Cell>
                <Table.Cell>-23%</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <p>Greenery</p>
                </Table.Cell>
                <Table.Cell>$200</Table.Cell>
                <Table.Cell>0%</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  T Motors
                </Table.Cell>
                <Table.Cell>$200</Table.Cell>
                <Table.Cell>+16</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  T Motors
                </Table.Cell>
                <Table.Cell>$200</Table.Cell>
                <Table.Cell>+16</Table.Cell>
              </Table.Row>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  T Motors
                </Table.Cell>
                <Table.Cell>$200</Table.Cell>
                <Table.Cell>+16</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
        <div className="w-[40%]">
          <Table className="bg-[#000] text-[#fff]">
            <Table.Body>
              <Table.Cell>Name</Table.Cell>
              <Table.Cell>Price</Table.Cell>
              <Table.Cell>Return</Table.Cell>
            </Table.Body>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Coinspace</Table.Cell>
                <Table.Cell>$100</Table.Cell>
                <Table.Cell>{"+10%"}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <p>DocSign</p>
                </Table.Cell>
                <Table.Cell>$100</Table.Cell>
                <Table.Cell>{"-8%"}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Target & Co.</Table.Cell>
                <Table.Cell>$100</Table.Cell>
                <Table.Cell>{"+10%"}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>HNL Bank</Table.Cell>
                <Table.Cell>$100</Table.Cell>
                <Table.Cell>{"+10%"}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Average Motors</Table.Cell>
                <Table.Cell>$100</Table.Cell>
                <Table.Cell>{"0%"}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Investment;

// import invest from "./Investment.module.css";
// import { Table } from "flowbite-react";
// import { TbCurrencyNaira } from "react-icons/tb";
// import { FaCoins } from "react-icons/fa";
// import { GiAnticlockwiseRotation } from "react-icons/gi";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

// const Investment = () => {
//   const ror = "+4.75%";
//   const ti = "#10,000";
//   const noi = "1600";

//   // Rest of your code...

//   return (
//     <>
//       <div>
//         <h3>Investment</h3>
//         <div className="px-[5%] flex flex-col md:flex-row justify-between my-[5%] md:flex-row justify-between">
//           <div className="bg-[#f8f9fa] w-full md:w-[30%] flex justify-center py-[3%] rounded-md mb-4 md:mb-0">
//             <div className="bg-[#b5dcf2] w-[30px] h-[30px] rounded-[50%] flex items-center m-[10px]">
//               <TbCurrencyNaira />
//             </div>
//             <div className="w-[auto]">
//               <p className="text-sm font-medium">Total Invested</p>
//               <p className="text-lg">{ti}</p>
//             </div>
//           </div>
//           <div className="bg-[#f8f9fa] w-full md:w-[30%] flex justify-center py-[3%] rounded-md mb-4 md:mb-0">
//             <div className="bg-[#c6b5f2] w-[30px] h-[30px] rounded-[50%] flex items-center m-[10px]">
//               <FaCoins />
//             </div>
//             <div className="w-[auto]">
//               <p className="text-sm font-medium">No. of investments</p>
//               <p className="text-lg">{noi}</p>
//             </div>
//           </div>
//           <div className="bg-[#f8f9fa] w-full md:w-[30%] flex justify-center py-[3%] rounded-md">
//             <div className="bg-[#f5bfa6] w-[30px] h-[30px] rounded-[50%] flex items-center m-[10px]">
//               <GiAnticlockwiseRotation />
//             </div>
//             <div className="w-[auto]">
//               <p className="text-sm font-medium">Rate of return</p>
//               <p className="text-lg">{ror}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Rest of your code... */}
//     </>
//   );
// };

// export default Investment;
