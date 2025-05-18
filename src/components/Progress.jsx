import React from 'react';

const ProgressPage = () => {
  return (
    <div className="layout flex flex-col h-full min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Content Container */}
      <div className="content w-full max-w-7xl mx-auto">
        
        {/* Top Section with Title and Filter Buttons */}
        <div className="top-section mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="title text-2xl md:text-4xl font-bold text-indigo-900">MONTHLY PROGRESS</h1>
            <p className="subtitle text-base md:text-lg text-gray-600 mt-2">Keep Going, Julius!</p>
          </div>

          {/* Filter Buttons (Stacked on small screens) */}
          <div className="filter-buttons flex flex-wrap gap-3 justify-end">
            <button className="filter-btn bg-white text-indigo-900 border-2 border-indigo-900 rounded-md px-4 py-2 transition hover:bg-indigo-50 active:bg-indigo-700 active:text-white">
              This Week
            </button>
            <button className="filter-btn bg-white text-indigo-900 border-2 border-indigo-900 rounded-md px-4 py-2 transition hover:bg-indigo-50">
              This Month
            </button>
          </div>
        </div>

        {/* Main Body: Graph + Info */}
        <div className="main-body flex flex-col lg:flex-row gap-8">
          
          {/* Graph Wrapper */}
          <div className="graph-wrapper w-full lg:w-[60vw] max-w-[500px] aspect-square self-center lg:self-start">
            {/* Circles for graph effect */}
            <div className="circle outer relative w-full h-full">
              <div className="absolute inset-0 rounded-full border-8 border-t-indigo-700 border-l-indigo-700 border-r-indigo-700 border-b-indigo-700" style={{ transform: 'rotate(70deg)' }}></div>
              
              <div className="absolute top-[12%] left-[12%] w-[76%] h-[76%]" style={{ transform: 'rotate(100deg)' }}>
                <div className="w-full h-full border-8 border-t-purple-400 border-l-purple-400 border-r-purple-400 border-b-purple-400 rounded-full"></div>
              </div>

              <div className="absolute top-[24%] left-[24%] w-[52%] h-[52%]" style={{ transform: 'rotate(140deg)' }}>
                <div className="w-full h-full border-8 border-t-violet-300 border-l-violet-300 border-r-violet-300 border-b-violet-300 rounded-full"></div>
              </div>

              <div className="absolute top-[36%] left-[36%] w-[28%] h-[28%]" style={{ transform: 'rotate(180deg)' }}>
                <div className="w-full h-full border-8 border-t-indigo-200 border-l-indigo-200 border-r-indigo-200 border-b-indigo-200 rounded-full"></div>
              </div>

              {/* Center Label */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-2xl font-semibold text-indigo-900">
                75%
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="info w-full lg:max-w-md">
            {/* Stats */}
            <div className="stats flex flex-col">
              <h2 className="percent text-4xl font-extrabold text-indigo-900">75%</h2>
              <p className="description text-sm md:text-base text-gray-600">Goal Completion</p>
            </div>

            {/* Drills Box */}
            <div className="drills-box mt-6 bg-gradient-to-b from-purple-700 to-indigo-800 p-6 rounded-xl shadow-md text-white">
              <div className="drill mb-5">
                <div className="drill-top flex justify-between items-center">
                  <span className="flex items-center">
                    <span className="dot dark w-3 h-3 rounded-full mr-2"></span>
                    Bicycle Drill
                  </span>
                  <span>50%</span>
                </div>
                <p className="drill-sub text-sm text-gray-200 ml-6 mt-1">25 km / 50 km</p>
              </div>

              <div className="drill mb-5">
                <div className="drill-top flex justify-between items-center">
                  <span className="flex items-center">
                    <span className="dot mid w-3 h-3 rounded-full mr-2"></span>
                    Jogging Drill
                  </span>
                  <span>96%</span>
                </div>
                <p className="drill-sub text-sm text-gray-200 ml-6 mt-1">28 km / 30 km</p>
              </div>

              <div className="drill">
                <div className="drill-top flex justify-between items-center">
                  <span className="flex items-center">
                    <span className="dot light w-3 h-3 rounded-full mr-2"></span>
                    Sports Drill
                  </span>
                  <span>78%</span>
                </div>
                <p className="drill-sub text-sm text-gray-200 ml-6 mt-1">1 hr / 2 hrs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;