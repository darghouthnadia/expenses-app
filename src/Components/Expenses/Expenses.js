import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({items}) => {
  console.log(items);
  return (
    <Card className="expenses">
      {items?.map(({id, title, date, amount}) => 
        <ExpenseItem
        key={id}
        title={title}
        amount={amount}
        date={date}
      />
      )}
    </Card>
  );
}

export default Expenses;