import React from 'react';
import { FiTrendingUp, FiTrendingDown, FiPieChart } from 'react-icons/fi';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const portfolioData = [
  { name: 'Jan', value: 10000 }, { name: 'Feb', value: 12000 }, { name: 'Mar', value: 11500 },
  { name: 'Apr', value: 14000 }, { name: 'May', value: 13500 }, { name: 'Jun', value: 16000 },
  { name: 'Jul', value: 18000 },
];

const assets = [
  { id: 1, ticker: 'AAPL', name: 'Apple Inc.', shares: '50', price: '$185.50', change: '+2.4%', value: '$9,275.00', isUp: true },
  { id: 2, ticker: 'MSFT', name: 'Microsoft Corp.', shares: '20', price: '$420.10', change: '-0.8%', value: '$8,402.00', isUp: false },
  { id: 3, ticker: 'TSLA', name: 'Tesla Inc.', shares: '15', price: '$210.30', change: '+5.1%', value: '$3,154.50', isUp: true },
  { id: 4, ticker: 'VOO', name: 'Vanguard S&P 500', shares: '10', price: '$450.20', change: '+1.2%', value: '$4,502.00', isUp: true },
];

const Investments = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-darkBlue">Investment Portfolio</h3>
        <button className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors shadow-md">Trade Now</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Portfolio Value Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-sm text-gray-400 mb-1">Total Portfolio Value</p>
              <h4 className="text-3xl font-bold text-darkBlue">$25,333.50</h4>
              <p className="text-sm text-green-500 font-medium flex items-center gap-1 mt-1"><FiTrendingUp /> +12.5% All time</p>
            </div>
            <div className="bg-lightBg p-3 rounded-2xl text-primary"><FiPieChart className="text-2xl" /></div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={portfolioData}>
                <defs>
                  <linearGradient id="colorPortfolio" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2D60FF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2D60FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#718EBF', fontSize: 12 }} />
                <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                <Area type="monotone" dataKey="value" stroke="#2D60FF" strokeWidth={3} fillOpacity={1} fill="url(#colorPortfolio)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Asset Allocation / Quick Stats */}
        <div className="bg-white p-6 rounded-3xl shadow-sm flex flex-col justify-center">
          <h4 className="text-lg font-semibold text-darkBlue mb-4">Asset Allocation</h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1"><span className="text-darkBlue font-medium">Stocks</span><span className="text-gray-500">65%</span></div>
              <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1"><span className="text-darkBlue font-medium">Bonds</span><span className="text-gray-500">20%</span></div>
              <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-green-500 h-2 rounded-full" style={{ width: '20%' }}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1"><span className="text-darkBlue font-medium">Crypto</span><span className="text-gray-500">10%</span></div>
              <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-orange-500 h-2 rounded-full" style={{ width: '10%' }}></div></div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1"><span className="text-darkBlue font-medium">Cash</span><span className="text-gray-500">5%</span></div>
              <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-gray-400 h-2 rounded-full" style={{ width: '5%' }}></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="bg-white p-6 rounded-3xl shadow-sm">
        <h4 className="text-lg font-semibold text-darkBlue mb-6">Your Holdings</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 text-sm">
                <th className="pb-3 font-medium">Asset</th>
                <th className="pb-3 font-medium">Shares</th>
                <th className="pb-3 font-medium">Price</th>
                <th className="pb-3 font-medium">Change</th>
                <th className="pb-3 font-medium text-right">Total Value</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-4">
                    <p className="font-semibold text-darkBlue">{asset.ticker}</p>
                    <p className="text-xs text-gray-400">{asset.name}</p>
                  </td>
                  <td className="py-4 text-sm text-darkBlue">{asset.shares}</td>
                  <td className="py-4 text-sm text-darkBlue">{asset.price}</td>
                  <td className={`py-4 text-sm font-medium flex items-center gap-1 ${asset.isUp ? 'text-green-500' : 'text-red-500'}`}>
                    {asset.isUp ? <FiTrendingUp /> : <FiTrendingDown />} {asset.change}
                  </td>
                  <td className="py-4 text-right font-semibold text-darkBlue">{asset.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Investments;