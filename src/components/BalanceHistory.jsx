import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jul', balance: 200 },
  { name: 'Aug', balance: 400 },
  { name: 'Sep', balance: 300 },
  { name: 'Oct', balance: 700 },
  { name: 'Nov', balance: 450 },
  { name: 'Dec', balance: 600 },
  { name: 'Jan', balance: 800 },
];

const BalanceHistory = () => {
  return (
    <div className="flex-[2] bg-white p-6 rounded-3xl shadow-sm">
      <h3 className="text-xl font-semibold text-darkBlue mb-6">Balance History</h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1814F3" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#1814F3" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 12 }} />
            <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            <Area type="monotone" dataKey="balance" stroke="#1814F3" strokeWidth={3} fillOpacity={1} fill="url(#colorBalance)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceHistory;