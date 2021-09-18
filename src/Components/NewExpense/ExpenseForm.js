import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({onSaveExpenseData}) => {
  const [entreredTitle, setEnteredTitle] = useState("");
  const [entreredAmount, setEnteredAmount] = useState("");
  const [entreredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //     entreredTitle="",
  //     entreredAmount="",
  //     entreredDate=""
  // });
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log("55442");
    //        ...userInput,
    //        entreredTitle: event.target.value
    //    })
    // setUserInput((prevState) => {
    //     return {...prevState, entreredTitle: event.target.value}
    // })
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //     return {...prevState, entreredAmount: event.target.value}
    // })
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //  setUserInput((prevState) => {
    //     return {...prevState, entreredDate: event.target.value}
    // })
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: entreredTitle,
      amount: entreredAmount,
      date: new Date(entreredDate),
    };
    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="00.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
