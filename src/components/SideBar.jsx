import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChartLine,
  faTrophy,
  faDumbbell,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import LogoutButton from './LogoutButton';

export default function Sidebar() {
  return (
    <div className="sidebar fixed top-5 left-5 w-16 h-[calc(100vh_-_40px)] bg-purple-700 text-white rounded-xl shadow-lg p-4 flex flex-col justify-between z-50">
      
      {/* Top Section */}
      <div className="top-section flex flex-col items-center space-y-6">
        {/* Profile Icon */}
        <div className="icon-button profile w-12 h-12 flex items-center justify-center rounded-full bg-indigo-900 hover:bg-indigo-800 cursor-pointer transition-all duration-200">
          <FontAwesomeIcon icon={faUser} size="lg" />
        </div>

        <div className="separator w-10 h-px bg-white bg-opacity-50 my-4"></div>

        {/* Home Button */}
        <Link to="/" className="icon-button home w-12 h-12 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200">
          <FontAwesomeIcon icon={faHome} size="lg" />
        </Link>

        {/* Progress Button */}
        <Link to="/progress" className="icon-button progress w-12 h-12 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200">
          <FontAwesomeIcon icon={faChartLine} size="lg" />
        </Link>

        {/* Achievements Button */}
        <Link to="/achievements" className="icon-button achievements w-12 h-12 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200">
          <FontAwesomeIcon icon={faTrophy} size="lg" />
        </Link>

        {/* Activity / Drill Card Button */}
        <Link to="/activity" className="icon-button todo w-12 h-12 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200">
          <FontAwesomeIcon icon={faDumbbell} size="lg" />
        </Link>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section flex flex-col items-center space-y-6">
        <div className="separator w-10 h-px bg-white bg-opacity-50 my-4"></div>
        
        {/* Log Out Button */}
          <LogoutButton/>
      </div>
    </div>
  );
}