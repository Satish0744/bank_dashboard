import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';

const contacts = [
  { id: 1, name: 'Livia Bator', role: 'CEO', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
  { id: 2, name: 'Randy Press', role: 'Director', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80' },
  { id: 3, name: 'Workman', role: 'Designer', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80' },
];

const QuickTransfer = () => {
  const [amount, setAmount] = useState('');

  return (
    <div className="flex-1 bg-white p-6 rounded-3xl shadow-sm">
      <h3 className="text-xl font-semibold text-darkBlue mb-6">Quick Transfer</h3>
      <div className="flex gap-4 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex flex-col items-center min-w-[80px] cursor-pointer group">
            <img src={contact.img} alt={contact.name} className="w-16 h-16 rounded-full object-cover mb-2 group-hover:ring-2 ring-primary transition-all" />
            <p className="text-xs font-semibold text-darkBlue text-center">{contact.name}</p>
            <p className="text-[10px] text-gray-400">{contact.role}</p>
          </div>
        ))}
        <button className="w-12 h-12 rounded-full bg-lightBg flex items-center justify-center text-primary hover:bg-blue-50 transition-colors self-center">
          &gt;
        </button>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-sm text-gray-500 whitespace-nowrap">Write Amount</p>
        <div className="flex-1 bg-lightBg rounded-full flex items-center px-4 py-2">
          <span className="text-gray-400 mr-2">$</span>
          <input 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="525.50" 
            className="bg-transparent outline-none w-full text-darkBlue font-medium"
          />
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
          Send <FiSend />
        </button>
      </div>
    </div>
  );
};

export default QuickTransfer;