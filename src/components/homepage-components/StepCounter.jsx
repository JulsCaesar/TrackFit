import React from 'react';

const StepCounter = ({ steps = 50000, goal = 100000 }) => {
  const percentage = Math.round((steps / goal) * 100);

  return (
    <div className="step-counter-widget bg-indigo-900 text-white rounded-2xl shadow-lg w-[470px] h-[500px] p-5 mb-6 mx-auto flex flex-col items-center justify-between">
      
      {/* Progress Circle */}
      <div className="progress-container relative w-52 h-52 mb-6">
        {/* Outer ring (background) */}
        <div className="absolute top-0 left-0 w-full h-full border-8 border-indigo-600 rounded-full"></div>

        {/* Inner progress bar (rotated in real app) */}
        <div className="absolute top-0 left-0 w-full h-full border-8 border-white border-b-transparent border-l-transparent rounded-full animate-[rotate_-90deg]"></div>

        {/* Centered step count */}
        <div className="steps-info absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="steps-count text-5xl font-bold">{steps}</div>
          <div className="steps-label mt-2 opacity-70">STEPS</div>
          <div className="progress-percent mt-2 opacity-70">{percentage}%</div>
        </div>
      </div>

      {/* Goal Section */}
      <div className="goal-section text-center">
        <div className="goal-label text-sm opacity-70">GOAL</div>
        <div className="goal-value text-3xl font-bold">{goal}</div>
      </div>

      {/* Stats Row (Calories & Distance) */}
      <div className="stats-row w-full px-4 mt-auto">
        <div className="flex justify-around w-full gap-10">
          <div className="stat-item flex flex-col items-center">
            <span className="text-2xl">🔥</span>
            <span className="mt-1 text-xl font-medium">{(steps / 1000).toFixed(1)}</span>
            <span className="opacity-70">km</span>
          </div>

          <div className="stat-item flex flex-col items-center">
            <span className="text-2xl">🍽️</span>
            <span className="mt-1 text-xl font-medium">{Math.round(steps / 1000 * 0.045 * 1000)}</span>
            <span className="opacity-70">kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCounter;