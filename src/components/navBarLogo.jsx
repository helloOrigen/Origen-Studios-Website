import React from 'react';
import '../Styles/seed.css';
import OSLogo from '../assets/OS-logo-white.png';
export default function navBarLogo(props) {
    const {
     text,
     left,
     center,
     right,
      children,
  
    } = props;
  
    return (
        <>
            <div className="h-pr-fl-ma w-a h-100  h-e c-p b-s-b-b ns-c-f-1">
           
            {left && <div className="h-pr-fl-ma r-v-c w-a h-100"><img className="w-80px h-80px  p-r m-a r-v-c p-5px " Style="object-fit: cover;" src={OSLogo} alt="OS-LOGO"/> </div>}
            {center && <div className="pr m-a r-h-c r-v-c w-a h-100"><img className="w-80px h-80px  p-r m-a r-v-c p-5px " Style="object-fit: cover;" src={OSLogo} alt="OS-LOGO"/></div>}
            {right && <div className="h-pr-fr-ma r-v-c  w-a h-100"><img className="w-80px h-80px p-r m-a r-v-c p-5px " Style="object-fit: cover;" src={OSLogo} alt="OS-LOGO"/></div>}
           
          
                </div>
</>
);
}
