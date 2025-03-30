import React from 'react';
import { useStore } from '../../store/useStore';

const Sidebar: React.FC = () => {
  const { chats } = useStore();

  return (
    <aside className="w-64 bg-gray-800 text-white h-full p-4 border-r border-gray-700 flex flex-col ">
      <h2 className="text-xl font-semibold mb-4">Chats</h2>
      <div className="space-y-2 overflow-y-auto">
        {chats.length === 0 ? (
          <p className="text-gray-400">No chats yet</p>
        ) : (
          chats.map((chat) => (
            <div
              key={chat.id}
              className="p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition"
            >
              {chat.title}
            </div>
          ))
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
