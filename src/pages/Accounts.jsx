import React from 'react';
import { 
  FaWallet, FaGamepad, FaUser 
} from 'react-icons/fa';
import { 
  FiTrendingUp, FiFileText, FiSave, FiShoppingBag, FiTool, FiUser 
} from 'react-icons/fi';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

// --- CUSTOM WIDE SIM CARD ICON ---
const SimCardIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 32 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="28" height="12" rx="2" />
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <path d="M24 2v4" />
    <rect x="8" y="8" width="4" height="3" rx="1" />
    <rect x="20" y="8" width="4" height="3" rx="1" />
  </svg>
);

// --- Mock Data for Debit & Credit Chart ---
const chartData = [
  { name: 'Sat', Debit: 300, Credit: 500 },
  { name: 'Sun', Debit: 200, Credit: 400 },
  { name: 'Mon', Debit: 150, Credit: 250 },
  { name: 'Tue', Debit: 450, Credit: 200 },
  { name: 'Wed', Debit: 300, Credit: 500 },
  { name: 'Thu', Debit: 350, Credit: 150 },
  { name: 'Fri', Debit: 400, Credit: 550 },
];

// --- Mock Data for Last Transactions ---
const lastTransactions = [
  { id: 1, title: 'Spotify Subscription', date: '25 Jan 2021', category: 'Shopping', card: '1234 ****', status: 'Pending', amount: '-$150', icon: <FiShoppingBag />, iconBg: 'bg-red-50 text-red-500', amountColor: 'text-red-500' },
  { id: 2, title: 'Mobile Service', date: '25 Jan 2021', category: 'Service', card: '1234 ****', status: 'Completed', amount: '-$340', icon: <FiTool />, iconBg: 'bg-blue-50 text-blue-500', amountColor: 'text-red-500' },
  { id: 3, title: 'Emily Wilson', date: '25 Jan 2021', category: 'Transfer', card: '1234 ****', status: 'Completed', amount: '+$780', icon: <FiUser />, iconBg: 'bg-pink-50 text-pink-500', amountColor: 'text-green-500' },
];

// --- Mock Data for Invoices Sent ---
// Replaced <FaApple /> with <SimCardIcon /> for the Apple Store entry
const invoicesSent = [
  { id: 1, name: 'Apple Store', time: '5h ago', amount: '$450', icon: <SimCardIcon className="w-6 h-3" />, bg: 'bg-green-50 text-green-500' },
  { id: 2, name: 'Michael', time: '2 days ago', amount: '$160', icon: <FaUser />, bg: 'bg-yellow-50 text-yellow-600' },
  { id: 3, name: 'Playstation', time: '5 days ago', amount: '$1085', icon: <FaGamepad />, bg: 'bg-blue-50 text-blue-500' },
  { id: 4, name: 'William', time: '10 days ago', amount: '$90', icon: <FaUser />, bg: 'bg-pink-50 text-pink-500' },
];

const Accounts = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* --- Top Row: Summary Cards --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* My Balance */}
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center text-2xl">
            <FaWallet />
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">My Balance</p>
            <h4 className="text-xl font-bold text-darkBlue">$12,750</h4>
          </div>
        </div>

        {/* Income */}
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-2xl">
            <FiTrendingUp />
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Income</p>
            <h4 className="text-xl font-bold text-darkBlue">$5,600</h4>
          </div>
        </div>

        {/* Expense */}
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center text-2xl">
            <FiFileText />
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Expense</p>
            <h4 className="text-xl font-bold text-darkBlue">$3,460</h4>
          </div>
        </div>

        {/* Total Saving */}
        <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-teal-50 text-teal-500 flex items-center justify-center text-2xl">
            <FiSave />
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">Total Saving</p>
            <h4 className="text-xl font-bold text-darkBlue">$7,920</h4>
          </div>
        </div>
      </div>

      {/* --- Middle Row: Last Transaction & My Card --- */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Last Transaction - Width Decreased to 60% (flex-[1.5]) */}
        <div className="flex-[1.5] bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-darkBlue mb-4">Last Transaction</h3>
          <div className="space-y-2">
            {lastTransactions.map((tx) => (
              <div key={tx.id} className="flex flex-wrap sm:flex-nowrap items-center justify-between p-2 hover:bg-gray-50 rounded-2xl transition-colors gap-3">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${tx.iconBg}`}>
                    {tx.icon}
                  </div>
                  <div>
                    <p className="font-medium text-darkBlue text-sm">{tx.title}</p>
                    <p className="text-xs text-gray-400">{tx.date}</p>
                  </div>
                </div>
                <div className="hidden md:block text-xs text-gray-500 w-20">{tx.category}</div>
                <div className="hidden md:block text-xs text-gray-500 w-20">{tx.card}</div>
                <div className={`hidden sm:block text-xs w-20 ${tx.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`}>
                  {tx.status}
                </div>
                <div className={`text-sm font-semibold w-16 text-right ${tx.amountColor}`}>
                  {tx.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Card - Width Increased to 40% (flex-1), Height adjusted to match */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-darkBlue">My Card</h3>
            <button className="text-primary text-sm font-medium hover:underline">See All</button>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-5 rounded-3xl shadow-lg relative overflow-hidden h-fit flex flex-col justify-between">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <div className="flex justify-between items-start relative z-10">
              <div>
                <p className="text-xs text-blue-200 mb-1">Balance</p>
                <h4 className="text-xl font-bold">$5,756</h4>
              </div>
              {/* Replaced FaApple with SimCardIcon */}
              <SimCardIcon className="w-10 h-5 opacity-80" />
            </div>
            
            <div className="flex gap-8 relative z-10 mt-4">
              <div>
                <p className="text-[10px] text-blue-200 tracking-wider">CARD HOLDER</p>
                <p className="text-sm font-medium">Eddy Cusuma</p>
              </div>
              <div>
                <p className="text-[10px] text-blue-200 tracking-wider">VALID THRU</p>
                <p className="text-sm font-medium">12/22</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center relative z-10 mt-4">
              <p className="text-lg tracking-widest font-mono">3778 **** 1234</p>
              <div className="flex">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/40 rounded-full -ml-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom Row: Debit & Credit Overview & Invoices Sent --- */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Debit & Credit Overview */}
        <div className="flex-[1.5] bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h3 className="text-xl font-semibold text-darkBlue">Debit & Credit Overview</h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                <span className="text-gray-500">Debit</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-orange-400"></span>
                <span className="text-gray-500">Credit</span>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-darkBlue">$7,560</span> Debited & <span className="font-semibold text-darkBlue">$5,420</span> Credited in this Week
            </p>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} barGap={6}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#718EBF', fontSize: 12 }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#718EBF', fontSize: 12 }} 
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }} 
                  contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
                />
                <Bar dataKey="Debit" fill="#2D60FF" radius={[10, 10, 10, 10]} barSize={12} />
                <Bar dataKey="Credit" fill="#FFB800" radius={[10, 10, 10, 10]} barSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Invoices Sent */}
        <div className="flex-1 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-darkBlue mb-6">Invoices Sent</h3>
          <div className="space-y-5">
            {invoicesSent.map((invoice) => (
              <div key={invoice.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-xl transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${invoice.bg}`}>
                    {invoice.icon}
                  </div>
                  <div>
                    <p className="font-medium text-darkBlue text-sm">{invoice.name}</p>
                    <p className="text-xs text-gray-400">{invoice.time}</p>
                  </div>
                </div>
                <p className="font-semibold text-sm text-darkBlue">{invoice.amount}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Accounts;