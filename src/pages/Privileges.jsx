import React from 'react';
import { FiAward, FiStar, FiGift, FiZap } from 'react-icons/fi';
import { FaApple } from 'react-icons/fa';

const Privileges = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-darkBlue">My Privileges</h3>
        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
          <FiStar /> Gold Tier Member
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tier Progress */}
        <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <FaApple className="text-4xl text-white" />
              <div>
                <h4 className="text-2xl font-bold">Apple Rewards</h4>
                <p className="text-sm text-gray-300">Unlock exclusive benefits as you spend.</p>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">Progress to Platinum</span>
                <span className="font-semibold text-yellow-400">75%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-4">
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-200 h-4 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-xs text-gray-400 mt-2">Spend $2,500 more to reach Platinum Tier.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-2xl backdrop-blur-sm">
                <p className="text-xs text-gray-400 mb-1">Current Points</p>
                <p className="text-2xl font-bold">12,450</p>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl backdrop-blur-sm">
                <p className="text-xs text-gray-400 mb-1">Points Value</p>
                <p className="text-2xl font-bold">$124.50</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits List */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <h4 className="text-lg font-semibold text-darkBlue mb-6">Your Benefits</h4>
          <div className="space-y-4">
            {[
              { icon: <FiZap />, title: '3% Daily Cash', desc: 'On all Apple purchases', color: 'text-yellow-500 bg-yellow-50' },
              { icon: <FiGift />, title: 'Exclusive Offers', desc: 'Early access to product launches', color: 'text-purple-500 bg-purple-50' },
              { icon: <FiAward />, title: 'Priority Support', desc: '24/7 dedicated support line', color: 'text-blue-500 bg-blue-50' },
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-3 hover:bg-gray-50 rounded-2xl transition-colors">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${benefit.color}`}>{benefit.icon}</div>
                <div>
                  <p className="font-medium text-darkBlue text-sm">{benefit.title}</p>
                  <p className="text-xs text-gray-400">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privileges;