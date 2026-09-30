import React from 'react';
import { FiPlus, FiCreditCard, FiLock, FiZap } from 'react-icons/fi';
import { FaApple } from 'react-icons/fa';

const CreditCards = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-darkBlue">My Credit Cards</h3>
        <button className="bg-primary text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-md text-sm font-medium">
          <FiPlus /> Apply for a Card
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Apple Card */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl text-gray-800"><FaApple /></div>
              <div>
                <h4 className="font-semibold text-darkBlue">Apple Card</h4>
                <p className="text-xs text-gray-400">Titanium • **** 1234</p>
              </div>
            </div>
            <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">Active</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-lightBg p-4 rounded-2xl">
              <p className="text-xs text-gray-400 mb-1">Current Balance</p>
              <p className="text-xl font-bold text-darkBlue">$1,500.00</p>
            </div>
            <div className="bg-lightBg p-4 rounded-2xl">
              <p className="text-xs text-gray-400 mb-1">Available Credit</p>
              <p className="text-xl font-bold text-green-600">$8,500.00</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 flex items-center gap-2"><FiZap className="text-yellow-500" /> Daily Cash Back</span>
              <span className="font-semibold text-darkBlue">$45.20</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 flex items-center gap-2"><FiLock /> Payment Due Date</span>
              <span className="font-semibold text-darkBlue">Feb 15, 2024</span>
            </div>
          </div>

          <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
            <button className="flex-1 bg-primary text-white py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors">Pay Now</button>
            <button className="flex-1 bg-lightBg text-darkBlue py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">View Statements</button>
          </div>
        </div>

        {/* Apple Card Monthly Installments */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl text-blue-600"><FiCreditCard /></div>
              <div>
                <h4 className="font-semibold text-darkBlue">Monthly Installments</h4>
                <p className="text-xs text-gray-400">iPhone 15 Pro • 24 months</p>
              </div>
            </div>
            <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">In Progress</span>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">Progress</span>
              <span className="font-semibold text-darkBlue">$499.75 / $1,199.00</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3">
              <div className="bg-primary h-3 rounded-full" style={{ width: '41%' }}></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-lightBg p-4 rounded-2xl">
              <p className="text-xs text-gray-400 mb-1">Monthly Payment</p>
              <p className="text-lg font-bold text-darkBlue">$49.95</p>
            </div>
            <div className="bg-lightBg p-4 rounded-2xl">
              <p className="text-xs text-gray-400 mb-1">Remaining</p>
              <p className="text-lg font-bold text-darkBlue">$699.25</p>
            </div>
          </div>

          <button className="w-full bg-lightBg text-darkBlue py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors mt-6 border border-gray-100">
            Manage Installments
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreditCards;