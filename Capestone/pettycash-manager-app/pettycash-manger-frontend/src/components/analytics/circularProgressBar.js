import React, { useEffect, useState } from 'react';
import './circularProgressBar.css';

const CircularProgressBar = ({ percentage, color }) => {
  const percent = isNaN(percentage) ? 0 : percentage;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = ((100 - percent) / 100) * circumference;

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  const circleStyle = {
    '--circumference': circumference,
    '--progress': progress,
    '--color': color,
  };

  return (
    <div className="circular-progressbar">
      <svg viewBox="0 0 100 100">
        <circle
          className="circle bg"
          r={radius}
          cx="50"
          cy="50"
          strokeDasharray={circumference}
          style={circleStyle}
        />
        <circle
          className={`circle ${isAnimating ? 'animating' : ''}`}
          r={radius}
          cx="50"
          cy="50"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          style={circleStyle}
        />
      </svg>
      <div className="percentage">{percent}%</div>
    </div>
  );
};

export default CircularProgressBar;
