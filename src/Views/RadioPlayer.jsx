import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';


const RadioPlayer = ({ playlistUrls }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [player, setPlayer] = useState(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    setPlayer(event.target);
    setIsPlayerReady(true);
  };

  const onEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % playlistUrls.length);
  };

  const handleIncrement = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % playlistUrls.length);
  };

  const handleDecrement = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + playlistUrls.length) % playlistUrls.length);
  };

  const handleReset = () => {
    setCurrentVideoIndex(0);
  };

  useEffect(() => {
    if (isPlayerReady) {
      player.loadVideoById(getVideoIdFromUrl(playlistUrls[currentVideoIndex]));
    }
  }, [currentVideoIndex, isPlayerReady, player, playlistUrls]);

  const getVideoIdFromUrl = (url) => {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get('v');
  };

  return (
    <div className="radio-player-container w-100 h-pr-fl-ma bg-red">
      <h2 className="radio-player-title">Radio Player</h2>
      {isPlayerReady && (
        <div className="radio-player-video">
          <YouTube videoId={getVideoIdFromUrl(playlistUrls[currentVideoIndex])} opts={opts} onReady={onReady} onEnd={onEnd} />
        </div>
      )}
      <div className="radio-player-controls">
        <button onClick={handleIncrement} disabled={!isPlayerReady}>
          +
        </button>
        <button onClick={handleDecrement} disabled={!isPlayerReady}>
          -
        </button>
        <button onClick={handleReset} disabled={!isPlayerReady}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default RadioPlayer;