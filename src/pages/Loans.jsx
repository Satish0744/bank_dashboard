import React from 'react';
import { FiCheckCircle, FiClock, FiDollarSign } from 'react-icons/fi';
import { FaApple } from 'react-icons/fa';

const loans = [
  { id: 1, name: 'MacBook Pro M3', total: 2499, remaining: 1500, nextPayment: 'Feb 01, 2024', monthly: 208.25, progress: 40, status: 'Active', icon: <FaApple /> },
  { id: 2, name: 'iPad Air', total: 799, remaining: 200, nextPayment: 'Feb 05, 2024', monthly: 66.58, progress: 75, status: 'Active', icon: <FaApple /> },
  { id: 3, name: 'Apple Watch Ultra', total: 799, remaining: 0, nextPayment: 'Paid Off', monthly: 0, progress: 100, status: 'Completed', icon: <FaApple /> },
];

const Loans = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-darkBlue">My Loans & Installments</h3>
        <div className="bg-green-100 text-green-600 px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2">
          <FiCheckCircle /> Total Debt: $1,700.00
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loans.map((loan) => (
          <div key={loan.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${loan.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                  {loan.icon}
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${loan.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                  {loan.status}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-darkBlue mb-1">{loan.name}</h4>
              <p className="text-xs text-gray-400 mb-4">Total: ${loan.total.toFixed(2)}</p>
              
              <div className="mb-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-500">Paid</span>
                  <span className="font-semibold text-darkBlue">{loan.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className={`h-2 rounded-full ${loan.status === 'Completed' ? 'bg-green-500' : 'bg-primary'}`} style={{ width: `${loan.progress}%` }}></div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Remaining</p>
                <p className="text-sm font-bold text-darkBlue">${loan.remaining.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Next Payment</p>
                <p className="text-sm font-bold text-darkBlue">{loan.nextPayment}</p>
              </div>
            </div>
            
            {loan.status !== 'Completed' && (
              <button className="w-full mt-4 bg-primary text-white py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors">
                Pay ${loan.monthly.toFixed(2)}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loans;