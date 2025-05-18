import React from 'react';
import WeatherWidget from './homepage-components/WeatherWidget';
import ProfileCard from './homepage-components/ProfileCard';
import StepCounter from './homepage-components/StepCounter';
import BMICalculator from './homepage-components/BmiCalculator';
import DrillCard from './homepage-components/DrillCard';
import LogoutButton from './LogoutButton';

const MainContent = ({onCalculate}) => {
  return (
    
    <div className="main-content w-full max-w-[calc(100vw_-_300px)] mx-auto pb-20">
      {/* Header */}
      <header className="header flex items-center mb-6 pb-4 border-b border-white border-opacity-30">
        <h1 className="title text-3xl md:text-4xl font-bold text-indigo-900">Welcome back, JULIUS!</h1>
        {/* Search Bar (optional) */}
        <div className="search-bar ml-auto hidden md:flex bg-gray-200 rounded-md overflow-hidden w-56">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 bg-transparent text-gray-700 outline-none w-full"
          />
          <button className="bg-indigo-600 text-white p-2 hover:bg-indigo-700 transition">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5a6.5 6.5 0 1 0-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Top Widgets - Weather & Profile */}
      <section className="widgets mb-6 flex flex-col md:flex-row gap-6">
        <WeatherWidget />
        <ProfileCard />
      </section>

      {/* Step Counter + BMI Calculator */}
      <section className="steps-bmi-container flex flex-col md:flex-row gap-6 mb-6">
        <StepCounter steps={50000} goal={100000} calories={544} distance={3.1} />
        <BMICalculator onCalculate={onCalculate}/>
      </section>

      {/* Drill Cards */}
      <section className="drills mb-10">
        <h2 className="text-xl font-semibold mb-4 text-indigo-800">Your Drills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DrillCard title="Bicycle Drill" progress={75} details={[{ label: 'Distance', value: '150 km' }, { label: 'Time', value: '5 hrs' }]} />
          <DrillCard title="Jogging Drill" progress={30} details={[{ label: 'Distance', value: '30 km' }, { label: 'Time', value: '1 hr' }]} />
          <DrillCard title="Sports Drill" progress={60} details={[{ label: 'Distance', value: '15 km' }, { label: 'Time', value: '1.5 hrs' }]} />
        </div>
        
      </section>
    </div>
  );
};

export default MainContent;