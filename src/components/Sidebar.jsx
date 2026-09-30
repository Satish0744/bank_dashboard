import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FiHome, FiCreditCard, FiPieChart, FiTrendingUp, 
  FiBriefcase, FiTool, FiAward, FiSettings 
} from 'react-icons/fi';
import { FaApple } from 'react-icons/fa';

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
      <div className="flex items-center gap-3 p-6 border-b border-gray-100">
        <FaApple className="text-3xl text-primary" />
        <h1 className="text-2xl font-bold text-darkBlue">AppleDash.</h1>
      </div>
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