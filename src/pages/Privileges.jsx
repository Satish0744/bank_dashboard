import React from 'react';
import { 
  Star, Gift, Plane, Utensils, ShoppingBag, Ticket, 
  ChevronRight, TrendingUp, CheckCircle2 
} from 'lucide-react';

// --- MOCK DATA FOR PRIVILEGES ---
const privilegesData = [
  {
    id: 1,
    title: 'Travel & Leisure',
    description: 'Complimentary airport lounge access worldwide and exclusive hotel upgrades.',
    icon: <Plane size={22} />,
    bg: 'bg-[#e0e7ff]',
    color: 'text-[#4338ca]',
  },
  {
    id: 2,
    title: 'Dining & Culinary',
    description: 'Exclusive discounts at premium restaurants and priority reservations.',
    icon: <Utensils size={22} />,
    bg: 'bg-[#fce7f3]',
    color: 'text-[#db2777]',
  },
  {
    id: 3,
    title: 'Shopping & Retail',
    description: 'Early access to sales, special cashback offers, and free shipping.',
    icon: <ShoppingBag size={22} />,
    bg: 'bg-[#fef3c7]',
    color: 'text-[#d97706]',
  },
  {
    id: 4,
    title: 'Entertainment',
    description: 'Priority booking for concerts, movies, and exclusive event invites.',
    icon: <Ticket size={22} />,
    bg: 'bg-[#ccfbf1]',
    color: 'text-[#0f766e]',
  },
];

// --- MOCK DATA FOR RECENT ACTIVITY ---
const activityData = [
  { id: 1, title: 'Earned 500 points', subtitle: 'From Apple Store purchase', date: '2 days ago', type: 'earned' },
  { id: 2, title: 'Redeemed 2,000 points', subtitle: 'Amazon Voucher', date: '1 week ago', type: 'redeemed' },
  { id: 3, title: 'Earned 1,200 points', subtitle: 'From Tesla Service', date: '2 weeks ago', type: 'earned' },
];

// --- REUSABLE COMPONENTS ---

const PrivilegeCard = ({ title, description, icon, bg, color }) => (
  <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${bg} ${color} transition-transform duration-300 group-hover:scale-110`}>
      {icon}
    </div>
    <h3 className="text-[15px] md:text-[16px] font-semibold text-[#1d1d1f] mb-2">{title}</h3>
    <p className="text-[13px] md:text-[14px] text-gray-500 leading-relaxed mb-6 flex-grow">{description}</p>
    
    <button className="w-full md:w-auto border border-gray-300 text-[#1d1d1f] text-[13px] font-medium px-4 py-2 rounded-xl hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition-all duration-300">
      Redeem Privilege
    </button>
  </div>
);

const ActivityItem = ({ title, subtitle, date, type }) => (
  <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-50 last:border-0">
    <div className="flex items-center gap-4">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${type === 'earned' ? 'bg-[#e0f2fe] text-[#0284c7]' : 'bg-[#fce7f3] text-[#db2777]'}`}>
        {type === 'earned' ? <TrendingUp size={18} /> : <Gift size={18} />}
      </div>
      <div>
        <p className="text-[14px] font-semibold text-[#1d1d1f]">{title}</p>
        <p className="text-[12px] text-gray-500">{subtitle}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-[12px] text-gray-400">{date}</p>
      <ChevronRight size={16} className="text-gray-300 ml-auto mt-1" />
    </div>
  </div>
);

// --- MAIN PAGE COMPONENT ---
const MyPrivilege = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] p-4 md:p-2 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- SECTION 1: MEMBERSHIP STATUS CARD --- */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded-2xl p-6 md:p-8 text-white shadow-lg mb-8 relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                <span className="text-[14px] font-medium text-blue-100 uppercase tracking-wider">Platinum Member</span>
              </div>
              <h1 className="text-[28px] md:text-[36px] font-bold mb-1">12,500 Points</h1>
              <p className="text-[14px] text-blue-100">You are 2,500 points away from the next tier.</p>
            </div>
            
            <div className="w-full md:w-1/3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
              <div className="flex justify-between text-[12px] font-medium mb-2">
                <span>Current Tier</span>
                <span>Next Tier</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2.5 mb-2">
                <div className="bg-white h-2.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-[11px] text-blue-100 text-right">75% to Gold Status</p>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: PRIVILEGES GRID --- */}
        <h2 className="text-[18px] md:text-[20px] font-semibold text-[#1d1d1f] mb-6">Your Exclusive Privileges</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
          {privilegesData.map((item) => (
            <PrivilegeCard key={item.id} {...item} />
          ))}
        </div>

        {/* --- SECTION 3: RECENT ACTIVITY --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left: Activity List (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[16px] md:text-[18px] font-semibold text-[#1d1d1f]">Recent Activity</h3>
              <a href="#" className="text-[#2563eb] text-[13px] font-medium hover:underline">View All</a>
            </div>
            <div className="flex flex-col">
              {activityData.map((item) => (
                <ActivityItem key={item.id} {...item} />
              ))}
            </div>
          </div>

          {/* Right: Quick Redeem Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-[#fef3c7] rounded-full flex items-center justify-center text-[#d97706] mb-4">
              <Gift size={28} />
            </div>
            <h3 className="text-[18px] font-semibold text-[#1d1d1f] mb-2">Redeem Points</h3>
            <p className="text-[13px] text-gray-500 mb-6">Use your points to get vouchers, cashback, or exclusive products.</p>
            <button className="w-full bg-[#2563eb] text-white py-3 rounded-xl text-[13px] font-medium hover:bg-[#1d4ed8] transition-colors flex items-center justify-center gap-2">
              <CheckCircle2 size={16} />
              Redeem Now
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MyPrivilege;