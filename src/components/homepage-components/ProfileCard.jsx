import React from 'react';


const ProfileCard = () => {
  return (
    <div className="user1-card-container bg-white rounded-3xl shadow-lg w-full max-w-md mx-auto p-6 text-center relative">
      
      {/* User Info */}
      <div className="user1-card-header flex flex-col items-center">
        <h2 className="user1-card-name text-2xl font-bold text-gray-800">Julius Reyes</h2>
        <p className="user1-card-subtitle text-lg text-indigo-900">Student</p>

        {/* Profile Image */}
        <div className="user1-card-picture-container mt-4">
          {/* <img
            src={arianaImage}
            alt="User"
            className="user1-card-picture w-28 h-28 object-cover border-4 border-white rounded-lg shadow-md"
          /> */}
        </div>
      </div>

      {/* Stats */}
      <div className="user1-card-stats grid grid-cols-3 gap-4 mt-6">
        <div className="user1-card-stat-item bg-indigo-100 text-indigo-900 p-4 rounded-lg">
          <div className="user1-card-stat-label text-sm font-semibold text-indigo-700">HEIGHT</div>
          <div className="user1-card-stat-value text-xl font-bold">120 CM</div>
        </div>
        <div className="user1-card-stat-item bg-indigo-100 text-indigo-900 p-4 rounded-lg">
          <div className="user1-card-stat-label text-sm font-semibold text-indigo-700">WEIGHT</div>
          <div className="user1-card-stat-value text-xl font-bold">30 KG</div>
        </div>
        <div className="user1-card-stat-item bg-indigo-100 text-indigo-900 p-4 rounded-lg">
          <div className="user1-card-stat-label text-sm font-semibold text-indigo-700">AGE</div>
          <div className="user1-card-stat-value text-xl font-bold">25</div>
        </div>
      </div>

      {/* Goals */}
      <div className="user1-card-goals mt-6 space-y-4">
        <h3 className="user1-card-goals-title font-bold text-lg text-left text-gray-700">Monthly Goals</h3>

        {/* Sleep Goal */}
        <div className="user1-card-goal-item flex items-center justify-between">
          <span className="goal-label font-medium text-gray-700">Sleep</span>
          <div className="activity-progress-container w-2/3 bg-gray-200 rounded-full h-3">
            <div className="activity-progress-inner w-[75%] h-full bg-green-500 rounded-full" style={{ width: "75%" }}></div>
          </div>
          <span className="activity-progress-value text-sm ml-2 text-gray-600">225 hr / 300 hr</span>
        </div>

        {/* Running Goal */}
        <div className="user1-card-goal-item flex items-center justify-between">
          <span className="goal-label font-medium text-gray-700">Running</span>
          <div className="activity-progress-container w-2/3 bg-gray-200 rounded-full h-3">
            <div className="activity-progress-inner w-[50%] h-full bg-blue-500 rounded-full" style={{ width: "50%" }}></div>
          </div>
          <span className="activity-progress-value text-sm ml-2 text-gray-600">60 km / 120 km</span>
        </div>

        {/* Weight Loss Goal */}
        <div className="user1-card-goal-item flex items-center justify-between">
          <span className="goal-label font-medium text-gray-700">Lose Weight</span>
          <div className="activity-progress-container w-2/3 bg-gray-200 rounded-full h-3">
            <div className="activity-progress-inner w-[10%] h-full bg-red-500 rounded-full" style={{ width: "10%" }}></div>
          </div>
          <span className="activity-progress-value text-sm ml-2 text-gray-600">0.6 kg / 6 kg</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;