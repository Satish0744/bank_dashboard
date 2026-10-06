import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, AreaChart, Area 
} from 'recharts';
import { 
  ArrowRight, Send, User, Wallet, ChevronRight 
} from 'lucide-react';

// --- CUSTOM SIM CARD ICON ---
const SimCardIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4 4h16v16H4z" />
    <path d="M4 8h16" />
    <path d="M8 4v4" />
    <path d="M12 4v4" />
    <path d="M16 4v4" />
    <rect x="6" y="12" width="4" height="4" rx="1" />
    <rect x="14" y="12" width="4" height="4" rx="1" />
  </svg>
);

// --- MOCK DATA ---

const weeklyActivityData = [
  { name: 'Sat', deposit: 450, withdraw: 230 },
  { name: 'Sun', deposit: 350, withdraw: 120 },
  { name: 'Mon', deposit: 320, withdraw: 250 },
  { name: 'Tue', deposit: 450, withdraw: 350 },
  { name: 'Wed', deposit: 150, withdraw: 220 },
  { name: 'Thu', deposit: 390, withdraw: 220 },
  { name: 'Fri', deposit: 390, withdraw: 320 },
];

const expenseData = [
  { name: 'Others', value: 35, color: '#2563eb' },
  { name: 'Bill Expense', value: 15, color: '#f97316' },
  { name: 'Investment', value: 20, color: '#ec4899' },
  { name: 'Entertainment', value: 30, color: '#1e3a8a' },
];

const balanceHistoryData = [
  { name: 'Jul', balance: 200 },
  { name: 'Aug', balance: 350 },
  { name: 'Sep', balance: 420 },
  { name: 'Oct', balance: 780 },
  { name: 'Nov', balance: 550 },
  { name: 'Dec', balance: 650 },
  { name: 'Jan', balance: 600 },
];

const recentTransactions = [
  { id: 1, title: 'Deposit from my Card', date: '28 January 2021', amount: '-$850', icon: <Wallet size={14} />, bg: 'bg-[#fef3c7]', color: 'text-[#d97706]', amountColor: 'text-[#ef4444]' },
  { id: 2, title: 'Deposit Paypal', date: '25 January 2021', amount: '+$2,500', icon: <Wallet size={14} />, bg: 'bg-[#e0f2fe]', color: 'text-[#0284c7]', amountColor: 'text-[#22c55e]' },
  { id: 3, title: 'Jemi Wilson', date: '21 January 2021', amount: '+$5,400', icon: <User size={14} />, bg: 'bg-[#ccfbf1]', color: 'text-[#0f766e]', amountColor: 'text-[#22c55e]' },
];

const quickTransferContacts = [
  { id: 1, name: 'Livia Bator', role: 'CEO', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
  { id: 2, name: 'Randy Press', role: 'Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
  { id: 3, name: 'Workman', role: 'Designer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' },
];

// --- CUSTOM LABEL FOR PIE CHART ---
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor="middle" 
      dominantBaseline="central" 
      fontSize={12} 
      fontWeight="bold"
    >
      <tspan x={x} dy="-0.6em">{(percent * 100).toFixed(0)}%</tspan>
      <tspan x={x} dy="1.2em">{name}</tspan>
    </text>
  );
};

// --- REUSABLE COMPONENTS ---

