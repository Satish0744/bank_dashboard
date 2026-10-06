import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { Wallet, PieChart, RefreshCw } from 'lucide-react';

// --- MOCK DATA FOR CHARTS ---
const yearlyData = [
  { year: '2016', value: 0 },
  { year: '2017', value: 12000 },
  { year: '2018', value: 24000 },
  { year: '2019', value: 18000 },
  { year: '2020', value: 35000 },
  { year: '2021', value: 26000 },
];

const monthlyData = [
  { year: '2016', value: 0 },
  { year: '2017', value: 18000 },
  { year: '2018', value: 22000 },
  { year: '2019', value: 15000 },
  { year: '2020', value: 28000 },
  { year: '2021', value: 21000 },
];

// --- MOCK DATA FOR LISTS ---
const investments = [
  {
    id: 1,
    name: 'Apple Store',
    category: 'E-commerce, Marketplace',
    value: '$54,000',
    return: '+16%',
    isPositive: true,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.5 1.28 0 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.82M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
    iconBg: 'bg-[#fce4ec] text-[#ff4d4f]',
  },
  {
    id: 2,
    name: 'Samsung Mobile',
    category: 'E-commerce, Marketplace',
    value: '$25,300',
    return: '-4%',
    isPositive: false,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    ),
    iconBg: 'bg-[#e8eaf6] text-[#5c6bc0]',
  },
  {
    id: 3,
    name: 'Tesla Motors',
    category: 'Electric Vehicles',
    value: '$8,200',
    return: '+25%',
    isPositive: true,
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    iconBg: 'bg-[#fff3e0] text-[#ff9800]',
  },
];

const trendingStocks = [
  { id: '01', name: 'Trivago', price: '$520', return: '+5%', isPositive: true },
  { id: '02', name: 'Canon', price: '$480', return: '+10%', isPositive: true },
  { id: '03', name: 'Uber Food', price: '$350', return: '-3%', isPositive: false },
  { id: '04', name: 'Nokia', price: '$940', return: '+2%', isPositive: true },
  { id: '05', name: 'Tiktok', price: '$670', return: '-12%', isPositive: false },
];

// --- REUSABLE COMPONENTS ---

const StatCard = ({ icon, iconBg, label, value, valueColor }) => (
  // Adjusted padding and font sizes for mobile
  <div className="bg-white rounded-2xl p-4 md:p-6 flex items-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-3 md:mr-4 ${iconBg}`}>
      {icon}
    </div>
    <div>
      <p className="text-[12px] md:text-[13px] text-gray-500 font-medium mb-1">{label}</p>
      <p className={`text-[18px] md:text-[22px] font-bold ${valueColor || 'text-[#1d1d1f]'}`}>{value}</p>
    </div>
  </div>
);

