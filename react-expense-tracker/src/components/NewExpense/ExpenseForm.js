import "./ExpenseForm.css";
import { useState } from "react";
//form for a date, title, and amount

///commented code with prevState should be used when the state depends on the previous state ;
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");


  
  // or using a single state and passing an object

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({

    //     ...userInput , //just copy the initial values and then
    //     enteredTitle: event.target.value
    //     //if the other properties are not saved here, they will be lost;

    // }) //problem , the state snapshot <<userInput>> could not be the last , the one that we want tu use;

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput, //just copy the initial values and then
    //   enteredAmount: event.target.value
    //   //if the other properties are not saved here, they will be lost;
    // });

    // setUserInput((prevState) => {
    //     return { ...prevState, enteredAmount: event.target.value };
    //   });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput, //just copy the initial values and then
    //   enteredDate: event.target.value
    //   //if the other properties are not saved here, they will be lost;
    // });

    // setUserInput((prevState) => {
    //     return { ...prevState, enteredDate: event.target.value };
    //   });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    // console.log(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add expense </button>
        <button type="button" onClick={props.onCancelSaveExpenseData}> Cancel </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
