/* eslint-disable react-hooks/rules-of-hooks */

import React, { Fragment, useState } from "react";
import "../Styles/seed.css";
import Cookies from 'js-cookie';





const notifier=({ title, subtitle, text, className, note, action, link, Style, intitle, children })=>{
  
  const [Notifier,setNotifier] = useState("");
  
  const handleSetCookie = () =>{
    Cookies.set("user",'value', {expires:7,path:'/',secure:true })
    handleReadCookie()
    setNotifier(!Notifier)
  }
  const handleReadCookie = ()=>{
    Cookies.get("user",'value',{domain:'origenstudios.com'})
  }
   
 
 const handleRemoveCookie=()=>{
  Cookies.remove("user",'value',{path:'/', domain:'origenstudios.com'})
  setNotifier(!Notifier)
 }

  return (
    <Fragment>
      {!Notifier && <div className={` ${className} notifier d-i-f m-d-b  `} Style={` ${Style} `}>
      <div className="w-100 h-a h-pr-fl-ma  p-20px">
       
      { title && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy" Style="font-size: 25px; font-weight:bold; line-height: 30px; color: white;">{title}</div> }
      { subtitle && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy" Style="font-size: 15px; font-weight:bold; line-height: 20px; color: #666666;"> {subtitle}<br/><br/></div> }
      { intitle && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy" Style="font-size: 25px; font-weight:bold; line-height: 30px; color: white;"><div className="h-pr-fl-ma w-a h-a ">{title}</div>{ intitle && <div className="h-pr-fl-ma b-s-b-b w-a h-a f-f-Gilroy " Style="font-size: 15px; line-height: 30px; font-style: italic; color: white;">&nbsp;{intitle}</div> }</div> }
      { text && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy"  Style="font-size: 15px; line-height: 20px; color: white;"> {text}</div> } 
      { note && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy m-t-10px"  Style="font-size: 10px; line-height: 15px; color: white;  font-style: italic;"> {note}</div> }
        {children}
      { action && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy  m-t-10px "  Style="font-size: 10px; line-height: 15px; color: white;"><a href={`${link}`}><span className="hover-underline-animation ns-c-e">{action}</span></a></div> }
    
      </div>
      
      <div className="w-150px  m-w-100 h-a h-pr-fl-ma  p-10px b-s-b-b of-h info  ">
      <div  className="w-100 m-d-f h-pr-fl-ma -s-b-b">

  
      
        <div className="d-n m-d-b m-w-50 h-100px h-pr-fl-ma p-5px">
        <button  type="button"  className="h-pr-fl-ma b-s-b-b w-a centered p-5px h-a  f-f-Gilroy   hover-underline-animation" Style="font-size: 15px; line-height: 10px; color: white; background:none !important" onClick={handleRemoveCookie} >Rechazar</button>
        </div> 

        <div className="w-100 m-w-50 h-100px h-pr-fl-ma  p-5px">
        <button type="button"   className="h-pr-fl-ma ghost default b-s-b-b w-a centered p-20px bg-orange h-a f-f-Gilroy   hover-underline-animation" Style="font-size: 15px; line-height: 10px; color: white; background:none !important ;" onClick={handleSetCookie}>Aceptar</button>
        </div> 

         
        <div className="m-d-n d-b w-100  h-100px  h-pr-fl-ma p-5px">
        <button  type="button"  className="h-pr-fl-ma  b-s-b-b w-a centered p-5px h-a r-h-c f-f-Gilroy   hover-underline-animation" Style="font-size: 15px; line-height: 10px; color: white; background:none !important" onClick={handleRemoveCookie} >Rechazar</button>
        </div> 




        
        </div>


      </div>
      </div>
}
      
    </Fragment>
  );
}
export default notifier;