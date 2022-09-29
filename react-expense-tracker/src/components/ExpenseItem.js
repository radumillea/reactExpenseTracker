import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {
  // const expenseDate = new Date(2021,8,29);
  // const expenseTitle = 'Carwash';
  // const expenseAmount = 56.89;

  return (
    <div className="expense-item">
        <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
