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

  const Idata = [
    { name: "2017", value: 3.0 },
    { name: "2018", value: 2.3 },
    { name: "2019", value: 1.9 },
    { name: "2020", value: 3.5 },
    { name: "2021", value: 3.5 },
    { name: "2022", value: 3.1 },
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
    { name: "2017", value: 0.8 },
    { name: "2018", value: 1.25 },
    { name: "2019", value: 1.9 },
    { name: "2020", value: 3.7 },
    { name: "2021", value: 3.1 },
    { name: "2022", value: 3.8 },
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
    <div className=" h-auto px-[5%] md:px-[0%] ml-[10%] md:ml-[0%]">
      <div>
        <h3>Investment</h3>
        <div className=" px-[5%] flex flex-col justify-between my-[5%] md:my-[0%] md:flex-row  ">
          <div className="bg-[#f8f9fa] md:w-[30%] flex justify-center py-[3%] rounded-md">
            <div className="bg-[#b5dcf2] w-[30px] h-[30px] rounded-[50%] flex items-center m-[10px]">
              <TbCurrencyNaira />
            </div>
            <div className="w-[auto]">
              <p>Total Invested</p>
              <p>{ti}</p>
            </div>
          </div>
          <div className="bg-[#f8f9fa] md:w-[30%] flex justify-center py-[3%] rounded-md my-[5%] md:my-[0%]">
            <div className="bg-[#c6b5f2] w-[30px] h-[30px] rounded-[50%] flex items-center m-[10px] ">
              <FaCoins />
            </div>

            <div className="w-[auto]">
              <p>No. of investments</p>
              <p>{noi}</p>
            </div>
          </div>
          <div className="bg-[#f8f9fa] md:w-[30%] flex justify-center py-[3%] rounded-md">
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

      <div className={invest.secondline}></div>

      <div className="flex flex-col px-[5%] md:flex-row justify-between w-[100%] overflow-x-scroll">
        <div>
          <p className="text-[23px]">Yearly total investment</p>
          <div className="w-[550px] bg-[#ebf3f9] my-[5%] md:my-[0%]">
            {renderInvBarChart}
            Graph 1
          </div>
        </div>

        <div>
          <p className="text-[23px]">Yearly total revenue</p>
          <div className="w-[550px] bg-[#dfd8f2] my-[5%] md:my-[0%]">
            {renderRevBarChart}
            Graph 2
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-[5%] h-[20vh] w-[100%] ">
        <div className="w-[50%] pt-[2%]">
          <p className="text-[23px]">My investment</p>
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
        <div className="w-[40%] pt-[30px]">
          <p className="text-[23px]">Trending stock</p>
          <Table className="bg-[#000] text-[#fff] pt-[70px]">
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
    </div>
  );
};

export default Investment;
