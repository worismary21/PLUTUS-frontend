import React from "react";

interface StockData {
  name: string;
  price: number;
  return: number;
}

interface TrendingStockProps {
  data: StockData[];
}

const TrendingStock: React.FC<TrendingStockProps> = ({ data }) => {
  return (
    <div className="bg-black p-4 rounded-md">
      <table className="w-full">
        <thead>
          <tr className="text-white text-justify ">
            <th className="p-2">Name</th>
            <th className="p-2 ">Price</th>
            <th className="p-2">Return</th>
          </tr>
        </thead>
        <tbody>
          {data.map((stock) => (
            <tr key={stock.name}>
              <td className="p-2 text-white">{stock.name}</td>
              <td className="p-2 text-white">{stock.price}</td>
              <td
                className={`p-2 ${
                  stock.return > 0
                    ? "text-green-500"
                    : stock.return < 0
                    ? "text-red-500"
                    : "text-white"
                }`}
              >
                {stock.return}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrendingStock;
