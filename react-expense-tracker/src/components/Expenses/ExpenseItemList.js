import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function ExpenseItemList(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("From expenseItemList.js " + selectedYear);

    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  }); // if returns true is kept

  let expenseContent = <p> No expenses found </p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense, index) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        ></ExpenseFilter>
      <ExpensesChart expenses = {filteredExpenses} > </ExpensesChart>
        {expenseContent}
        {/* {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense, index) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            ></ExpenseItem>
          ))} */}

        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
        <ExpenseItem
          title={props.items[4].title}
          amount={props.items[4].amount}
          date={props.items[4].date}
        /> */}
      </Card>
    </div>
  );
}

export default ExpenseItemList;
