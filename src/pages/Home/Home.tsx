import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden w-full">
      <div className="mt-4 mb-16">
        <h1 className="text-6xl font-bold text-white drop-shadow-md">
          Prompt
          <span className="bg-orange-600 text-white rounded-[10px] px-5 py-1 ml-2">
            HUB
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
