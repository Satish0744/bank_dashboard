import React from 'react';
import { FiCheck, FiX, FiSettings } from 'react-icons/fi';
// Replaced FaFitness with FaHeartbeat
import { FaApple, FaMusic, FaCloud, FaTv, FaGamepad, FaNewspaper, FaHeartbeat } from 'react-icons/fa';

const services = [
  { id: 1, name: 'iCloud+', description: '2TB Storage Plan', price: '$9.99/mo', status: 'Active', icon: <FaCloud />, color: 'text-blue-500 bg-blue-50' },
  { id: 2, name: 'Apple Music', description: 'Individual Plan', price: '$10.99/mo', status: 'Active', icon: <FaMusic />, color: 'text-red-500 bg-red-50' },
  { id: 3, name: 'Apple TV+', description: 'Premium Streaming', price: '$9.99/mo', status: 'Active', icon: <FaTv />, color: 'text-gray-800 bg-gray-100' },
  { id: 4, name: 'Apple Arcade', description: 'Gaming Service', price: '$4.99/mo', status: 'Inactive', icon: <FaGamepad />, color: 'text-purple-500 bg-purple-50' },
  { id: 5, name: 'Apple News+', description: 'Magazines & News', price: '$9.99/mo', status: 'Inactive', icon: <FaNewspaper />, color: 'text-orange-500 bg-orange-50' },
  { id: 6, name: 'Apple Fitness+', description: 'Workout Classes', price: '$9.99/mo', status: 'Inactive', icon: <FaHeartbeat />, color: 'text-green-500 bg-green-50' },
];

const Services = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-darkBlue">Apple Services</h3>
        <button className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors shadow-md">Manage Subscriptions</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${service.color}`}>
                  {service.icon}
                </div>
                <div className={`flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full ${service.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                  {service.status === 'Active' ? <FiCheck /> : <FiX />} {service.status}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-darkBlue mb-1">{service.name}</h4>
              <p className="text-sm text-gray-400 mb-4">{service.description}</p>
              <p className="text-lg font-bold text-darkBlue">{service.price}</p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-100 flex gap-3">
              <button className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${service.status === 'Active' ? 'bg-lightBg text-darkBlue hover:bg-gray-200' : 'bg-primary text-white hover:bg-blue-700'}`}>
                {service.status === 'Active' ? 'Manage' : 'Subscribe'}
              </button>
              <button className="p-2 bg-lightBg text-gray-500 rounded-xl hover:bg-gray-200 transition-colors"><FiSettings /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;