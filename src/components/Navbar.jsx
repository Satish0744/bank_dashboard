import React, { useState } from 'react';
import { FiSearch, FiSettings, FiBell, FiLogOut, FiUser, FiMenu } from 'react-icons/fi';

const Navbar = ({ toggleSidebar }) => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="bg-white px-6 py-4 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle Button - Replaced Apple logo with 3-bar hamburger menu */}
        <button onClick={toggleSidebar} className="md:hidden text-2xl text-darkBlue">
          <FiMenu />
        </button>
        <h2 className="text-2xl font-semibold text-darkBlue hidden sm:block">Overview</h2>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        {/* Search Bar */}
        <div className="relative hidden sm:block">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search for something..." 
            className="bg-lightBg pl-10 pr-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-primary/50 text-sm w-48 lg:w-64 transition-all"
          />
        </div>

        {/* Icons */}
        <button className="bg-lightBg p-2 rounded-full text-gray-500 hover:text-primary transition-colors hover:scale-105">
          <FiSettings className="text-xl" />
        </button>
        <button className="bg-lightBg p-2 rounded-full text-gray-500 hover:text-primary transition-colors hover:scale-105 relative">
          <FiBell className="text-xl" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button onClick={() => setShowProfile(!showProfile)} className="flex items-center gap-2">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" 
              alt="Profile" 
              className="w-10 h-10 rounded-full border-2 border-primary object-cover hover:scale-105 transition-transform"
            />
          </button>
          
          {showProfile && (
            <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
              <button className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 w-full text-left text-gray-700 transition-colors">
                <FiUser /> My Profile
              </button>
              <button className="flex items-center gap-3 px-4 py-2 hover:bg-red-50 w-full text-left text-red-500 transition-colors">
                <FiLogOut /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;