/* eslint-disable react-hooks/rules-of-hooks */
import { Fragment, useState } from "react";
import "../Styles/seed.css";

export default function notifier(props) {
  const { title, subtitle, text, className, note, action, link, Style, intitle, children } = props;
  const [open, setOpen] = useState(true);

    

    const handleClose = () => {
      setOpen(false);
    };
  return (
    <Fragment>
      <div open={open} onClose={handleClose}  className={` ${className} notifier d-i-f m-w-80 `} Style={` ${Style}`}>
      <div className="w-a h-a h-pr-fl.ma p-20px">
      { title && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy" Style="font-size: 25px; font-weight:bold; line-height: 30px; color: white;">{title}</div> }
      { subtitle && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy" Style="font-size: 15px; font-weight:bold; line-height: 20px; color: #666666;"> {subtitle}<br/><br/></div> }
      { intitle && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy" Style="font-size: 25px; font-weight:bold; line-height: 30px; color: white;"><div className="h-pr-fl-ma w-a h-a ">{title}</div>{ intitle && <div className="h-pr-fl-ma b-s-b-b w-a h-a f-f-Gilroy " Style="font-size: 15px; line-height: 30px; font-style: italic; color: white;">&nbsp;{intitle}</div> }</div> }
      { text && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy"  Style="font-size: 15px; line-height: 20px; color: white;"> {text}</div> } 
      { note && <div className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy m-t-10px"  Style="font-size: 10px; line-height: 15px; color: white;  font-style: italic;"> {note}</div> }
        {children}
      { action && <button className="h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy  m-t-10px "  Style="font-size: 10px; line-height: 15px; color: white;" onClick={handleClose}><a href={`${link}`}><span className="hover-underline-animation">{action}</span></a></button> }
      </div>
      
      <button onClick={handleClose} className="w-a h-a h-pr-fl.ma info p-20px">< div className="w-and-h-40px circle h-e c-p" Style="border: 1px solid; border-color: white;"><span className="centered f-f-gilroy" Style="color:white;">X</span>  </div> </button>
      
      </div>
    </Fragment>
  );
}
