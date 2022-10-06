import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  // const expenseDate = new Date(2021,8,29);
  // const expenseTitle = 'Carwash';
  // const expenseAmount = 56.89;

  const [title, setTitle] = useState(props.title); //returns array, first value is the value itself and second is a updating function;
  // array destructuring


  const clickHandler = () => {
    setTitle('Updated!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}> Change title </button>
    </Card>
  );
}

export default ExpenseItem;
