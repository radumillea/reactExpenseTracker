//form where users can enter their expense data;

import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [toggle, setToggle] = useState(0);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), //could be better
    };
    console.log("In NewExpense.js");
    console.log(expenseData);

    props.onAddExpense(expenseData);
    toggleNewExpenseFormHandler()
  };

  const toggleNewExpenseFormHandler = (event) => {
    if (toggle === 0) {
      setToggle(1);
    } else {
      setToggle(0);
    }
  };

  if (toggle === 0) {
    return (
      <div className="new-expense">
        <button onClick={toggleNewExpenseFormHandler}> Add new Expense </button>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm
          onCancelSaveExpenseData={toggleNewExpenseFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        ></ExpenseForm>
      </div>
    );
  }
};

export default NewExpense;
