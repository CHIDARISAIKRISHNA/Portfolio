import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ textArray, speed = 100, eraseSpeed = 50, delay = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    let timeout;
    const currentText = textArray[currentTextIndex];

    if (!isErasing) {
      // Typing
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        }, speed);
      } else {
        // Finished typing, wait then start erasing
        timeout = setTimeout(() => {
          setIsErasing(true);
        }, delay);
      }
    } else {
      // Erasing
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        }, eraseSpeed);
      } else {
        // Finished erasing, move to next text
        setIsErasing(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isErasing, currentTextIndex, textArray, speed, eraseSpeed, delay]);

  return <span className="typing">{displayedText}</span>;
};

export default TypingAnimation;

