import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Sat', deposit: 450, withdraw: 230 },
  { name: 'Sun', deposit: 350, withdraw: 120 },
  { name: 'Mon', deposit: 320, withdraw: 260 },
  { name: 'Tue', deposit: 480, withdraw: 370 },
  { name: 'Wed', deposit: 150, withdraw: 230 },
  { name: 'Thu', deposit: 380, withdraw: 230 },
  { name: 'Fri', deposit: 400, withdraw: 320 },
];

const WeeklyActivity = () => {
  return (
    <div className="flex-[2] bg-white p-6 rounded-3xl shadow-sm">
      <h3 className="text-xl font-semibold text-darkBlue mb-6">Weekly Activity</h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={8}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 12 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 12 }} />
            <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
            <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
            <Bar dataKey="deposit" name="Deposit" fill="#396AFF" radius={[10, 10, 10, 10]} barSize={12} />
            <Bar dataKey="withdraw" name="Withdraw" fill="#232323" radius={[10, 10, 10, 10]} barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyActivity;