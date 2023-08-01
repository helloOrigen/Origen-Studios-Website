import React, { useState, useEffect } from 'react'
import OSLogoSymbolSvg from '../assets/logo/OS-Logo-Symbol-White-Svg.svg'

const LoaderComponent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [showLogo, setShowLogo] = useState(false)
  const [dots, setDots] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setShowLogo(true)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setDots((prevDots) => (prevDots < 3 ? prevDots + 1 : 0))
      }, 500)

      return () => {
        clearInterval(interval)
      }
    }
  }, [isLoading])

  const loaderStyle = {
    display: isLoading ? 'flex' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '999'
  }

  const ellipsisStyle = {
    display: 'inline-block',
    position: 'relative',
    width: '80px',
    height: '80px'
  }

  const dotStyle = {
    position: 'absolute',
    top: '33px',
    width: '13px',
    height: '13px',
    borderRadius: '50%',
    background: '#ffffff',
    animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)'
  }

  const dot1Style = {
    left: '8px',
    animation: 'lds-ellipsis1 0.6s infinite',
    background: '#ffc666'
  }

  const dot2Style = {
    left: '8px',
    animation: 'lds-ellipsis2 0.6s infinite'
  }

  const dot3Style = {
    left: '32px',
    animation: 'lds-ellipsis2 0.6s infinite',
    background: '#ffc666'
  }

  const dot4Style = {
    left: '56px',
    animation: 'lds-ellipsis3 0.6s infinite'
  }

  const loadingTexts = [
    'Cargando',
    'Cargando.',
    'Cargando..',
    'Cargando...',
    'Iniciando OrigenStudios.com'
  ]

  const loadingText = loadingTexts[dots]

  const keyframes = `@keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }`

  return (
    <div >
      {isLoading && (
        <div style={loaderStyle}>
          <img
            className="pa l-0px r-0px t-0px b-0px m-a w-300px h-300px p-20px "
            style={{ objectFit: 'contain' }}
            src={OSLogoSymbolSvg}
            alt="OS-LOGO"
          />    <div className='pa l-0px r-0px t-0px b-0px m-a w-300px h-300px'>
            <div className='animated-circle ghost enfasis circle'></div></div>
          <style>{keyframes}</style>
          <div style={ellipsisStyle}>
            <div style={{ ...dotStyle, ...dot1Style }}></div>
            <div style={{ ...dotStyle, ...dot2Style }}></div>
            <div style={{ ...dotStyle, ...dot3Style }}></div>
            <div style={{ ...dotStyle, ...dot4Style }}></div>
            <div className="f-f-Gilroy ns-f-s-small w-100 c-white f-w-bo ns-c-e-animated t-a-c">
              {loadingText}
            </div>
          </div>
        </div>
      )}
      {showLogo && !isLoading && (

        <object
          className="pa l-0px r-0px t-0px b-0px m-a w-300px h-300px p-20px  "
          style={{ objectFit: 'contain' }}
          data={OSLogoSymbolSvg}
          type="image/svg+xml"
        >
          <img src={OSLogoSymbolSvg} alt="OS-LOGO" />
        </object>
      )}
    </div>
  )
}

export default LoaderComponent