const CreditCard = ({ theme }) => {
  const isBlue = theme === 'blue';
  return (
    <div className={`rounded-2xl p-4 shadow-sm border ${isBlue ? 'bg-[#1e3a8a] text-white border-[#1e3a8a]' : 'bg-white text-[#1d1d1f] border-gray-200'} hover:shadow-md transition-all duration-300`}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className={`text-[11px] ${isBlue ? 'text-gray-300' : 'text-gray-500'}`}>Balance</p>
          <p className="text-[18px] md:text-[20px] font-semibold">$5,756</p>
        </div>
        <SimCardIcon size={20} className={isBlue ? 'text-gray-200' : 'text-gray-400'} />
      </div>
      
      <div className="flex justify-between items-end mb-3">
        <div>
          <p className={`text-[9px] ${isBlue ? 'text-gray-300' : 'text-gray-400'} mb-0.5`}>CARD HOLDER</p>
          <p className="text-[12px] md:text-[13px] font-medium">Eddy Cusuma</p>
        </div>
        <div className="text-right">
          <p className={`text-[9px] ${isBlue ? 'text-gray-300' : 'text-gray-400'} mb-0.5`}>VALID THRU</p>
          <p className="text-[12px] md:text-[13px] font-medium">12/22</p>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <p className="text-[14px] md:text-[16px] font-medium tracking-wider">3778 **** **** 1234</p>
        <div className="flex -space-x-2">
          <div className={`w-5 h-5 rounded-full ${isBlue ? 'bg-white opacity-80' : 'bg-gray-300'}`}></div>
          <div className={`w-5 h-5 rounded-full ${isBlue ? 'bg-white opacity-60' : 'bg-gray-400'}`}></div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] p-4 md:p-2 font-sans">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* --- ROW 1: MY CARDS & RECENT TRANSACTION --- */}
        
        <div className="lg:col-span-2 flex flex-col">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-[16px] md:text-[18px] font-semibold text-[#1d1d1f]">My Cards</h2>
            <a href="#" className="text-[#2563eb] text-[13px] font-medium hover:underline">See All</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CreditCard theme="blue" />
            <CreditCard theme="white" />
          </div>
        </div>

        <div className="lg:col-span-1 flex flex-col">
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#1d1d1f] mb-3">Recent Transaction</h2>
          <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex-1 flex flex-col justify-center gap-1">
            {recentTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-1.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${tx.bg} ${tx.color}`}>
                    {tx.icon}
                  </div>
                  <div>
                    <p className="text-[12px] md:text-[13px] font-semibold text-[#1d1d1f]">{tx.title}</p>
                    <p className="text-[10px] md:text-[11px] text-gray-500">{tx.date}</p>
                  </div>
                </div>
                <p className={`text-[12px] md:text-[13px] font-semibold ${tx.amountColor}`}>{tx.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- ROW 2: WEEKLY ACTIVITY & EXPENSE STATISTICS --- */}

        {/* Weekly Activity (Spans 2 columns) */}
        <div className="lg:col-span-2 flex flex-col">
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#1d1d1f] mb-4">Weekly Activity</h2>
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 h-full flex flex-col">
            <div className="flex justify-end gap-6 mb-6 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#1e3a8a]"></div>
                <span className="text-[12px] text-gray-600 font-medium">Deposit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#14b8a6]"></div>
                <span className="text-[12px] text-gray-600 font-medium">Withdraw</span>
              </div>
            </div>
            <div className="flex-1 w-full min-h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyActivityData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                  <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="deposit" fill="#1e3a8a" radius={[4, 4, 0, 0]} barSize={12} />
                  <Bar dataKey="withdraw" fill="#14b8a6" radius={[4, 4, 0, 0]} barSize={12} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Expense Statistics (Spans 1 column) */}
        <div className="lg:col-span-1 flex flex-col">
          <h2 className="text-[12px] md:text-[16px] font-semibold text-[#1d1d1f] mb-4">Expense Statistics</h2>
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 h-full flex flex-col items-center justify-center">
            <div className="flex-1 w-full min-h-[320px] relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseData}
                    cx="50%"
                    cy="50%"
                    outerRadius={115}
                    innerRadius={0}   
                    dataKey="value"
                    stroke="none"
                    paddingAngle={8} 
                    label={renderCustomizedLabel} 
                    labelLine={false}
                  >
                    {expenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* --- ROW 3: QUICK TRANSFER & BALANCE HISTORY --- */}
        <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* Quick Transfer (40% = 2/5 columns) */}
          <div className="lg:col-span-2 flex flex-col">
            <h2 className="text-[16px] md:text-[18px] font-semibold text-[#1d1d1f] mb-4">Quick Transfer</h2>
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 flex-1 flex flex-col justify-between gap-6">
              
              <div className="flex items-center justify-between gap-2">
                <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
                  {quickTransferContacts.map((contact) => (
                    <div key={contact.id} className="flex flex-col items-center min-w-[70px] cursor-pointer group">
                      <div className="w-12 h-12 rounded-full overflow-hidden mb-2 border-2 border-transparent group-hover:border-[#2563eb] transition-all">
                        <img src={contact.img} alt={contact.name} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-[12px] font-semibold text-[#1d1d1f] text-center">{contact.name}</p>
                      <p className="text-[10px] text-gray-500 text-center">{contact.role}</p>
                    </div>
                  ))}
                </div>
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors shrink-0">
                  <ChevronRight size={16} className="text-gray-600" />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[13px] text-gray-500 font-medium whitespace-nowrap">Write Amount</span>
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    placeholder="525.50" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 pl-6 pr-24 text-[14px] focus:outline-none focus:border-[#2563eb]"
                  />
                  <button className="absolute right-1 top-1 bottom-1 bg-[#1e3a8a] text-white px-5 rounded-full text-[13px] font-medium flex items-center gap-2 hover:bg-[#1d4ed8] transition-colors">
                    Send
                    <Send size={14} />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Balance History (60% = 3/5 columns) */}
          <div className="lg:col-span-3 flex flex-col">
            <h2 className="text-[16px] md:text-[18px] font-semibold text-[#1d1d1f] mb-4">Balance History</h2>
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 flex-1 flex flex-col">
              <div className="flex-1 w-full min-h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={balanceHistoryData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                    <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="balance" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorBalance)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;