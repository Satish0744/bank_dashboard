import React, { useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { FiPlus, FiDownload, FiChevronLeft, FiChevronRight, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// --- Mock Data for My Expense Chart ---
const expenseChartData = [
  { month: 'Aug', amount: 8000 },
  { month: 'Sep', amount: 9500 },
  { month: 'Oct', amount: 7500 },
  { month: 'Nov', amount: 6000 },
  { month: 'Dec', amount: 12500 },
  { month: 'Jan', amount: 9000 },
];

// --- Mock Data for Recent Transactions (15+ items for pagination) ---
const allTransactionsData = [
  { id: 1, description: 'Spotify Subscription', txId: '#12548796', type: 'Shopping', card: '1234 ****', date: '28 Jan, 12:30 AM', amount: '-$2,500', isIncome: false },
  { id: 2, description: 'Freepik Sales', txId: '#12548796', type: 'Transfer', card: '1234 ****', date: '25 Jan, 10:40 PM', amount: '+$750', isIncome: true },
  { id: 3, description: 'Mobile Service', txId: '#12548796', type: 'Service', card: '1234 ****', date: '20 Jan, 10:40 PM', amount: '-$150', isIncome: false },
  { id: 4, description: 'Wilson', txId: '#12548796', type: 'Transfer', card: '1234 ****', date: '15 Jan, 03:29 PM', amount: '-$1,050', isIncome: false },
  { id: 5, description: 'Emilly', txId: '#12548796', type: 'Transfer', card: '1234 ****', date: '14 Jan, 10:40 PM', amount: '+$840', isIncome: true },
  { id: 6, description: 'Apple Store', txId: '#12548797', type: 'Shopping', card: '1234 ****', date: '12 Jan, 09:15 AM', amount: '-$1,200', isIncome: false },
  { id: 7, description: 'Salary Deposit', txId: '#12548798', type: 'Transfer', card: '1234 ****', date: '10 Jan, 08:00 AM', amount: '+$5,000', isIncome: true },
  { id: 8, description: 'Uber Eats', txId: '#12548799', type: 'Service', card: '1234 ****', date: '08 Jan, 07:45 PM', amount: '-$45', isIncome: false },
  { id: 9, description: 'Netflix', txId: '#12548800', type: 'Shopping', card: '1234 ****', date: '05 Jan, 11:20 PM', amount: '-$15', isIncome: false },
  { id: 10, description: 'Amazon Purchase', txId: '#12548801', type: 'Shopping', card: '1234 ****', date: '02 Jan, 02:10 PM', amount: '-$320', isIncome: false },
  { id: 11, description: 'Freelance Payment', txId: '#12548802', type: 'Transfer', card: '1234 ****', date: '30 Dec, 04:00 PM', amount: '+$1,500', isIncome: true },
  { id: 12, description: 'Gym Membership', txId: '#12548803', type: 'Service', card: '1234 ****', date: '28 Dec, 08:30 AM', amount: '-$60', isIncome: false },
  { id: 13, description: 'Gas Station', txId: '#12548804', type: 'Service', card: '1234 ****', date: '25 Dec, 06:15 PM', amount: '-$80', isIncome: false },
  { id: 14, description: 'Dividend Payout', txId: '#12548805', type: 'Transfer', card: '1234 ****', date: '22 Dec, 09:00 AM', amount: '+$250', isIncome: true },
  { id: 15, description: 'Apple Music', txId: '#12548806', type: 'Shopping', card: '1234 ****', date: '20 Dec, 10:00 AM', amount: '-$11', isIncome: false },
  { id: 16, description: 'Book Store', txId: '#12548807', type: 'Shopping', card: '1234 ****', date: '18 Dec, 03:45 PM', amount: '-$45', isIncome: false },
  { id: 17, description: 'Client Payment', txId: '#12548808', type: 'Transfer', card: '1234 ****', date: '15 Dec, 11:00 AM', amount: '+$2,200', isIncome: true },
];

const Transactions = () => {
  // --- State Management ---
  const [activeMonth, setActiveMonth] = useState('Dec');
  const [activeTab, setActiveTab] = useState('All Transactions');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // --- Handlers ---
  const handleMonthClick = (month) => {
    setActiveMonth(month);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to first page when changing tabs
  };

  // --- Filtering & Pagination Logic ---
  const filteredTransactions = allTransactionsData.filter((tx) => {
    if (activeTab === 'Income') return tx.isIncome;
    if (activeTab === 'Expense') return !tx.isIncome;
    return true; // All Transactions
  });

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);

  const selectedMonthData = expenseChartData.find((data) => data.month === activeMonth);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* --- Top Section: Cards & Expense Chart --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* My Cards Section */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-darkBlue">My Cards</h3>
            <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
              <FiPlus /> Add Card
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Blue Card */}
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-6 rounded-3xl shadow-lg relative overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-xs text-blue-200">Balance</p>
                  <h4 className="text-2xl font-bold">$5,756</h4>
                </div>
                <FaApple className="text-3xl opacity-80" />
              </div>
              <div className="flex gap-8 mb-6">
                <div>
                  <p className="text-[10px] text-blue-200">CARD HOLDER</p>
                  <p className="text-sm font-medium">Eddy Cusuma</p>
                </div>
                <div>
                  <p className="text-[10px] text-blue-200">VALID THRU</p>
                  <p className="text-sm font-medium">12/22</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg tracking-widest font-mono">3778 **** 1234</p>
                <div className="flex">
                  <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="w-8 h-8 bg-white/40 rounded-full -ml-3"></div>
                </div>
              </div>
            </div>

            {/* White Card */}
            <div className="bg-white text-darkBlue p-6 rounded-3xl shadow-lg border border-gray-100 transition-transform hover:scale-[1.02]">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-xs text-gray-400">Balance</p>
                  <h4 className="text-2xl font-bold">$5,756</h4>
                </div>
                <FaApple className="text-3xl text-gray-300" />
              </div>
              <div className="flex gap-8 mb-6">
                <div>
                  <p className="text-[10px] text-gray-400">CARD HOLDER</p>
                  <p className="text-sm font-medium">Eddy Cusuma</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400">VALID THRU</p>
                  <p className="text-sm font-medium">12/22</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-lg tracking-widest font-mono text-gray-600">3778 **** 1234</p>
                <div className="flex">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full -ml-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Expense Section */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
          <h3 className="text-xl font-semibold text-darkBlue mb-6">My Expense</h3>
          <div className="flex-1 flex flex-col justify-end">
            <div className="text-right mb-2">
              <span className="text-2xl font-bold text-darkBlue">
                ${selectedMonthData ? selectedMonthData.amount.toLocaleString() : '0'}
              </span>
            </div>
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={expenseChartData} barGap={8}>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#718EBF', fontSize: 12 }} 
                  />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }} 
                    contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
                  />
                  <Bar 
                    dataKey="amount" 
                    radius={[10, 10, 10, 10]} 
                    barSize={24}
                    onClick={(data) => handleMonthClick(data.month)}
                    className="cursor-pointer"
                  >
                    {expenseChartData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.month === activeMonth ? '#0ea5e9' : '#e2e8f0'} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom Section: Recent Transactions --- */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold text-darkBlue mb-6">Recent Transactions</h3>
        
        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-100 mb-6">
          {['All Transactions', 'Income', 'Expense'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`pb-3 text-sm font-medium transition-colors relative ${
                activeTab === tab ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="pb-3 font-medium">Description</th>
                <th className="pb-3 font-medium">Transaction ID</th>
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium">Card</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium text-right">Amount</th>
                <th className="pb-3 font-medium text-center">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {currentTransactions.length > 0 ? (
                currentTransactions.map((tx) => (
                  <tr key={tx.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors group">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${tx.isIncome ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                          {tx.isIncome ? <FiArrowDown size={14} /> : <FiArrowUp size={14} />}
                        </div>
                        <span className="font-medium text-darkBlue text-sm">{tx.description}</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-gray-500">{tx.txId}</td>
                    <td className="py-4 text-sm text-gray-500">{tx.type}</td>
                    <td className="py-4 text-sm text-gray-500">{tx.card}</td>
                    <td className="py-4 text-sm text-gray-500">{tx.date}</td>
                    <td className={`py-4 text-sm font-semibold text-right ${tx.isIncome ? 'text-green-500' : 'text-red-500'}`}>
                      {tx.amount}
                    </td>
                    <td className="py-4 text-center">
                      <button 
                        onClick={() => alert(`Downloading receipt for ${tx.description}...`)}
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary border border-primary/30 rounded-full px-3 py-1 hover:bg-primary hover:text-white transition-colors"
                      >
                        <FiDownload size={12} /> Download
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-8 text-gray-400 text-sm">
                    No transactions found for this filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-4 border-t border-gray-100 gap-4">
          <p className="text-sm text-gray-400">
            Showing <span className="font-medium text-darkBlue">{indexOfFirstItem + 1}</span> to{' '}
            <span className="font-medium text-darkBlue">
              {Math.min(indexOfLastItem, filteredTransactions.length)}
            </span>{' '}
            of <span className="font-medium text-darkBlue">{filteredTransactions.length}</span> entries
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-lg transition-colors ${
                currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-primary hover:bg-blue-50'
              }`}
            >
              <FiChevronLeft /> Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-lg transition-colors ${
                currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-primary hover:bg-blue-50'
              }`}
            >
              Next <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;