import ExpenseItemList from "./components/Expenses/ExpenseItemList";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  { title: "Car insurance", amount: 1, date: new Date(2020, 5, 15) },
  { title: "Car wash", amount: 1345, date: new Date(2020, 5, 10) },
  { title: "Car gas", amount: 3425, date: new Date(2022, 5, 4) },
  { title: "Car paint job", amount: 3435, date: new Date(2022, 5, 1) },
  { title: "Car taxes", amount: 3445, date: new Date(2022, 5, 2) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log('In app.js');
    // console.log(expense)
    // setExpenses([expense,...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      {/* <p>Site-ul meu web!</p> */}
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpenseItemList items={expenses} />
    </div>
  );
};

export default App;
