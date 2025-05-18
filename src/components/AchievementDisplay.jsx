import React from "react";

const AchievementDisplay = ({ category }) => {
  // Define achievements per category
  const achievementCategories = {
    underweight: [
      "Eat 3 balanced meals a day for one week",
      "Drink at least 2 liters of water daily for 5 days",
      "Add protein-rich foods to every meal",
      "Track your meals using a food diary",
      "Increase coloric intake"
    ],
    normal: [
      "Maintain your current healthy routine for 2 weeks",
      "Exercise for 30 minutes, 4 times a week",
      "Get at least 7 hours of sleep each night",
      "Get consistent for 6 months"
    ],
    overweight: [
      "Walk for 30 minutes daily for a week",
      "Replace sugary drinks with water for 10 days",
      "Reduce portion sizes by 20%",
      "Play 100 Games of basketball this year"
    ],
    obese: [
      "Start walking 20 mins daily",
      "Hydrate more – replace soda with water",
      "Avoid fast food for 10 days",
      "Play 150 games of Basketball this year",
      "Go for a 3km run daily (2x)"
    ],
  };

  const achievements = achievementCategories[category] || [];

  // Get styles based on category
  const getStyles = () => {
    switch (category) {
      case "underweight":
        return { containerBg: "bg-blue-100", titleColor: "text-blue-800" };
      case "normal":
        return { containerBg: "bg-green-100", titleColor: "text-green-800" };
      case "overweight":
        return { containerBg: "bg-yellow-100", titleColor: "text-yellow-800" };
      case "obese":
        return { containerBg: "bg-red-100", titleColor: "text-red-800" };
      default:
        return { containerBg: "bg-gray-100", titleColor: "text-gray-800" };
    }
  };

  const { containerBg, titleColor, itemBg } = getStyles();

  return (
    <div
      className={`achievement-display ${containerBg} p-6 rounded-lg shadow-md mt-6 w-full max-w-l mx-auto`}
    >
      <h1 className="font-bold text-indigo-900 text-4xl flex justify-center">
        Achievements and BMI
      </h1>
      <h2 className={`text-xl font-bold mb-4 ${titleColor}`}>
        You are{" "}
        {category
          ? category.charAt(0).toUpperCase() + category.slice(1)
          : "Unknown"}
        !
      </h2>

      <div className="space-y-3">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className={`${itemBg} p-4 rounded-md shadow-sm border-l-8 border-indigo-500`}
          >
            <p className="ml-4">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementDisplay;
