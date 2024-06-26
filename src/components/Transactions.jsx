import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const Transactions = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
    const transactionType = transaction.amount < 0 ? 'minus' : 'plus';
    const date = transaction.date;


  return (
    <li className={transactionType}>
      {transaction.text}<div className="date">{date}</div><span>{sign}${Math.abs(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  );
};

export default Transactions;
