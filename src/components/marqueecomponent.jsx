import React, { useState, useRef, useEffect } from "react";

const MarqueeComponent = () => {
  const [isPaused, setPaused] = useState(false);
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseEnter = () => {
    setPaused(true);
  };

  const handleMouseLeave = () => {
    setPaused(false);
  };

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const containerElement = containerRef.current;

    if (isPaused) {
      const distance =
        marqueeElement.offsetWidth - containerElement.offsetWidth;
      marqueeElement.style.transform = `translateX(-${distance}px)`;
    } else {
      marqueeElement.style.transform = "translateX(0)";
    }
  }, [isPaused]);

  return (
    <div
      className="w-100 h-30px h-pr-fl-ma bg-green m-5px p-t-5px b-s-b-b of-h"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="w-a m-a f-f-Gilroy f-w-bo bg-red of-h"
        ref={containerRef}
        Style={{
          display: "flex",
          position: "absolute",
          animation: "marquee 20s linear infinite",
          animationPlayState: `${isPaused ? "paused" : "running"}`,
          lineHeight: "1em",
        }}
      >
        <div ref={marqueeRef} className="w-a bg-orange">
          <span Style={{ color: "red" }}>Lorem ipsum dolor sit amet, </span>
          <span Style={{ color: "blue" }}>consectetur adipiscing elit. </span>
          <span Style={{ color: "green" }}>
            Sed cursus ante ac mauris fringilla,{" "}
          </span>
          <span Style={{ color: "purple" }}>vel sagittis elit vestibulum.</span>
          <span Style={{ color: "green" }}>
            Sed cursus ante ac mauris fringilla,{" "}
          </span>
          <span Style={{ color: "purple" }}>vel sagittis elit vestibulum.</span>
          <span Style={{ color: "green" }}>
            Sed cursus ante ac mauris fringilla,{" "}
          </span>
          <span Style={{ color: "purple" }}>vel sagittis elit vestibulum.</span>
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
