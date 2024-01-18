import React, { useState, useEffect } from 'react';
import './TimeCircle.css';

const TimerCircle = () => {
  const [timer, setTimer] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const calculateDashArray = () => {
    const radius = 50; // adjust this based on your design
    const circumference = 2 * Math.PI * radius;
    const progress = ((20 - timer) / 20) * circumference;
    return `${progress} ${circumference}`;
  };

  return (
    <div className="timer-circle mb-2">
      <svg className="circle-svg" width="100" height="100">
        <circle
          className="circle"
          cx="50"
          cy="50"
          r="50"
          style={{
            strokeDasharray: calculateDashArray(),
          }}
        />
      </svg>
      <div className="timer-text">{timer}s</div>
    </div>
  );
};

export default TimerCircle;