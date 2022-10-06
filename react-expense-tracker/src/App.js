import ExpenseItemList from "./components/Expenses/ExpenseItemList";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    { title: "Car insurance", amount: 1, date: new Date(2022, 5, 15) },
    { title: "Car wash", amount: 1345, date: new Date(2022, 5, 10) },
    { title: "Car gas", amount: 3425, date: new Date(2022, 5, 4) },
    { title: "Car paint job", amount: 3435, date: new Date(2022, 5, 1) },
    { title: "Car taxes", amount: 3445, date: new Date(2022, 5, 2) },
  ];

  return (
    <div>
      <p>Site-ul meu web!</p>
      <NewExpense></NewExpense>
      <ExpenseItemList items={expenses} />
    </div>
  );
};

export default App;
