import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle, faRunning, faDumbbell } from '@fortawesome/free-solid-svg-icons';

const DrillCard = ({ title, progress, details }) => {
  // Determine icon based on drill type
  let icon = null;
  if (title === 'Bicycle Drill') {
    icon = faBicycle;
  } else if (title === 'Jogging Drill') {
    icon = faRunning;
  } else if (title === 'Sports Drill') {
    icon = faDumbbell;
  }

  const getProgressColor = (progress) => {
    if (progress < 30) return 'bg-red-500';
    if (progress < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="drill-card bg-white rounded-2xl shadow-xl w-[250px] h-[210px] p-5 flex flex-col justify-between">
      
      {/* Card Header */}
      <div className="card-header flex items-center mb-4">
        {/* Icon Container */}
        <div className="icon-container bg-indigo-800 text-white w-11 h-11 flex items-center justify-center rounded-lg mr-3">
          {icon && <FontAwesomeIcon icon={icon} size="lg" />}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 truncate">{title}</h3>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-container mb-4">
        <div className="progress-label text-sm text-gray-600">Progress</div>
        <div className="progress-bar-outer bg-gray-200 h-3 w-full rounded-full overflow-hidden mt-1">
          <div className={`progress-bar-inner h-full ${getProgressColor(progress)} rounded-full`} style={{ width: `${progress}%` }}></div>
        </div>
        <div className="progress-value text-right text-sm text-gray-500 mt-1">{progress}%</div>
      </div>

      {/* Details */}
      {details?.length > 0 && (
        <div className="card-details space-y-1">
          {details.map((detail, index) => (
            <div key={index} className="detail-item flex justify-between text-sm text-gray-700">
              <span className="detail-label font-semibold">{detail.label}</span>
              <span className="detail-value font-medium">{detail.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Remaining Time (optional) */}
      {details?.length > 1 && (
        <span className="remaining-time text-xs text-gray-500 mt-auto pt-2 border-t border-gray-200">
          {details[1].value}
        </span>
      )}
    </div>
  );
};

export default DrillCard;