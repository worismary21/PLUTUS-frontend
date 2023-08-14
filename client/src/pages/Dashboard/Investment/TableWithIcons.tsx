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
//     returnValue: 12000,
//     logoUrl: "https://example.com/logo1.png",
//   },
//   {
//     company: "Company B",
//     investmentValue: 15000,
//     returnValue: 18000,
//     logoUrl: "https://example.com/logo2.png",
//   },
//   {
//     company: "Company C",
//     investmentValue: 20000,
//     returnValue: 22000,
//     logoUrl: "https://example.com/logo3.png",
//   },
//   {
//     company: "Company D",
//     investmentValue: 8000,
//     returnValue: 9000,
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
//             <th className="px-4 py-2">Logo</th>
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
//               <td className="px-4 py-2">{item.company}</td>
//               <td className="px-4 py-2">
//                 <img
//                   src={item.logoUrl}
//                   alt={`${item.company} Logo`}
//                   className="w-10 h-10"
//                 />
//               </td>
//               <td className="px-4 py-2">${item.investmentValue.toFixed(2)}</td>
//               <td className="px-4 py-2">${item.returnValue.toFixed(2)}</td>
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
    returnValue: 12000,
    logoUrl: "https://example.com/logo1.png",
  },
  {
    company: "Company B",
    investmentValue: 15000,
    returnValue: 18000,
    logoUrl: "https://example.com/logo2.png",
  },
  {
    company: "Company C",
    investmentValue: 20000,
    returnValue: 22000,
    logoUrl: "https://example.com/logo3.png",
  },
  {
    company: "Company D",
    investmentValue: 8000,
    returnValue: 9000,
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
              <td className="px-4 py-2">${item.returnValue.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentTable;
