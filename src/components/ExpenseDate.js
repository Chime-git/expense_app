import './css/ExpenseDate.css'
export  default function ExpenseDate(props){
    // please Google Js toLocalString official to search this method how to use ti
    let month = props.date.toLocaleString('en-US',{month:'long'});
    let day = props.date.toLocaleString('en-US',{day:'2-digit'});
    let year = props.date.getFullYear();
    return(
        <div className='ExpenseDate.expense-date'>
            <div className='ExpenseDate.expense-month'>{month}</div>
            <div className='ExpenseDate.expense-year'>{year}</div>
            <div className='ExpenseDate.expense-day'>{day}</div>

        </div>


    );
}