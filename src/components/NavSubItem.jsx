import React from 'react';


;
export default function NavSubItem(props) {
    const { text, className,} = props;

  
    return (
        <>
            <div  className=" p-20px c-p   noselect h-pr-fl-ma h-e-style hover-underline-animation h-pr-fl-ma w-100 h-a f-f-Gilroy b-s-b-b ">
            {text && ( <div className="c-white">{text}</div> )}
          
                </div>
</>
);
}
