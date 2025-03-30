import React from 'react';
import { useStore } from '../../store/useStore';
import OpenAIVersionDropdown from './HomePageComponents/OpenAIVersionDropdown';
import RoleDropdown from './HomePageComponents/RoleDropdown';
import ContentDropdown from './HomePageComponents/ContentDropdown';

const Header: React.FC = () => {
  const { toggleSidebar, isSidebarOpen } = useStore(); // Access the toggleSidebar function from store

  return (
    <header className="w-full bg-gray-900 text-white px-4 py-2 flex items-center border-b border-gray-700 fixed top-0 left-0 right-0 h-[60px] z-10">
      <h4 className="text-2xl font-bold drop-shadow-md">
        Prompt
        <span className="bg-orange-600 text-white rounded-[10px] px-2 py-1 ml-1">
          HUB
        </span>
      </h4>
      <button
        onClick={toggleSidebar}
        className="px-6 py-2 text-white bg-violet-600 rounded-md hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500 ml-4 border-2 border-orange-500"
      >
        {isSidebarOpen ? 'Hide sidebar' : 'Show sidebar'}
      </button>
      <div className="ml-4">
        <OpenAIVersionDropdown />
      </div>
      <div className="ml-4">
        <RoleDropdown />
      </div>
      <div className="ml-4">
        <ContentDropdown />
      </div>
    </header>
  );
};

export default Header;
