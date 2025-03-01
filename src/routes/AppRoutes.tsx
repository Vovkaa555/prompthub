import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useStore } from '../store/useStore'; // Import the Zustand store
import Home from '../pages/Home/Home';
import Landing from '../pages/Auth/Landing';

const AppRoutes: React.FC = () => {
  const { storedApiKey } = useStore(); // Get the storedApiKey from the Zustand store

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={storedApiKey ? <Home /> : <Landing />} // Conditionally render Landing or Home based on storedApiKey
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
