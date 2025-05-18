import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar'; // ✅ Import the calendar
import 'react-calendar/dist/Calendar.css'; // ✅ Import default styles

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(new Date()); // ✅ State for selected date

  const API_KEY = '8f952ca849d6c428dfd33fcd793c7e4a';
  const CITY = 'Lucena City';

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q= ${CITY}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [API_KEY, CITY]);

  const temperature = Math.round(weatherData?.main?.temp || 0);
  const location = weatherData?.name || 'Unknown Location';
  const dateTime = new Date().toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div className="weather-widget bg-purple-200 border border-purple-300 rounded-xl shadow-md w-full max-w-sm mx-auto p-4 sm:p-6 text-center">
      
      {/* Temperature & Info */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
        <div className="temp-color bg-indigo-800 text-white font-bold text-3xl px-6 py-3 rounded-lg text-center">
          {temperature}°
        </div>
        <div className="flex flex-col justify-center">
          <div className="location text-indigo-900 text-xl font-bold">{location}</div>
          <div className="date-time text-gray-600 text-sm">{dateTime}</div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="calendar-container bg-white p-4 rounded-lg shadow-inner">
        <h3 className="text-lg font-semibold mb-2 text-indigo-900">Set Schedule</h3>
        <Calendar onChange={setDate} value={date} className="mx-auto" />
        
        {/* Optional: Display Selected Date */}
        <p className="mt-2 text-sm text-gray-600">
          Selected Date: <strong>{date.toDateString()}</strong>
        </p>

        {/* Example Button to Save or Use Date */}
        <button
          onClick={() => alert(`Schedule set for ${date.toDateString()}`)}
          className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded"
        >
          Set Reminder
        </button>
      </div>
    </div>
  );
};

export default WeatherWidget;