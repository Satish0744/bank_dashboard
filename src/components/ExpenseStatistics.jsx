import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Entertainment', value: 30, color: '#343C6A' },
  { name: 'Bill Expense', value: 15, color: '#FC7900' },
  { name: 'Others', value: 35, color: '#396AFF' },
  { name: 'Investment', value: 20, color: '#FA00FF' },
];

const ExpenseStatistics = () => {
  return (
    <div className="flex-1 bg-white p-6 rounded-3xl shadow-sm">
      <h3 className="text-xl font-semibold text-darkBlue mb-6">Expense Statistics</h3>
      <div className="h-64 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
          </PieChart>
        </ResponsiveContainer>
        {/* Custom Labels overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <p className="text-xs font-bold text-gray-500">Total</p>
            <p className="text-lg font-bold text-darkBlue">$1,250</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseStatistics;