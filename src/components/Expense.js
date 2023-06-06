import './css/Expense.css';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import NewExpense from "./newExpense/NewExpense";

export default function Expense(props) {

    const [year, setYear]  = useState('2020');

    const onPrintSelectedYear = (year1) => {
        setYear(year1);
    };
    const expenses = props.expenses.filter(expense =>
        year == expense.date.getFullYear()
    );
    let expenseShow = <p>No expenses this year!</p>
    if (expenses.length > 0) {
        expenseShow =
            expenses.map((item) => <ExpenseItem key={Math.random()} title={item.title} amount={item.amount}
                                                date={item.date}/>);
    }

    return (
        <div className='Expense.expense'>
            <NewExpense/>
            <ExpensesFilter onSelectedYear={onPrintSelectedYear}></ExpensesFilter>
            {expenseShow}
        </div>

    );

}