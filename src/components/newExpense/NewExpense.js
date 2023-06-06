import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
    const [isEditing, setIsEditing] = useState(true);

    const onEditingHandler = ()=>{
        setIsEditing(true);
    }

    const closeEditingHandler = ()=>{
        setIsEditing(false);
    }
  return (
    <div className='new-expense'>
        {!isEditing && <button onClick={onEditingHandler}> add new Form</button>}
        {isEditing && <ExpenseForm closeEidting={closeEditingHandler}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
