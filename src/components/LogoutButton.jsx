import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../dummydata/AuthContext';
import { FiLogOut } from 'react-icons/fi'; // ✅ Import the icon

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="icon-button log-out w-12 h-12 flex items-center justify-center rounded-full hover:bg-indigo-900 border-2 hover:bg-opacity-80 transition-all duration-200"
      aria-label="Logout"
    >
      <FiLogOut className="text-white text-xl" /> {/* ✅ Add the icon */}
    </button>
  );
};

export default LogoutButton;