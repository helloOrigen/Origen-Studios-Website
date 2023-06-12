import React, { useState, useEffect } from 'react';

const MarqueeComponent = ({ text, speed, newsList }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    const marqueeElement = document.getElementById('marquee');
    const animationDuration = marqueeElement.offsetWidth / speed;

    marqueeElement.style.animationDuration = `${animationDuration}s`;
    marqueeElement.style.animationDirection = isReversed ? 'reverse' : 'normal';
    marqueeElement.style.animationPlayState = isPaused ? 'paused' : 'running';
  }, [isPaused, isReversed, speed]);

  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
  };

  const handleReverseToggle = () => {
    setIsReversed(!isReversed);
  };

  const handleShowNews = () => {
    alert(`Novedades: ${newsList.join(', ')}`);
  };

  return (
    <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', width: '100%' }}>
      <div
        id="marquee"
        style={{
          display: 'inline-block',
          animation: 'marquee',
        }}
      >
        {text}
      </div>
      <div style={{ marginTop: '1em' }}>
        <button onClick={handlePauseToggle}>{isPaused ? 'Reanudar' : 'Pausar'}</button>
        <button onClick={handleReverseToggle}>{isReversed ? 'Normal' : 'Reversa'}</button>
        <button onClick={handleShowNews}>Mostrar Novedades</button>
      </div>
    </div>
  );
};

export default MarqueeComponent;