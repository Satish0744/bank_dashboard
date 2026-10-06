import React from 'react';
import { 
  ShieldCheck, ShoppingBag, Shield, User, Briefcase, 
  BarChart2, CreditCard, HeartPulse 
} from 'lucide-react';

// --- MOCK DATA FOR TOP CARDS ---
const topCardsData = [
  { 
    id: 1, 
    title: 'Life Insurance', 
    subtitle: 'Unlimited protection', 
    icon: <ShieldCheck size={22} />, 
    bg: 'bg-[#eef2ff]', 
    color: 'text-[#4f46e5]' 
  },
  { 
    id: 2, 
    title: 'Shopping', 
    subtitle: 'Buy. Think. Grow.', 
    icon: <ShoppingBag size={22} />, 
    bg: 'bg-[#fef3c7]', 
    color: 'text-[#d97706]' 
  },
  { 
    id: 3, 
    title: 'Safety', 
    subtitle: 'We are your allies', 
    icon: <Shield size={22} />, 
    bg: 'bg-[#ccfbf1]', 
    color: 'text-[#0f766e]' 
  },
];

// --- MOCK DATA FOR LIST ---
const listData = [
  {
    id: 1,
    title: 'Business loans',
    subtitle: 'It is a long established',
    icon: <User size={18} />,
    bg: 'bg-[#fce7f3]',
    color: 'text-[#db2777]',
  },
  {
    id: 2,
    title: 'Checking accounts',
    subtitle: 'It is a long established',
    icon: <Briefcase size={18} />,
    bg: 'bg-[#fef3c7]',
    color: 'text-[#d97706]',
  },
  {
    id: 3,
    title: 'Savings accounts',
    subtitle: 'It is a long established',
    icon: <BarChart2 size={18} />,
    bg: 'bg-[#fce7f3]',
    color: 'text-[#db2777]',
  },
  {
    id: 4,
    title: 'Debit and credit cards',
    subtitle: 'It is a long established',
    icon: <CreditCard size={18} />,
    bg: 'bg-[#e0e7ff]',
    color: 'text-[#4338ca]',
  },
  {
    id: 5,
    title: 'Life Insurance',
    subtitle: 'It is a long established',
    icon: <HeartPulse size={18} />,
    bg: 'bg-[#ccfbf1]',
    color: 'text-[#0f766e]',
  },
  {
    id: 6,
    title: 'Business loans',
    subtitle: 'It is a long established',
    icon: <User size={18} />,
    bg: 'bg-[#fce7f3]',
    color: 'text-[#db2777]',
  },
];

// --- REUSABLE COMPONENTS ---

const TopCard = ({ title, subtitle, icon, bg, color }) => (
  <div className="bg-white rounded-2xl p-4 md:p-6 flex items-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${bg} ${color}`}>
      {icon}
    </div>
    <div>
      <h3 className="text-[16px] md:text-[18px] font-semibold text-[#1d1d1f] mb-1">{title}</h3>
      <p className="text-[13px] md:text-[14px] text-gray-500 font-medium">{subtitle}</p>
    </div>
  </div>
);

const ListItem = ({ title, subtitle, icon, bg, color }) => (
  <div className="bg-white rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
    
    {/* Left: Icon & Title */}
    <div className="flex items-center gap-4 w-full md:w-[240px] shrink-0">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bg} ${color}`}>
        {icon}
      </div>
      <div>
        <h4 className="text-[14px] md:text-[15px] font-semibold text-[#1d1d1f]">{title}</h4>
        <p className="text-[11px] md:text-[12px] text-gray-500 mt-0.5">{subtitle}</p>
      </div>
    </div>

    {/* Middle: Lorem Ipsum Details */}
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12 flex-1 w-full">
      <div>
        <p className="text-[13px] md:text-[14px] font-medium text-[#1d1d1f]">Lorem Ipsum</p>
        <p className="text-[11px] md:text-[12px] text-[#2563eb] mt-0.5">Many publishing</p>
      </div>
      <div>
        <p className="text-[13px] md:text-[14px] font-medium text-[#1d1d1f]">Lorem Ipsum</p>
        <p className="text-[11px] md:text-[12px] text-[#2563eb] mt-0.5">Many publishing</p>
      </div>
      <div className="hidden lg:block">
        <p className="text-[13px] md:text-[14px] font-medium text-[#1d1d1f]">Lorem Ipsum</p>
        <p className="text-[11px] md:text-[12px] text-[#2563eb] mt-0.5">Many publishing</p>
      </div>
    </div>

    {/* Right: Button */}
    <div className="w-full md:w-auto shrink-0 mt-2 md:mt-0">
      <button className="w-full md:w-auto border border-gray-300 text-[#2563eb] text-[12px] md:text-[13px] font-medium px-6 py-2 rounded-full hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition-all duration-300">
        View Details
      </button>
    </div>
    
  </div>
);

// --- MAIN PAGE COMPONENT ---
const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] p-4 md:p-2 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* --- SECTION 1: TOP CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
          {topCardsData.map((card) => (
            <TopCard key={card.id} {...card} />
          ))}
        </div>

        {/* --- SECTION 2: BANK SERVICES LIST --- */}
        <h2 className="text-[18px] md:text-[20px] font-semibold text-[#1d1d1f] mb-6">
          Bank Services List
        </h2>

        <div className="flex flex-col gap-4">
          {listData.map((item) => (
            <ListItem key={item.id} {...item} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;