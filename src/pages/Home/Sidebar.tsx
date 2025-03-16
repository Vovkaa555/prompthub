import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full p-4 border-r border-gray-700 flex flex-col ">
      <h2 className="text-xl font-semibold mb-4">Chats</h2>
      <div className="space-y-2 overflow-y-auto">
        {/* Placeholder for chat items */}
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition"
          >
            Chat {index + 1}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
