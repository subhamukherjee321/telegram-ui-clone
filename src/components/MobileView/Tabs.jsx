import React, { useState } from 'react';
import AllChat from './TabChats/AllChat';
import ChatList from '../desktop/ChatList';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('All Chats');

  const tabs = ['All Chats', 'Active', 'Unread', 'Regulars'];

  return (
    <div className="w-full max-w-md mx-auto text-white">
      <div className="flex space-x-4 bg-[#40a4c4] px-4 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-2 px-0 font-semibold whitespace-nowrap ${
              activeTab === tab ? 'border-b-4 border-white' : 'border-b-2 border-transparent'
            } transition duration-300 ease-in-out`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className='px-4 pt-2'>
        <div
          className={`transform transition-transform duration-500 ease-in-out ${
            activeTab === 'All Chats' ? 'translate-x-0' : ''
          } ${activeTab === 'Active' ? 'translate-x-full' : ''} ${
            activeTab === 'Unread' ? 'translate-x-0' : ''
          } ${activeTab === 'Regulars' ? 'translate-x-3xl' : ''}`}
        >
          {activeTab === 'All Chats' && <ChatList />}
          {activeTab === 'Active' && <div className='text-2xl text-black bg-red-600'>Active Content</div>}
          {activeTab === 'Unread' && <div className='text-2xl text-black'>Unread Content</div>}
          {activeTab === 'Regulars' && <div className='text-2xl text-black'>Regulars Content</div>}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
