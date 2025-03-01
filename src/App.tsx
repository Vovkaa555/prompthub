import React from 'react';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <AppRoutes />
    </div>
  );
};

export default App;
