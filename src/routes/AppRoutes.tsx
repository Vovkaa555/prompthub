import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useStore } from '../store/useStore'; // Import the Zustand store
import Home from '../pages/Home/Home';
import Landing from '../pages/Auth/Landing';

const AppRoutes: React.FC = () => {
  const { storedApiKey } = useStore(); // Get the storedApiKey from the Zustand store

  return (
    <Router basename="/">
      <Routes>
        {/* Redirect to /home if storedApiKey exists, otherwise show Landing */}
        <Route path="/" element={<Landing />} />

        {/* Protected route for Home, only accessible if storedApiKey exists */}
        <Route
          path="/home"
          element={storedApiKey ? <Home /> : <Navigate to="/" replace />} // Redirect to / if no storedApiKey
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
