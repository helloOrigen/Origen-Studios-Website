/* eslint-disable react-hooks/rules-of-hooks */

import React, { Fragment, useState } from "react";
import "../Styles/seed.css";
import { useCookies } from 'react-cookie';




const notifier=({ title, subtitle, text, className, note, action, link, Style, intitle, children })=>{
  const [cookie, setCookie,removeCookie] = useCookies(['userName']);
  const [Notifier,setNotifier] = useState(false);
  
  const handleClose = () =>{
    setNotifier(!Notifier)
  }
   
  const handleChange = (data) => {
    setCookie('userName', data, { path: '/' });
  }
  const handleRemove = ()=>{
    removeCookie()
  }

 

  return (
    <Fragment>
      {!Notifier && <div className={` ${className} notifier d-i-f m-d-b m-w-80 `} Style={` ${Style} `}>
      <div className="w-a h-a h-pr-fl-ma  m-w-100 p-20px">
       
      { title && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy" Style="font-size: 25px; font-weight:bold; line-height: 30px; color: white;">{title}</div> }
      { subtitle && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy" Style="font-size: 15px; font-weight:bold; line-height: 20px; color: #666666;"> {subtitle}<br/><br/></div> }
      { intitle && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy" Style="font-size: 25px; font-weight:bold; line-height: 30px; color: white;"><div className="h-pr-fl-ma w-a h-a ">{title}</div>{ intitle && <div className="h-pr-fl-ma b-s-b-b w-a h-a f-f-Gilroy " Style="font-size: 15px; line-height: 30px; font-style: italic; color: white;">&nbsp;{intitle}</div> }</div> }
      { text && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy"  Style="font-size: 15px; line-height: 20px; color: white;"> {text}</div> } 
      { note && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy m-t-10px"  Style="font-size: 10px; line-height: 15px; color: white;  font-style: italic;"> {note}</div> }
        {children}
      { action && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy  m-t-10px "  Style="font-size: 10px; line-height: 15px; color: white;"><a href={`${link}`}><span className="hover-underline-animation ns-c-e">{action}</span></a></div> }
    
      </div>
      
      <div className="w-a m-w-100 h-a h-pr-fl-ma  p-10px b-s-b-b of-h info p-l-20px p-r-20px">
      <div  className="w-100 m-d-f h-pr-fl-ma ">

      <div className="w-100  m-w-33  h-a h-pr-fl-ma  p-5px">
        <div  className="w-and-h-40px r-h-c  h-pr-fl-ma circle h-e c-p" Style="border: 1px solid; border-color: white;"><button  onClick={handleClose} type="button" className="centered f-f-Gilroy" Style="color:white;background-color:transparent;">X</button>  </div> 
        </div> 
      
        <div className="d-n m-d-b w-100 m-w-33 h-pr-fl-ma p-5px">
        <button  type="button"  className="h-pr-fl-ma b-s-b-b w-a p-5px h-a r-h-c f-f-Gilroy   hover-underline-animation" Style="font-size: 10px; line-height: 10px; color: white; background:none !important" onClick={handleClose}  value={cookie.userName} onChange={handleRemove}>Rechazar</button>
        </div> 

        <div className="w-100 m-w-33  h-pr-fl-ma p-5px">
        <button type="button"   className="h-pr-fl-ma b-s-b-b w-a r-h-c p-20px h-a f-f-Gilroy   hover-underline-animation" Style="font-size: 15px; line-height: 15px; color: white; background:none !important ;" onClick={handleClose} value={cookie.userName} onChange={handleChange}>Aceptar</button>
        </div> 

         
        <div className="m-d-n d-b w-100 m-w-33 h-pr-fl-ma p-5px">
        <button  type="button"  className="h-pr-fl-ma b-s-b-b w-a p-5px h-a r-h-c f-f-Gilroy   hover-underline-animation" Style="font-size: 10px; line-height: 10px; color: white; background:none !important" onClick={handleClose}  value={cookie.userName} onChange={handleRemove}>Rechazar</button>
        </div> 




        
        </div>


      </div>
      </div>
}
      
    </Fragment>
  );
}
export default notifier;