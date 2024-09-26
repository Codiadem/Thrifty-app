import React, { useState } from 'react';
import ExpenseList from './ExpenseList';
import AddTransaction from './AddTransaction';

const ExpenseTracker = () => {
const [transactions, setTransactions] = useState([
    { id: 1, text: 'Purchase of Phone Pouch', amount: -2000, date: '07/09/2023', time: '12:00:18' },
    { id: 2, text: 'Profit from cake', amount: 20000, date: '07/09/2023', time: '12:00:18' }
  ]);

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <div>
      {/* AddTransaction Component */}
      <AddTransaction setTransactions={setTransactions} />

      {/* ExpenseList with delete functionality */}
      <ExpenseList transactions={transactions} onDelete={deleteTransaction} />
    </div>
  );
};

export default ExpenseTracker;
