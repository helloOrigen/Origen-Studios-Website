import React, { useState, useEffect, useLayoutEffect } from 'react';

const ParallaxEffect = ({ image1, image2, image1StyleProps, image2StyleProps,  }) => {
  const [gyroX, setGyroX] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    let permissionGranted = false;

    const handleMotion = (event) => {
      const { gamma } = event;
      const normalizedGamma = gamma / 90;
      setGyroX(normalizedGamma);
    };

    const requestPermission = async () => {
      try {
        await DeviceOrientationEvent.requestPermission();
        permissionGranted = true;
        window.addEventListener('deviceorientation', handleMotion);
      } catch (error) {
        console.error('Error requesting device orientation permission:', error);
      }
    }

    if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function') {
      requestPermission();
    } else {
      window.addEventListener('deviceorientation', handleMotion);
    }

    return () => {
      if (permissionGranted) {
        window.removeEventListener('deviceorientation', handleMotion);
      }
    };
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      setContainerWidth(document.documentElement.clientWidth);
      setContainerHeight(document.documentElement.clientHeight);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    setMouseX(mouseX);
  };

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  };

  const image1Style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '180%',
    height: '100%',
    transform: `translate(-50%, -50%) translateX(${gyroX * 20 + (mouseX - containerWidth / 2) * 0.3}px)`,
    backgroundImage: `url(${image1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform 0.2s ease-out',
    ...image1StyleProps,
  };

  const image2ContainerStyle = {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: `translateX(-50%)`,
    width: '180%',
    height: `${containerHeight}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    transition: 'transform 0.2s ease-out',
  
  };

  const image2Style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%) translateX(${gyroX * 20 + (mouseX - containerWidth / 2) * 0.1}px)`,
    width: '70%',
    paddingBottom: '100%',
    transition: 'transform 0.2s ease-out',
    backgroundImage: `url(${image2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    ...image2StyleProps,
  };

  return (
    <div
      className="parallax-effect"
      style={containerStyle}
      onMouseMove={handleMouseMove}
    >
      <div className="image1" style={image1Style} />
      <div className="image2-container" style={image2ContainerStyle}>
        <div className="image2" style={image2Style} />
      </div>
    </div>
  );
};

export default ParallaxEffect;