import React, { useState, useEffect } from 'react';
import './TimeCircle.css';

const TimerCircle = ({  setChallengeSolved, setChallengeStatus }) => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
      if (timer === 0) {
        // Update the state when the timer ends
        setChallengeSolved(true);
        setChallengeStatus(false); // You can adjust this based on your requirements
      }
    };
  }, [timer, setChallengeSolved, setChallengeStatus]);

  const calculateDashArray = () => {
    const radius = 50; // adjust this based on your design
    const circumference = 2 * Math.PI * radius;
    const progress = ((10 - timer) / 10) * circumference;
    return `${progress} ${circumference}`;
  };

  return (
    <div className="timer-circle">
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