// import invest from "./Investment.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
// // import { FaBeer } from "react-icons/fa";
// ("use client");

// import { Table } from "flowbite-react";
// import { TbCurrencyNaira } from "react-icons/tb";
// import { FaCoins } from "react-icons/fa";
// import { GiAnticlockwiseRotation } from "react-icons/gi";

// // import { useReactTable } from '@tanstack/react-table'

// const Investment = () => {
//   const ror = "+4.75%";
//   const ti = "#10,000";
//   const noi = "1600";

//   return (
//     <>
//       <div>
//         <h3>Investment</h3>
//         <div className=" px-[5%] flex justify-between my-[5%]">
//           <div className="bg-[#f8f9fa] w-[30%] flex justify-center py-[3%] rounded-md">
//             {/* <FontAwesomeIcon icon={faDollarSign} /> */}
//             <div className="bg-[#b5dcf2] w-[30px] h-[30px] rounded-[50%] flex items-center m-[10px]">
//               <TbCurrencyNaira />
//             </div>

//             <div className="w-[auto]">
//               <p>Total Invested</p>
//               <p>{ti}</p>
//             </div>
//           </div>
//           <div className="bg-[#f8f9fa] w-[30%] flex justify-center py-[3%] rounded-md">
//             {/* <FontAwesomeIcon icon={faDollarSign} /> */}
//             <div className="bg-[#c6b5f2] w-[30px] h-[30px] rounded-[50%] flex items-center m-[10px] ">
//               <FaCoins />
//             </div>

//             <div className="w-[auto]">
//               <p>No. of investments</p>
//               <p>{noi}</p>
//             </div>
//           </div>
//           <div className="bg-[#f8f9fa] w-[30%] flex justify-center py-[3%] rounded-md">
//             {/* <FontAwesomeIcon icon={faDollarSign} /> */}
//             <div className="bg-[#f5bfa6] w-[30px] h-[30px] rounded-[50%] flex items-center m-[10px] ">
//               <GiAnticlockwiseRotation />
//             </div>

//             <div className="w-[auto]">
//               <p>Rate of return</p>
//               <p>{ror}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className={invest.secondline}>
//         <p style={{ fontSize: 20 }}>Yearly total investment</p>

//         <p style={{ fontSize: 20 }}>Yearly total revenue</p>
//       </div>

//       <div className={invest.secondinv}>
//         <div
//           className={invest.secondinvone}
//           // style={{ width: 500, height: 300, backgroundColor: "orange" }}
//         ></div>
//         <div
//           className={invest.secondinvtwo}
//           // style={{ width: 500, height: 300, backgroundColor: "orange" }}
//         ></div>
//       </div>

//       <div className={invest.thirdline}>
//         <p style={{ fontSize: 20 }}>My investment</p>

//         <p style={{ fontSize: 20, marginLeft: 130 }}>Trending stock</p>
//       </div>

//       <div className="flex justify-between px-[5%] h-[20vh] ">
//         <div className="w-[40%] pt-[2%]">
//           <Table striped>
//             <Table.Body className="divide-y ">
//               <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//                 <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//                   Apple Market
//                 </Table.Cell>
//                 <Table.Cell>$200</Table.Cell>
//                 <Table.Cell>-23%</Table.Cell>
//               </Table.Row>
//               <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//                 <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//                   <p>Greenery</p>
//                 </Table.Cell>
//                 <Table.Cell>$200</Table.Cell>
//                 <Table.Cell>0%</Table.Cell>
//               </Table.Row>
//               <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//                 <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//                   T Motors
//                 </Table.Cell>
//                 <Table.Cell>$200</Table.Cell>
//                 <Table.Cell>+16</Table.Cell>
//               </Table.Row>
//               <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//                 <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//                   T Motors
//                 </Table.Cell>
//                 <Table.Cell>$200</Table.Cell>
//                 <Table.Cell>+16</Table.Cell>
//               </Table.Row>
//               <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//                 <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//                   T Motors
//                 </Table.Cell>
//                 <Table.Cell>$200</Table.Cell>
//                 <Table.Cell>+16</Table.Cell>
//               </Table.Row>
//             </Table.Body>
//           </Table>
//         </div>
//         <div className="w-[40%]">
//           <Table className="bg-[#000] text-[#fff]">
//             <Table.Body>
//               <Table.Cell>Name</Table.Cell>
//               <Table.Cell>Price</Table.Cell>
//               <Table.Cell>Return</Table.Cell>
//             </Table.Body>
//             <Table.Body>
//               <Table.Row>
//                 <Table.Cell>Coinspace</Table.Cell>
//                 <Table.Cell>$100</Table.Cell>
//                 <Table.Cell>{"+10%"}</Table.Cell>
//               </Table.Row>
//               <Table.Row>
//                 <Table.Cell>
//                   <p>DocSign</p>
//                 </Table.Cell>
//                 <Table.Cell>$100</Table.Cell>
//                 <Table.Cell>{"-8%"}</Table.Cell>
//               </Table.Row>
//               <Table.Row>
//                 <Table.Cell>Target & Co.</Table.Cell>
//                 <Table.Cell>$100</Table.Cell>
//                 <Table.Cell>{"+10%"}</Table.Cell>
//               </Table.Row>
//               <Table.Row>
//                 <Table.Cell>HNL Bank</Table.Cell>
//                 <Table.Cell>$100</Table.Cell>
//                 <Table.Cell>{"+10%"}</Table.Cell>
//               </Table.Row>
//               <Table.Row>
//                 <Table.Cell>Average Motors</Table.Cell>
//                 <Table.Cell>$100</Table.Cell>
//                 <Table.Cell>{"0%"}</Table.Cell>
//               </Table.Row>
//             </Table.Body>
//           </Table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Investment;
