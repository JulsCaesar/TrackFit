import { useState } from 'react';

export default function useBMICategory() {
  const [category, setCategory] = useState(null);

  const calculateCategory = (bmiData) => {
    if (!bmiData || bmiData.weight <= 0 || bmiData.height <= 0) return;

    const { weight, height } = bmiData;
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    const roundedBMI = parseFloat(bmiValue.toFixed(1));

    let categoryResult = '';
    if (roundedBMI < 18.5) {
      categoryResult = 'underweight';
    } else if (roundedBMI < 24.9) {
      categoryResult = 'normal';
    } else if (roundedBMI < 29.9) {
      categoryResult = 'overweight';
    } else {
      categoryResult = 'obese';
    }

    setCategory(categoryResult);
  };

  return { category, calculateCategory };
}