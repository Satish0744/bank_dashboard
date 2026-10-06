import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FiHome, FiCreditCard, FiPieChart, FiTrendingUp, 
  FiBriefcase, FiTool, FiAward, FiSettings 
} from 'react-icons/fi';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { name: 'Dashboard', icon: <FiHome />, path: '/' },
    { name: 'Transactions', icon: <FiTrendingUp />, path: '/transactions' },
    { name: 'Accounts', icon: <FiBriefcase />, path: '/accounts' },
    { name: 'Investments', icon: <FiPieChart />, path: '/investments' },
    { name: 'Credit Cards', icon: <FiCreditCard />, path: '/credit-cards' },
    { name: 'Loans', icon: <FiAward />, path: '/loans' },
    { name: 'Services', icon: <FiTool />, path: '/services' },
    { name: 'My Privileges', icon: <FiAward />, path: '/privileges' },
    { name: 'Setting', icon: <FiSettings />, path: '/settings' },
  ];

  return (
    <div className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
      
      {/* --- LOGO SECTION --- */}
      <div className="flex items-center gap-3 p-6 border-b border-gray-100">
        {/* Custom Stacked Cards Logo */}
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Back Card */}
          <rect 
            x="12" 
            y="6" 
            width="14" 
            height="12" 
            rx="2" 
            stroke="#2563eb" 
            strokeWidth="2.5" 
          />
          {/* Front Card */}
          <rect 
            x="6" 
            y="10" 
            width="14" 
            height="12" 
            rx="2" 
            fill="white" 
            stroke="#2563eb" 
            strokeWidth="2.5" 
          />
          {/* Pink Dash on Front Card */}
          <rect 
            x="9" 
            y="17" 
            width="4" 
            height="2" 
            rx="1" 
            fill="#ec4899" 
          />
        </svg>
        
        {/* Text */}
        <h1 className="text-[22px] font-extrabold text-[#1e3a8a] tracking-tight">
          BankDash.
        </h1>
      </div>

      {/* --- NAVIGATION LINKS --- */}
      <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-80px)]">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            onClick={toggleSidebar}
            className={({ isActive }) => 
              `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'text-primary bg-blue-50 border-l-4 border-primary font-semibold' 
                  : 'text-gray-500 hover:text-primary hover:bg-gray-50'
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;