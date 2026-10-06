import React from 'react';
import { User, Briefcase, BarChart2, Wrench } from 'lucide-react';

// --- MOCK DATA FOR TOP CARDS ---
const summaryCards = [
  { 
    id: 1, 
    title: 'Personal Loans', 
    value: '$50,000', 
    icon: <User size={24} />, 
    bg: 'bg-[#eff6ff]', 
    color: 'text-[#3b82f6]' 
  },
  { 
    id: 2, 
    title: 'Corporate Loans', 
    value: '$100,000', 
    icon: <Briefcase size={24} />, 
    bg: 'bg-[#fffbeb]', 
    color: 'text-[#f59e0b]' 
  },
  { 
    id: 3, 
    title: 'Business Loans', 
    value: '$500,000', 
    icon: <BarChart2 size={24} />, 
    bg: 'bg-[#fdf2f8]', 
    color: 'text-[#ec4899]' 
  },
  { 
    id: 4, 
    title: 'Custom Loans', 
    value: 'Choose Money', 
    icon: <Wrench size={24} />, 
    bg: 'bg-[#f0fdfa]', 
    color: 'text-[#14b8a6]' 
  },
];

// --- MOCK DATA FOR TABLE ---
const loansData = [
  { id: '01', money: '$100,000', left: '$40,500', duration: '8 Months', interest: '12%', installment: '$2,000 / month', isHighlighted: true },
  { id: '02', money: '$500,000', left: '$250,000', duration: '36 Months', interest: '10%', installment: '$8,000 / month' },
  { id: '03', money: '$900,000', left: '$40,500', duration: '12 Months', interest: '12%', installment: '$5,000 / month' },
  { id: '04', money: '$50,000', left: '$40,500', duration: '25 Months', interest: '5%', installment: '$2,000 / month' },
  { id: '05', money: '$50,000', left: '$40,500', duration: '5 Months', interest: '16%', installment: '$10,000 / month' },
  { id: '06', money: '$80,000', left: '$25,500', duration: '14 Months', interest: '8%', installment: '$2,000 / month' },
  { id: '07', money: '$12,000', left: '$5,500', duration: '9 Months', interest: '13%', installment: '$500 / month' },
  { id: '08', money: '$160,000', left: '$100,800', duration: '3 Months', interest: '12%', installment: '$900 / month' },
];

// --- REUSABLE COMPONENTS ---

const SummaryCard = ({ title, value, icon, bg, color }) => (
  <div className="bg-white rounded-2xl p-4 md:p-6 flex items-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${bg} ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-[13px] text-gray-500 font-medium mb-1">{title}</p>
      <p className="text-[18px] md:text-[20px] font-bold text-[#1d1d1f]">{value}</p>
    </div>
  </div>
);

const LoanDashboard = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] p-4 md:p-2 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- TOP SUMMARY CARDS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {summaryCards.map((card) => (
            <SummaryCard key={card.id} {...card} />
          ))}
        </div>

        {/* --- ACTIVE LOANS OVERVIEW TABLE --- */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#1d1d1f] mb-6">
            Active Loans Overview
          </h2>

          {/* Table Container with horizontal scroll for mobile */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left border-collapse">
              <thead>
                <tr className="text-[12px] md:text-[13px] text-gray-400 font-medium border-b border-gray-100">
                  <th className="pb-4 font-medium w-16">SL No</th>
                  <th className="pb-4 font-medium">Loan Money</th>
                  <th className="pb-4 font-medium">Left to repay</th>
                  <th className="pb-4 font-medium">Duration</th>
                  <th className="pb-4 font-medium">Interest rate</th>
                  <th className="pb-4 font-medium">Installment</th>
                  <th className="pb-4 font-medium text-right pr-4">Repay</th>
                </tr>
              </thead>
              <tbody>
                {loansData.map((loan, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer ${
                      loan.isHighlighted ? 'bg-gray-50/50' : ''
                    }`}
                  >
                    <td className="py-4 text-[13px] md:text-[14px] text-gray-500">{loan.id}.</td>
                    <td className="py-4 text-[13px] md:text-[14px] font-medium text-[#1d1d1f]">{loan.money}</td>
                    <td className="py-4 text-[13px] md:text-[14px] text-[#1d1d1f]">{loan.left}</td>
                    <td className="py-4 text-[13px] md:text-[14px] text-[#1d1d1f]">{loan.duration}</td>
                    <td className="py-4 text-[13px] md:text-[14px] text-[#1d1d1f]">{loan.interest}</td>
                    <td className="py-4 text-[13px] md:text-[14px] text-[#1d1d1f]">{loan.installment}</td>
                    <td className="py-4 text-right pr-4">
                      <button className="border border-gray-300 text-[#1d1d1f] text-[12px] md:text-[13px] font-medium px-4 py-1.5 rounded-full hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition-all duration-300">
                        Repay
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="text-[13px] md:text-[14px] font-bold text-[#ef4444]">
                  <td className="pt-6 pb-2">Total</td>
                  <td className="pt-6 pb-2">$125,0000</td>
                  <td className="pt-6 pb-2">$750,000</td>
                  <td className="pt-6 pb-2"></td>
                  <td className="pt-6 pb-2"></td>
                  <td className="pt-6 pb-2">$50,000 / month</td>
                  <td className="pt-6 pb-2"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoanDashboard;