import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';

const NewExpense = ({onNewExpense}) => {
    const saveExpenseDataHandler = (entredExpenseData) => {
        const expenseData = {
            ...entredExpenseData,
            id:Math.random().toString()
        };
        onNewExpense(expenseData);
        console.log(expenseData);
    };
    return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>)
}

export default NewExpense;