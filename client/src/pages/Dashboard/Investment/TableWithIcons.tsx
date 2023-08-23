/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { getInvestment } from "../../../redux/action";
import { useDispatch, useSelector } from "react-redux";

const InvestmentTable: React.FC = () => {
  const dispatch = useDispatch() as unknown as any;
  const investors = useSelector((state: any) => state.investment);
  console.log(investors.totalInvestedCapital);
  console.log(investors.totalInvestments);
  console.log(investors.data);

  useEffect(() => {
    dispatch(getInvestment());
  }, []);
  const result = investors.data;

  return (
    <div>
      <table className="w-full table-auto">
        <thead>
          <tr className="text-justify">
            <th className="px-4 py-2">Company</th>
            <th className="px-4 py-2">Investment Value</th>
            <th className="px-4 py-2">Rate Of Return</th>
          </tr>
        </thead>
        <tbody>
          {result?.map((item: any, index: number) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="px-4 py-2">
                <div className="flex items-center">
                  {/* <img
                    src={item.logoUrl}
                    alt={`${item.company} Logo`}
                    className="w-8 h-8 mr-2"
                  /> */}
                  {item?.companyName}
                </div>
              </td>
              {/* {console.log({ item, value: item.investedCapital })}
              {console.log({ item, value: item.rateOfReturn })} */}

              <td className="px-4 py-2">
                ${item?.investedCapital?.toFixed(2)}
              </td>
              <td
                className={`px-4 py-2 ${
                  item?.rateOfReturn < 0
                    ? "text-red-500"
                    : item?.rateOfReturn > 0
                    ? "text-green-500"
                    : "text-black"
                }`}
              >
                {item?.rateOfReturn?.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentTable;
