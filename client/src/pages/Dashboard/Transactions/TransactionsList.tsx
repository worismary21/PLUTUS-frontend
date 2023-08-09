
export interface transaction {
    user: string;
    userTotalBalance: number;
    otherUser: string;
    amount: number;
    type: string;
    date: Date;
    id: string;
}

interface Props {
    userTransactions: transaction[];
}

export default function TransactionsList({ userTransactions }: Props) {
    
    return (
      <>
        <h1 className="text-2xl text-left p-2">Transactions</h1>
        <input type="text" placeholder="Search" className="w-full p-2" />
      <ul className="list-none">
        <div className="flex justify-start">
            <h6 className="p-2">All</h6>
            <h6 className="p-2">Expenses</h6>
            <h6 className="p-2">Income</h6>
        </div>
        <div>
        {userTransactions.map((transaction) => (
          <li
            key={transaction.id}
            // className={
            //   selectedIndex === index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            // onClick={() => {
            //   setSelectedIndex(index);
            //   onSelectItem(item);
            // }}
          >
            <div className="flex p-2 justify-between">
            <div className="text-left">
            <h4 className="pb-1.5">{transaction.otherUser}</h4>
            <p className="text-xs text-slate-400">{transaction.type}</p>
            </div>
            <div className="text-right">
            <h4 className={transaction.amount > 0  ? "text-green-600 pb-1.5": "text-red-600 pb-1.5"}>{transaction.amount}</h4>
              <p className="text-xs text-slate-400">{transaction.userTotalBalance}</p>
            </div>
            </div>
          </li>
        ))}
        </div>
      </ul>
      </>
    );
  }