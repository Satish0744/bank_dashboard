import React from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip 
} from 'recharts';
import { 
  CreditCard as CardIcon, Wifi, Lock, Smartphone, ShoppingBag, 
  ChevronDown, Settings, Bell, ShieldCheck
} from 'lucide-react';

// --- MOCK DATA ---

const cardData = [
  {
    id: 1,
    balance: '$5,756',
    holder: 'Eddy Cusuma',
    expiry: '12/22',
    number: '3778 **** **** 1234',
    theme: 'blue', 
  },
  {
    id: 2,
    balance: '$5,756',
    holder: 'Eddy Cusuma',
    expiry: '12/22',
    number: '3778 **** **** 1234',
    theme: 'dark', 
  },
  {
    id: 3,
    balance: '$5,756',
    holder: 'Eddy Cusuma',
    expiry: '12/22',
    number: '3778 **** **** 1234',
    theme: 'light', 
  },
];

const expenseData = [
  { name: 'DBL Bank', value: 400, color: '#3b82f6' },
  { name: 'BRC Bank', value: 300, color: '#ec4899' },
  { name: 'ABM Bank', value: 300, color: '#14b8a6' },
  { name: 'MCP Bank', value: 200, color: '#f59e0b' },
];

const cardListData = [
  { id: 1, type: 'Secondary', bank: 'DBL Bank', number: '**** **** 5600', name: 'William', iconBg: 'bg-[#e0f2fe] text-[#0284c7]' },
  { id: 2, type: 'Secondary', bank: 'BRC Bank', number: '**** **** 4300', name: 'Michel', iconBg: 'bg-[#fce7f3] text-[#db2777]' },
  { id: 3, type: 'Secondary', bank: 'ABM Bank', number: '**** **** 7560', name: 'Edward', iconBg: 'bg-[#fef3c7] text-[#d97706]' },
];

const settingData = [
  { id: 1, title: 'Block Card', desc: 'Instantly block your card', icon: <Lock size={18} />, bg: 'bg-[#fef3c7] text-[#d97706]' },
  { id: 2, title: 'Change Pin Code', desc: 'Choose another pin code', icon: <ShieldCheck size={18} />, bg: 'bg-[#e0e7ff] text-[#4338ca]' },
  { id: 3, title: 'Add to Google Pay', desc: 'Withdraw without any card', icon: <Smartphone size={18} />, bg: 'bg-[#fce7f3] text-[#db2777]' },
  { id: 4, title: 'Add to Apple Pay', desc: 'Withdraw without any card', icon: <CardIcon size={18} />, bg: 'bg-[#ccfbf1] text-[#0f766e]' },
  { id: 5, title: 'Add to Apple Store', desc: 'Withdraw without any card', icon: <ShoppingBag size={18} />, bg: 'bg-[#e0f2fe] text-[#0284c7]' },
];

// --- REUSABLE COMPONENTS ---

