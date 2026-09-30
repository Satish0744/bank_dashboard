import React, { useState } from 'react';
import { FiUser, FiMail, FiLock, FiBell, FiMoon, FiGlobe, FiSave } from 'react-icons/fi';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: <FiUser /> },
    { id: 'security', name: 'Security', icon: <FiLock /> },
    { id: 'notifications', name: 'Notifications', icon: <FiBell /> },
    { id: 'preferences', name: 'Preferences', icon: <FiGlobe /> },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm animate-in fade-in duration-500">
      <h3 className="text-xl font-semibold text-darkBlue mb-6">Settings</h3>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="w-full md:w-64 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                activeTab === tab.id ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <span className="text-lg">{tab.icon}</span> {tab.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="flex items-center gap-6 pb-6 border-b border-gray-100">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" alt="Profile" className="w-20 h-20 rounded-full object-cover border-4 border-lightBg" />
                <div>
                  <button className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors shadow-md">Change Avatar</button>
                  <p className="text-xs text-gray-400 mt-2">JPG, GIF or PNG. Max size 2MB.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-darkBlue mb-2">Full Name</label>
                  <input type="text" defaultValue="Eddy Cusuma" className="w-full bg-lightBg p-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-darkBlue mb-2">Email Address</label>
                  <input type="email" defaultValue="eddy@apple.com" className="w-full bg-lightBg p-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-darkBlue mb-2">Phone Number</label>
                  <input type="text" defaultValue="+1 (555) 000-0000" className="w-full bg-lightBg p-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-darkBlue mb-2">Location</label>
                  <input type="text" defaultValue="Cupertino, CA" className="w-full bg-lightBg p-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <button className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-md flex items-center gap-2">
                  <FiSave /> Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-darkBlue mb-4">Security Settings</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-lightBg rounded-2xl">
                  <div>
                    <p className="font-medium text-darkBlue text-sm">Two-Factor Authentication</p>
                    <p className="text-xs text-gray-400">Add an extra layer of security to your account.</p>
                  </div>
                  <div className="w-12 h-6 bg-green-500 rounded-full relative cursor-pointer">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-lightBg rounded-2xl">
                  <div>
                    <p className="font-medium text-darkBlue text-sm">Change Password</p>
                    <p className="text-xs text-gray-400">Last changed 3 months ago.</p>
                  </div>
                  <button className="text-primary text-sm font-medium hover:underline">Update</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-darkBlue mb-4">Notification Preferences</h4>
              <div className="space-y-4">
                {['Transaction Alerts', 'Promotional Emails', 'Security Alerts', 'Product Updates'].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-lightBg rounded-2xl">
                    <p className="font-medium text-darkBlue text-sm">{item}</p>
                    <div className={`w-12 h-6 rounded-full relative cursor-pointer ${idx % 2 === 0 ? 'bg-primary' : 'bg-gray-300'}`}>
                      <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${idx % 2 === 0 ? 'right-0.5' : 'left-0.5'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-darkBlue mb-4">App Preferences</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-lightBg rounded-2xl">
                  <div className="flex items-center gap-3">
                    <FiMoon className="text-gray-500" />
                    <p className="font-medium text-darkBlue text-sm">Dark Mode</p>
                  </div>
                  <div className="w-12 h-6 bg-gray-300 rounded-full relative cursor-pointer">
                    <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-lightBg rounded-2xl">
                  <div className="flex items-center gap-3">
                    <FiGlobe className="text-gray-500" />
                    <p className="font-medium text-darkBlue text-sm">Language</p>
                  </div>
                  <select className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-sm outline-none">
                    <option>English (US)</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;