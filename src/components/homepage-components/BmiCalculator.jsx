import React, { useState } from 'react';

function BMICalculator({ onCalculate }) {
  const [age, setAge] = useState(25);
  const [weight, setWeight] = useState(30);
  const [height, setHeight] = useState(120);
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      const roundedBMI = parseFloat(bmiValue.toFixed(1));
      setBMI(roundedBMI);

      // Optional: send data to parent component
      if (onCalculate) {
        onCalculate({ bmi: roundedBMI });
      }
    } else {
      setBMI(null);
    }
  };

  return (
    <div className="bmi-calculator-widget bg-indigo-900 text-white rounded-2xl shadow-lg w-full max-w-md mx-auto p-6 flex flex-col justify-between h-[450px]">
      <h2 className="text-2xl font-bold mb-4">BMI CALCULATOR</h2>

      {/* Age Input */}
      <div className="input-group mb-5">
        <label className="input-label block text-sm opacity-70 mb-1">AGE</label>
        <div className="input-controls flex items-center justify-center gap-3 bg-indigo-800 rounded-lg px-4 py-2">
          <button
            onClick={() => setAge(prev => Math.max(1, prev - 1))}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-700 hover:bg-indigo-600 transition-all"
          >
            -
          </button>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
            className="w-16 text-center bg-transparent outline-none text-xl font-semibold"
          />
          <button
            onClick={() => setAge(prev => prev + 1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-700 hover:bg-indigo-600 transition-all"
          >
            +
          </button>
        </div>
      </div>

      {/* Weight Input */}
      <div className="input-group mb-5">
        <label className="input-label block text-sm opacity-70 mb-1">WEIGHT (kg)</label>
        <div className="input-controls flex items-center justify-center gap-3 bg-indigo-800 rounded-lg px-4 py-2">
          <button
            onClick={() => setWeight(prev => Math.max(1, prev - 1))}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-700 hover:bg-indigo-600 transition-all"
          >
            -
          </button>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
            className="w-16 text-center bg-transparent outline-none text-xl font-semibold"
          />
          <button
            onClick={() => setWeight(prev => prev + 1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-700 hover:bg-indigo-600 transition-all"
          >
            +
          </button>
        </div>
      </div>

      {/* Height Slider */}
      <div className="height-group mb-6">
        <label className="block text-sm opacity-70 mb-1">HEIGHT (cm)</label>
        <div className="height-slider-container bg-indigo-800 rounded-lg p-4 mb-2">
          <input
            type="range"
            min="50"
            max="250"
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
            className="w-full accent-indigo-600"
          />
        </div>
        <div className="height-value text-center text-xl font-semibold">{height} cm</div>
      </div>

      {/* Calculate Button */}
      <button
        className="calculate-button bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition duration-200 w-full"
        onClick={calculateBMI}
      >
        Calculate BMI
      </button>

      {/* Result */}
      {bmi && (
        <div className="bmi-result mt-4 text-xl font-bold text-center text-black">
          Your BMI: {bmi}
        </div>
      )}
    </div>
  );
};

export default BMICalculator;