const CreditCard = ({ balance, holder, expiry, number, theme }) => {
  let bgClass = '';
  let textClass = 'text-white';
  let labelColor = 'text-gray-300';
  let numberColor = 'text-white';

  if (theme === 'blue') {
    bgClass = 'bg-gradient-to-br from-[#4f93ff] to-[#2563eb]';
  } else if (theme === 'dark') {
    bgClass = 'bg-[#1e3a8a]'; 
  } else if (theme === 'light') {
    bgClass = 'bg-white border border-gray-200';
    textClass = 'text-gray-800';
    labelColor = 'text-gray-400';
    numberColor = 'text-gray-800';
  }

  return (
    <div className={`rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${bgClass} ${textClass}`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className={`text-[12px] ${theme === 'light' ? 'text-gray-500' : 'text-gray-300'}`}>Balance</p>
          <p className="text-[20px] md:text-[24px] font-semibold">{balance}</p>
        </div>
        <Wifi size={20} className={theme === 'light' ? 'text-gray-400' : 'text-gray-200 opacity-80'} />
      </div>
      
      <div className="flex justify-between items-end mb-6">
        <div>
          <p className={`text-[10px] ${labelColor} mb-1`}>CARD HOLDER</p>
          <p className="text-[13px] md:text-[14px] font-medium">{holder}</p>
        </div>
        <div className="text-right">
          <p className={`text-[10px] ${labelColor} mb-1`}>VALID THRU</p>
          <p className="text-[13px] md:text-[14px] font-medium">{expiry}</p>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <p className={`text-[16px] md:text-[18px] font-medium tracking-wider ${numberColor}`}>{number}</p>
        <div className="flex -space-x-2">
          <div className={`w-6 h-6 rounded-full ${theme === 'light' ? 'bg-gray-300' : 'bg-white opacity-80'}`}></div>
          <div className={`w-6 h-6 rounded-full ${theme === 'light' ? 'bg-gray-400' : 'bg-white opacity-60'}`}></div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---

const CreditCardDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] p-4 md:p-2 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- SECTION 1: MY CARDS --- */}
        <h2 className="text-[16px] md:text-[18px] font-semibold text-[#1d1d1f] mb-4">My Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {cardData.map((card) => (
            <CreditCard key={card.id} {...card} />
          ))}
        </div>

        {/* --- SECTION 2: CHARTS & CARD LIST --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Left: Card Expense Statistics (25%) */}
          <div className="lg:col-span-1 bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 flex flex-col items-center">
            <h3 className="text-[15px] md:text-[16px] font-semibold text-[#1d1d1f] mb-2 w-full text-left">Card Expense Statistics</h3>
            
            <div className="h-[160px] w-full flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50} 
                    outerRadius={70} 
                    paddingAngle={4} 
                    dataKey="value"
                    stroke="none"
                  >
                    {expenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full mt-2 pl-2">
              {expenseData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-[12px] text-gray-600 font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Card List (75%) */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <h3 className="text-[15px] md:text-[16px] font-semibold text-[#1d1d1f] mb-4">Card List</h3>
              <div className="flex flex-col gap-3">
                {cardListData.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row justify-between md:items-center py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 rounded-lg px-2 transition-colors cursor-pointer gap-2 md:gap-0">
                    
                    <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${item.iconBg}`}>
                        <CardIcon size={16} />
                      </div>
                      <div className="flex gap-6 md:gap-10 w-full justify-between md:justify-start">
                        <div>
                          <p className="text-[10px] text-gray-400 mb-0.5">Card Type</p>
                          <p className="text-[12px] md:text-[13px] font-medium text-[#1d1d1f]">{item.type}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400 mb-0.5">Bank</p>
                          <p className="text-[12px] md:text-[13px] font-medium text-[#1d1d1f]">{item.bank}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-6 md:gap-10 items-center w-full md:w-auto justify-between md:justify-end mt-2 md:mt-0 pl-11 md:pl-0">
                      <div className="text-left md:text-right">
                        <p className="text-[10px] text-gray-400 mb-0.5">Card Number</p>
                        <p className="text-[12px] md:text-[13px] font-medium text-[#1d1d1f]">{item.number}</p>
                      </div>
                      <div className="text-left md:text-right">
                        <p className="text-[10px] text-gray-400 mb-0.5">Name on Card</p>
                        <p className="text-[12px] md:text-[13px] font-medium text-[#1d1d1f]">{item.name}</p>
                      </div>
                      <a href="#" className="text-[#2563eb] text-[12px] md:text-[13px] font-medium hover:underline whitespace-nowrap">View Details</a>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 3: ADD NEW CARD & SETTINGS --- */}
        {/* Changed to 65% / 35% split using custom grid template */}
        <div className="grid grid-cols-1 lg:grid-cols-[65fr_35fr] gap-6">
          
          {/* Left: Add New Card Form (65%) */}
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
            <h3 className="text-[15px] md:text-[16px] font-semibold text-[#1d1d1f] mb-4">Add New Card</h3>
            <p className="text-[12px] md:text-[13px] text-gray-500 mb-6 leading-relaxed">
              Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.
            </p>
            
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-medium text-gray-700 mb-1.5">Card Type</label>
                  <div className="relative">
                    <select className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2563eb] text-[13px] bg-white appearance-none cursor-pointer">
                      <option>Classic</option>
                      <option>Gold</option>
                      <option>Platinum</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-gray-700 mb-1.5">Name On Card</label>
                  <input type="text" placeholder="My Cards" className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2563eb] text-[13px]" />
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-gray-700 mb-1.5">Card Number</label>
                  <input type="text" placeholder="**** **** **** ****" className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2563eb] text-[13px]" />
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-gray-700 mb-1.5">Expiration Date</label>
                  <div className="relative">
                    <input type="text" placeholder="25 January 2025" className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2563eb] text-[13px]" />
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
              {/* Button width changed to full on mobile, fit on desktop */}
              <button type="button" className="bg-[#2563eb] text-white py-3 rounded-lg text-[13px] font-medium hover:bg-[#1d4ed8] transition-colors mt-2 w-full md:w-fit px-8">
                Add Card
              </button>
            </form>
          </div>

          {/* Right: Card Setting (35%) */}
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
            <h3 className="text-[15px] md:text-[16px] font-semibold text-[#1d1d1f] mb-4">Card Setting</h3>
            <div className="flex flex-col gap-2">
              {settingData.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.bg} group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[13px] md:text-[14px] font-semibold text-[#1d1d1f]">{item.title}</p>
                      <p className="text-[11px] md:text-[12px] text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                  <ChevronDown size={16} className="text-gray-400 -rotate-90" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreditCardDashboard;