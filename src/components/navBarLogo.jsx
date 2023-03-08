import React from 'react';
import '../Styles/seed.css';
import OSLogo from '../assets/logo/OS-logo-white.png';
import OSLogoSymbol from '../assets/logo/OS-Logo-Symbol-White-Png.png';

import OSLogotipo from '../assets/logo/OS-logotipo-m-white-transparent_svg.svg';
export default function navBarLogo(props) {
 
  
    return (
        <>
            <div Style="background: black;" className="p-10px h-pr-fl-ma w-a h-100  h-e c-p b-s-b-b ns-c-f-1">
           
          <div className="m-d-n h-pr-fl-ma r-v-c w-70px h-70px noselect  t-1s b-s-b-b"><img className="w-100 h-100 h-pr-fl-ma centered" Style="object-fit: contain;" src={OSLogoSymbol} alt="OS-LOGO"/> </div>
          <div className="d-n m-d-b h-pr-fl-ma r-v-c noselect  h-25px  t-1s b-s-b-b"><img className="w-100 h-100 p-r m-a r-v-c" Style="object-fit: contain;" src={OSLogotipo} alt="OS-LOGO"/> </div>

          
                </div>
</>
);
}
