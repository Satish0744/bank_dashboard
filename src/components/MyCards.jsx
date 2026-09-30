import React from 'react';
import { FaApple } from 'react-icons/fa';

const MyCards = () => {
  return (
    <div className="flex-[2]"> {/* <--- CHANGED FROM flex-1 TO flex-[2] */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-darkBlue">My Cards</h3>
        <button className="text-primary text-sm font-medium hover:underline">See All</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Card 1 (Apple Card Titanium/Blue style) */}
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-6 rounded-3xl shadow-lg relative overflow-hidden transition-transform hover:scale-[1.02] duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-xs text-blue-200">Balance</p>
              <h4 className="text-2xl font-bold">$15,756</h4>
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
              <p className="text-sm font-medium">12/26</p>
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

        {/* Card 2 (White) */}
        <div className="bg-white text-darkBlue p-6 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden transition-transform hover:scale-[1.02] duration-300">
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
              <p className="text-sm font-medium">12/26</p>
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
  );
};

export default MyCards;