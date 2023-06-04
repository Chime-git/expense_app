import './css/ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(prop) {

    return (
        <div className='expense-item'>
            {/*
        With this would be wrong
        <div>{this.prop.date.toISOString()}</div>
        */}
            <ExpenseDate date={prop.date}/>
            <div className='expense-item__description'>
                <h2 className='expense-item__h2'>{prop.title}</h2>
                <div className='expense-item__price'>${prop.amount}</div>
            </div>

        </div>
    );
}

export default ExpenseItem;
