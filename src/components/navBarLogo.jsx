import React from 'react';
import '../Styles/seed.css';
import OSLogo from '../assets/logo/OS-logo-white.png';
import OSLogoSymbol from '../assets/logo/OS-Logo-Symbol-White-Png.png';
import OSLogoSymbolSvg from '../assets/logo/OS-Logo-Symbol-White-Svg.svg';
import OSLogotipo from '../assets/logo/OS-logotipo-m-white-transparent_svg.svg';


;
export default function navBarLogo(props) {
 
  
    return (
        <>
            <div  className=" h-pr-fl-ma w-a h-100  h-e c-p b-s-b-b ns-c-f-1  ">
           
          <div className=" h-pr-fl-ma r-v-c w-200px  bg-d h-100 noselect t-1s b-s-b-b"><img className="w-100 h-100 h-pr-fl-ma centered" Style="object-fit: contain;" src={OSLogotipo} alt="OS-LOGO"/> </div>
       

          
                </div>
</>
);
}
