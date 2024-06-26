import React, {useState, useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
      if (text !== '') {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            date,
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }
  }

  const handleDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const fullDate = `${day}/${month}/${year}`;
    setDate(fullDate);
  }
    


  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button onClick={handleDate} className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
