// TextAnimation.js
import React, { useState, useEffect } from 'react';
import './TextAnimation.css';

const TextAnimation = ({ text }) => {
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setAnimatedText((prevText) => {
        const currentLine = text[currentIndex];

        if (currentLine && prevText.length < currentLine.length) {
          const currentChar = currentLine.charAt(prevText.length);
          return prevText + currentChar;
        }

        if (currentIndex === text.length - 1 && prevText.length === currentLine.length) {
          clearInterval(interval);
        }

        if (currentIndex < text.length - 1 && prevText.length === currentLine.length) {
          currentIndex += 1;
          return prevText + '\n';
        }

        return prevText;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="text-animation">
      <pre>{animatedText}</pre>
    </div>
  );
};

export default TextAnimation;