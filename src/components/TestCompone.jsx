import React, { useState, useEffect } from 'react';

const TestCompone = ({ images, speed }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    if (Array.isArray(images) && images.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, speed);

      return () => {
        clearInterval(timer);
      };
    }
  }, [images, speed]);

  useEffect(() => {
    const getNextImages = () => {
      const nextImages = [];
      if (Array.isArray(images) && images.length > 0) {
        for (let i = currentIndex; i < currentIndex + visibleImages.length; i++) {
          const imageIndex = i % images.length;
          nextImages.push(images[imageIndex]);
        }
      }
      setVisibleImages(nextImages);
    };

    getNextImages();
  }, [currentIndex, images, visibleImages.length]);

  return (
    <div className="marquee-container" Style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
      {visibleImages.map((image, index) => (
        <div
          className="marquee-image"
          key={index}
          Style={{
            display: 'inline-block',
            marginRight: '20px',
            width: '150px',
            height: '150px',
            backgroundColor: 'blue',
            padding: '5px',
          }}
        >
          {image}
        </div>
      ))}
    </div>
  );
};

export default TestCompone;
