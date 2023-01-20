import React from 'react';
import '../Styles/seed.css';
import OSLogo from '../assets/OS-logo-white.png';
export default function navBarLogo(props) {
    const {

     left,
     center,
     right,

  
    } = props;
  
    return (
        <>
            <div className="h-pr-fl-ma w-a h-100 p-l-10px h-e c-p b-s-b-b ns-c-f-1">
           
          <div className="h-pr-fl-ma r-v-c w-80px h-80px m-h-70px m-w-70px t-1s b-s-b-b"><img className="w-100 h-100 p-r m-a r-v-c" Style="object-fit: contain;" src={OSLogo} alt="OS-LOGO"/> </div>
           
          
                </div>
</>
);
}
