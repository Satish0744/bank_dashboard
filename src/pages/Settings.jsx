import React, { useState } from 'react';
import { Check, ChevronDown, User } from 'lucide-react';

// --- REUSABLE COMPONENTS ---

const InputField = ({ label, placeholder, type = 'text', isSelect = false }) => (
  <div className="w-full">
    <label className="block text-[13px] font-medium text-gray-500 mb-2">{label}</label>
    <div className="relative">
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] text-[14px] text-gray-700 transition-all duration-300"
      />
      {isSelect && (
        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      )}
    </div>
  </div>
);

const ToggleSwitch = ({ label, defaultChecked = false }) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <div className="flex items-center gap-4 py-2">
      <button 
        type="button"
        onClick={() => setIsChecked(!isChecked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${isChecked ? 'bg-[#14b8a6]' : 'bg-gray-300'}`}
      >
        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${isChecked ? 'translate-x-6' : 'translate-x-1'}`} />
      </button>
      <span className="text-[14px] text-gray-600 font-medium">{label}</span>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="animate-in fade-in duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Avatar */}
              <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
                <div className="relative">
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-100 flex items-center justify-center">
                    {/* Placeholder image, replace with actual user avatar */}
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-1 right-1 bg-[#2563eb] rounded-full p-1.5 border-2 border-white shadow-sm">
                    <Check size={12} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Right Column: Form Fields */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <InputField label="Your Name" placeholder="Charlene Reed" />
                <InputField label="User Name" placeholder="Charlene Reed" />
                <InputField label="Email" placeholder="charlenereed@gmail.com" type="email" />
                <InputField label="Password" placeholder="********" type="password" />
                <InputField label="Date of Birth" placeholder="25 January 1990" isSelect />
                <InputField label="Present Address" placeholder="San Jose, California, USA" />
                <InputField label="Permanent Address" placeholder="San Jose, California, USA" />
                <InputField label="City" placeholder="San Jose" />
                <InputField label="Postal Code" placeholder="45962" />
                <InputField label="Country" placeholder="USA" />
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end mt-8">
              <button className="w-full md:w-auto bg-[#2563eb] text-white px-10 py-3 rounded-xl font-medium text-[14px] hover:bg-[#1d4ed8] transition-colors shadow-sm">
                Save
              </button>
            </div>
          </div>
        );

      case 'preferences':
        return (
          <div className="animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-8">
              <InputField label="Currency" placeholder="USD" isSelect />
              <InputField label="Time Zone" placeholder="(GMT-12:00) International Date Line West" isSelect />
            </div>

            <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-4">Notification</h3>
            <div className="flex flex-col gap-1">
              <ToggleSwitch label="I send or receive digita currency" defaultChecked={true} />
              <ToggleSwitch label="I receive merchant order" defaultChecked={false} />
              <ToggleSwitch label="There are recommendation for my account" defaultChecked={true} />
            </div>

            <div className="flex justify-end mt-8">
              <button className="w-full md:w-auto bg-[#2563eb] text-white px-10 py-3 rounded-xl font-medium text-[14px] hover:bg-[#1d4ed8] transition-colors shadow-sm">
                Save
              </button>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="animate-in fade-in duration-500">
            <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-2">Two-factor Authentication</h3>
            <ToggleSwitch label="Enable or disable two factor authentication" defaultChecked={true} />

            <h3 className="text-[15px] font-semibold text-[#1d1d1f] mt-8 mb-4">Change Password</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              <InputField label="Current Password" placeholder="********" type="password" />
              <InputField label="New Password" placeholder="********" type="password" />
            </div>

            <div className="flex justify-end mt-8">
              <button className="w-full md:w-auto bg-[#2563eb] text-white px-10 py-3 rounded-xl font-medium text-[14px] hover:bg-[#1d4ed8] transition-colors shadow-sm">
                Save
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] p-2 md:p-2 font-sans flex justify-center items-start pt-10">
      <div className="w-full max-w-[1024px] bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
        
        {/* --- TABS NAVIGATION --- */}
        <div className="flex gap-8 border-b border-gray-200 mb-8 overflow-x-auto no-scrollbar">
          {['profile', 'preferences', 'security'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-[14px] font-medium transition-colors duration-300 whitespace-nowrap ${
                activeTab === tab 
                  ? 'text-[#2563eb] border-b-2 border-[#2563eb]' 
                  : 'text-gray-400 hover:text-gray-600 border-b-2 border-transparent'
              }`}
            >
              {tab === 'profile' ? 'Edit Profile' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* --- TAB CONTENT --- */}
        {renderContent()}

      </div>
    </div>
  );
};

export default SettingsPage;