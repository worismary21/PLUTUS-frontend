// import React from "react";

// interface InvestmentData {
//   company: string;
//   investmentValue: number;
//   returnValue: number;
//   logoUrl: string;
// }

// const data: InvestmentData[] = [
//   {
//     company: "Company A",
//     investmentValue: 10000,
//     returnValue: 4,
//     logoUrl: "https://example.com/logo1.png",
//   },
//   {
//     company: "Company B",
//     investmentValue: 15000,
//     returnValue: -3,
//     logoUrl: "https://example.com/logo2.png",
//   },
//   {
//     company: "Company C",
//     investmentValue: 20000,
//     returnValue: 6,
//     logoUrl: "https://example.com/logo3.png",
//   },
//   {
//     company: "Company D",
//     investmentValue: 8000,
//     returnValue: 3.3,
//     logoUrl: "https://example.com/logo4.png",
//   },
// ];

// const InvestmentTable: React.FC = () => {
//   return (
//     <div>
//       <table className="w-full table-auto">
//         <thead>
//           <tr className="text-justify">
//             <th className="px-4 py-2">Company</th>
//             <th className="px-4 py-2">Investment Value</th>
//             <th className="px-4 py-2">Return Value</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr
//               key={index}
//               className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
//             >
//               <td className="px-4 py-2">
//                 <div className="flex items-center">
//                   <img
//                     src={item.logoUrl}
//                     alt={`${item.company} Logo`}
//                     className="w-8 h-8 mr-2"
//                   />
//                   {item.company}
//                 </div>
//               </td>
//               <td className="px-4 py-2">${item.investmentValue.toFixed(2)}</td>
//               <td
//                 className={`px-4 py-2 ${
//                   item.returnValue < 0
//                     ? "text-red-500"
//                     : item.returnValue > 0
//                     ? "text-green-500"
//                     : "text-black"
//                 }`}
//               >
//                 ${item.returnValue.toFixed(2)}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default InvestmentTable;

import React from "react";

interface InvestmentData {
  company: string;
  investmentValue: number;
  returnValue: number;
  logoUrl: string;
}

const data: InvestmentData[] = [
  {
    company: "Company A",
    investmentValue: 10000,
    returnValue: 4,
    logoUrl: "https://example.com/logo1.png",
  },
  {
    company: "Company B",
    investmentValue: 15000,
    returnValue: -3,
    logoUrl: "https://example.com/logo2.png",
  },
  {
    company: "Company C",
    investmentValue: 20000,
    returnValue: 2.4,
    logoUrl: "https://example.com/logo3.png",
  },
  {
    company: "Company D",
    investmentValue: 8000,
    returnValue: 0,
    logoUrl: "https://example.com/logo4.png",
  },
];

const InvestmentTable: React.FC = () => {
  return (
    <div>
      <table className="w-full table-auto">
        <thead>
          <tr className="text-justify">
            <th className="px-4 py-2">Company</th>
            <th className="px-4 py-2">Investment Value</th>
            <th className="px-4 py-2">Return Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="px-4 py-2">
                <div className="flex items-center">
                  <img
                    src={item.logoUrl}
                    alt={`${item.company} Logo`}
                    className="w-8 h-8 mr-2"
                  />
                  {item.company}
                </div>
              </td>
              <td className="px-4 py-2">${item.investmentValue.toFixed(2)}</td>
              <td
                className={`px-4 py-2 ${
                  item.returnValue < 0
                    ? "text-red-500"
                    : item.returnValue > 0
                    ? "text-green-500"
                    : "text-black"
                }`}
              >
                {item.returnValue.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentTable;