const ChartCard = ({ title, data, color }) => (
  // Adjusted padding and chart height for mobile
  <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
    <h3 className="text-[15px] md:text-[16px] font-semibold text-[#1d1d1f] mb-4 md:mb-6">{title}</h3>
    <div className="h-[200px] md:h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        {/* Adjusted left margin so Y-axis labels aren't cut off on mobile */}
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id={`color-${color}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.2}/>
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          <XAxis 
            dataKey="year" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9ca3af', fontSize: 11 }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9ca3af', fontSize: 11 }} 
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip 
            contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            formatter={(value) => [`$${value.toLocaleString()}`, 'Value']}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke={color} 
            strokeWidth={3} 
            fillOpacity={1} 
            fill={`url(#color-${color})`} 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const InvestmentDashboard = () => {
  return (
    // Adjusted outer padding for mobile
    <div className="min-h-screen bg-[#f8f9fa] p-3 md:p-2 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- TOP STAT CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <StatCard 
            icon={<Wallet size={20} className="md:w-6 md:h-6" />} 
            iconBg="bg-[#e0f7fa] text-[#00c4b4]" 
            label="Total Invested Amount" 
            value="$150,000" 
          />
          <StatCard 
            icon={<PieChart size={20} className="md:w-6 md:h-6" />} 
            iconBg="bg-[#fce4ec] text-[#ff4d4f]" 
            label="Number of Investments" 
            value="1,250" 
          />
          <StatCard 
            icon={<RefreshCw size={20} className="md:w-6 md:h-6" />} 
            iconBg="bg-[#e8eaf6] text-[#5c6bc0]" 
            label="Rate of Return" 
            value="+5.80%" 
            valueColor="text-[#00c4b4]"
          />
        </div>

        {/* --- CHARTS SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          <ChartCard title="Yearly Total Investment" data={yearlyData} color="#fbc02d" />
          <ChartCard title="Monthly Revenue" data={monthlyData} color="#00c4b4" />
        </div>

        {/* --- BOTTOM SECTION: INVESTMENTS & STOCKS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          
          {/* My Investment List */}
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
            <h3 className="text-[15px] md:text-[16px] font-semibold text-[#1d1d1f] mb-2">My Investment</h3>
            
            {/* Hidden on mobile to save space, visible on desktop */}
            <div className="hidden md:flex justify-between items-center text-[12px] text-gray-400 font-medium mb-4 pb-2 border-b border-gray-100">
              <span>Asset</span>
              <div className="flex gap-12 mr-2">
                <span>Envestment Value</span>
                <span>Return Value</span>
              </div>
            </div>
            
            <div className="flex flex-col">
              {investments.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row justify-between md:items-center py-3 md:py-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 rounded-lg px-2 transition-colors cursor-pointer gap-2 md:gap-0">
                  
                  {/* Left: Icon & Details */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center ${item.iconBg}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[13px] md:text-[14px] font-semibold text-[#1d1d1f]">{item.name}</p>
                      <p className="text-[11px] md:text-[12px] text-gray-500">{item.category}</p>
                    </div>
                  </div>

                  {/* Right: Values (Stacked on mobile, inline on desktop) */}
                  <div className="flex justify-between md:justify-end items-center gap-4 md:gap-10 w-full md:w-auto pl-12 md:pl-0">
                    <p className="text-[13px] md:text-[14px] font-semibold text-[#1d1d1f] md:w-20 md:text-right">{item.value}</p>
                    <p className={`text-[13px] md:text-[14px] font-semibold md:w-16 md:text-right ${item.isPositive ? 'text-[#00c4b4]' : 'text-[#ff4d4f]'}`}>
                      {item.return}
                    </p>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>

          {/* Trending Stock Table */}
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
            <h3 className="text-[15px] md:text-[16px] font-semibold text-[#1d1d1f] mb-4 md:mb-6">Trending Stock</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[11px] md:text-[12px] text-gray-400 font-medium border-b border-gray-100">
                    <th className="pb-2 md:pb-3 font-medium">SL No</th>
                    <th className="pb-2 md:pb-3 font-medium">Name</th>
                    <th className="pb-2 md:pb-3 font-medium">Price</th>
                    <th className="pb-2 md:pb-3 font-medium text-right">Return</th>
                  </tr>
                </thead>
                <tbody>
                  {trendingStocks.map((stock) => (
                    <tr key={stock.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer">
                      <td className="py-3 md:py-4 text-[12px] md:text-[14px] text-gray-500">{stock.id}.</td>
                      <td className="py-3 md:py-4 text-[12px] md:text-[14px] font-medium text-[#1d1d1f]">{stock.name}</td>
                      <td className="py-3 md:py-4 text-[12px] md:text-[14px] text-[#1d1d1f]">{stock.price}</td>
                      <td className={`py-3 md:py-4 text-[12px] md:text-[14px] font-semibold text-right ${stock.isPositive ? 'text-[#00c4b4]' : 'text-[#ff4d4f]'}`}>
                        {stock.return}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InvestmentDashboard;