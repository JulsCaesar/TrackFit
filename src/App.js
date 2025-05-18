// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

// Components
import LoginScreen from './components/GoogleLogin';
import MainContent from './components/MainContent';
import ProgressPage from './components/Progress';
import DrillCard from './components/homepage-components/DrillCard';
import Sidebar from './components/SideBar';
import AchievementDisplay from './components/AchievementDisplay';

// Hook
import useBMICategory from './dummydata/useBMICategory'; // ✅ Import here

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const { category, calculateCategory } = useBMICategory(); // ✅ Shared state

  useEffect(() => {
    const token = localStorage.getItem('google_token');
    if (token) setIsLoggedIn(true);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Login Route */}
        <Route path="/login" element={!isLoggedIn ? <LoginScreen /> : <Navigate to="/" />} />

        {/* Protected Layout with Sidebar */}
        <Route path="/" element={<DashboardLayout isLoggedIn={isLoggedIn} />}>
          <Route index element={<MainContent onCalculate={calculateCategory} />} />
          <Route path="progress" element={<ProgressPage />} />

          {/* Pass category down to AchievementDisplay */}
          <Route path="achievements" element={<AchievementDisplay category={category} />} />

          <Route path="activity" element={<DrillCard />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}

const DashboardLayout = ({ isLoggedIn }) => {
  return (
    <div className="app-container flex h-screen bg-[#f8f8ff]">
      <Sidebar />
      <div className="content flex-1 p-6 overflow-y-auto w-full ml-16 md:ml-20 lg:ml-24">
        <Outlet />
      </div>
    </div>
  );
};

export default App;