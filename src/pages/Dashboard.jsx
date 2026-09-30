import React from 'react';
import { FaApple } from 'react-icons/fa';
import { FiPlus, FiSend, FiArrowDownLeft } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

// Mock Data
const weeklyData = [
  { name: 'Sat', deposit: 450, withdraw: 230 }, { name: 'Sun', deposit: 350, withdraw: 120 },
  { name: 'Mon', deposit: 320, withdraw: 260 }, { name: 'Tue', deposit: 480, withdraw: 370 },
  { name: 'Wed', deposit: 150, withdraw: 230 }, { name: 'Thu', deposit: 380, withdraw: 230 },
  { name: 'Fri', deposit: 400, withdraw: 320 },
];
const expenseData = [
  { name: 'Entertainment', value: 30, color: '#343C6A' }, { name: 'Bill Expense', value: 15, color: '#FC7900' },
  { name: 'Others', value: 35, color: '#396AFF' }, { name: 'Investment', value: 20, color: '#FA00FF' },
];
const balanceData = [
  { name: 'Jul', balance: 200 }, { name: 'Aug', balance: 400 }, { name: 'Sep', balance: 300 },
  { name: 'Oct', balance: 700 }, { name: 'Nov', balance: 450 }, { name: 'Dec', balance: 600 }, { name: 'Jan', balance: 800 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Top Row */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* My Cards - CHANGED TO flex-[2] TO MATCH WEEKLY ACTIVITY */}
        <div className="flex-[2]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-darkBlue">My Cards</h3>
            <button className="text-primary text-sm font-medium hover:underline">See All</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-6 rounded-3xl shadow-lg relative overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="flex justify-between items-start mb-6">
                <div><p className="text-xs text-blue-200">Balance</p><h4 className="text-2xl font-bold">$15,756</h4></div>
                <FaApple className="text-3xl opacity-80" />
              </div>
              <div className="flex gap-8 mb-6">
                <div><p className="text-[10px] text-blue-200">CARD HOLDER</p><p className="text-sm font-medium">Eddy Cusuma</p></div>
                <div><p className="text-[10px] text-blue-200">VALID THRU</p><p className="text-sm font-medium">12/26</p></div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg tracking-widest font-mono">3778 **** 1234</p>
                <div className="flex"><div className="w-8 h-8 bg-white/20 rounded-full"></div><div className="w-8 h-8 bg-white/40 rounded-full -ml-3"></div></div>
              </div>
            </div>
            <div className="bg-white text-darkBlue p-6 rounded-3xl shadow-lg border border-gray-100 transition-transform hover:scale-[1.02]">
              <div className="flex justify-between items-start mb-6">
                <div><p className="text-xs text-gray-400">Balance</p><h4 className="text-2xl font-bold">$5,756</h4></div>
                <FaApple className="text-3xl text-gray-300" />
              </div>
              <div className="flex gap-8 mb-6">
                <div><p className="text-[10px] text-gray-400">CARD HOLDER</p><p className="text-sm font-medium">Eddy Cusuma</p></div>
                <div><p className="text-[10px] text-gray-400">VALID THRU</p><p className="text-sm font-medium">12/26</p></div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg tracking-widest font-mono text-gray-600">3778 **** 1234</p>
                <div className="flex"><div className="w-8 h-8 bg-gray-200 rounded-full"></div><div className="w-8 h-8 bg-gray-300 rounded-full -ml-3"></div></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Transactions - KEPT AS flex-1 TO MATCH EXPENSE STATISTICS */}
        <div className="flex-1 bg-white p-3 rounded-3xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-darkBlue">Recent Transaction</h3>
            <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1"><FiPlus /> Add</button>
          </div>
          <div className="">
            {[
              { title: 'MacBook Pro M3', date: '24 January 2024', amount: '-$2,499', icon: <FaApple />, bg: 'bg-yellow-100', color: 'text-yellow-600' },
              { title: 'iCloud+ 2TB', date: '23 January 2024', amount: '-$9.99', icon: <FaApple />, bg: 'bg-blue-100', color: 'text-blue-600' },
              { title: 'App Store Payout', date: '21 January 2024', amount: '+$1,250', icon: <FiArrowDownLeft />, bg: 'bg-green-100', color: 'text-green-600' },
            ].map((tx, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-xl transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${tx.bg} ${tx.color}`}>{tx.icon}</div>
                  <div><p className="font-medium text-darkBlue text-sm">{tx.title}</p><p className="text-xs text-gray-400">{tx.date}</p></div>
                </div>
                <p className={`font-semibold text-sm ${tx.amount.includes('+') ? 'text-green-500' : 'text-darkBlue'}`}>{tx.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Row */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-[2] bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="text-xl font-semibold text-darkBlue mb-6">Weekly Activity</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData} barGap={8}>
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
        <div className="flex-1 bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="text-xl font-semibold text-darkBlue mb-6">Expense Statistics</h3>
          <div className="h-64 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={expenseData} cx="50%" cy="50%" outerRadius={100} paddingAngle={2} dataKey="value">
                  {expenseData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="text-xl font-semibold text-darkBlue mb-6">Quick Transfer</h3>
          <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
            {[
              { name: 'Livia Bator', role: 'CEO', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
              { name: 'Randy Press', role: 'Director', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80' },
              { name: 'Workman', role: 'Designer', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80' },
            ].map((contact, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[80px] cursor-pointer group">
                <img src={contact.img} alt={contact.name} className="w-16 h-16 rounded-full object-cover mb-2 group-hover:ring-2 ring-primary transition-all" />
                <p className="text-xs font-semibold text-darkBlue">{contact.name}</p>
                <p className="text-[10px] text-gray-400">{contact.role}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500 whitespace-nowrap">Write Amount</p>
            <div className="flex-1 bg-lightBg rounded-full flex items-center px-4 py-2">
              <span className="text-gray-400 mr-2">$</span>
              <input type="number" placeholder="525.50" className="bg-transparent outline-none w-full text-darkBlue font-medium" />
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
              Send <FiSend />
            </button>
          </div>
        </div>
        <div className="flex-[2] bg-white p-6 rounded-3xl shadow-sm">
          <h3 className="text-xl font-semibold text-darkBlue mb-6">Balance History</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={balanceData}>
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
      </div>
    </div>
  );
};

export default Dashboard;