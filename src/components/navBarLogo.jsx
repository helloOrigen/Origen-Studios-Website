import React from 'react'
import OSLogoSymbolSvg from '../assets/logo/OS-Logo-Symbol-White-Svg.svg'
import OSLogotipo from '../assets/logo/OS-logotipo-m-white-transparent_svg.svg'

export default function NavBarLogo (props) {
  return (
    <>
      <div className="w-70px p-10px m-d-n tab-d-n h-100 h-pr-fl-ma noselect t-1s b-s-b-b ">
        <div className='w-and-h-50px pa m-a l-0px t-0px b-0px r-0px'> <div className='animated-circle ghost enfasis circle'></div></div>
        <img
          className="w-100 h-50px  ghost enfasis circle h-pr-fl-ma  "
          style={{ objectFit: 'contain' }}
          src={OSLogoSymbolSvg}
          alt="OS-LOGO"
        />
      </div>
      <div className="w-a  m-d-b tab-d-b d-n h-65px p-10px  h-pr-fl-ma noselect t-1s b-s-b-b ">
        <img
          className="w-100 h-100 ns-bg-e ns-br-r-1  h-pr-fl-ma"
          style={{ objectFit: 'contain' }}
          src={OSLogotipo}
          alt="OS-LOGO"
        />
      </div>
    </>
  )
}
