import React, { useState } from 'react';
import { FiPlus, FiArrowDownLeft } from 'react-icons/fi';
import { FaApple, FaMusic, FaCloud } from 'react-icons/fa';

const initialTransactions = [
  { id: 1, title: 'MacBook Pro M3', date: '24 January 2024', amount: '-$2,499', type: 'expense', icon: <FaApple />, bg: 'bg-yellow-100', color: 'text-yellow-600' },
  { id: 2, title: 'iCloud+ 2TB', date: '23 January 2024', amount: '-$9.99', type: 'expense', icon: <FaCloud />, bg: 'bg-blue-100', color: 'text-blue-600' },
  { id: 3, title: 'Apple Music', date: '22 January 2024', amount: '-$10.99', type: 'expense', icon: <FaMusic />, bg: 'bg-red-100', color: 'text-red-600' },
  { id: 4, title: 'App Store Payout', date: '21 January 2024', amount: '+$1,250', type: 'income', icon: <FiArrowDownLeft />, bg: 'bg-green-100', color: 'text-green-600' },
];

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState(initialTransactions);

  const addTransaction = () => {
    const newTx = {
      id: transactions.length + 1,
      title: 'Apple TV+',
      date: '25 January 2024',
      amount: '-$6.99',
      type: 'expense',
      icon: <FaApple />,
      bg: 'bg-purple-100',
      color: 'text-purple-600',
    };
    setTransactions([newTx, ...transactions]);
  };

  return (
    <div className="flex-1 bg-white p-6 rounded-3xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-darkBlue">Recent Transaction</h3>
        <button onClick={addTransaction} className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
          <FiPlus /> Add
        </button>
      </div>
      <div className="space-y-4">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-xl transition-colors">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${tx.bg} ${tx.color}`}>
                {tx.icon}
              </div>
              <div>
                <p className="font-medium text-darkBlue text-sm">{tx.title}</p>
                <p className="text-xs text-gray-400">{tx.date}</p>
              </div>
            </div>
            <p className={`font-semibold text-sm ${tx.type === 'income' ? 'text-green-500' : 'text-darkBlue'}`}>
              {tx.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;