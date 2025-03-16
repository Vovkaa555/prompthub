import React from 'react';
import Sidebar from './Sidebar';
import { useStore } from '../../store/useStore';
import Header from './Header';
import Chat from './HomePageComponents/Chat';

const Home: React.FC = () => {
  const { isSidebarOpen } = useStore(); // Get sidebar state from the store

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Fixed Header */}
      <Header />

      {/* Content container: pushed down by header height */}
      <div className="flex mt-[60px] h-[calc(100vh-60px)]">
        {/* Sidebar */}
        {isSidebarOpen && <Sidebar />}

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center pt-8 px-8">
          <Chat /> {/* Insert the Chat component here */}
        </div>
      </div>
    </div>
  );
};

export default Home;
