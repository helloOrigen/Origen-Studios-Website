import React from "react";

export default function Title(props) {
  const {className,h1,h2,h3,h4,h5,h6, sup,  } = props;

  return (
    <>
       
          {h1 && ( <h1 className={` ${className} ${h1} w-100 h-a b-s-b-b h-pr-fl-ma f-w-bo f-f-Gilroy m-ns-f-s-big ns-f-s-big`}>{h1}&zwj;{sup && ( <sup Style="font-size: 45%; top: -25px;">{sup}</sup>  )}</h1>      )}
            
          {h2 && ( <h2 className={` ${className} ${h2} w-100 h-a b-s-b-b h-pr-fl-ma f-w-bo f-f-Gilroy `} Style="font-size:35px;">{h2}&zwj;{sup && ( <sup Style="font-size: 60%; top: -10px;">{sup}</sup>  )}</h2>      )}
          
          {h3 && ( <h2 className={` ${className} ${h3} w-100 h-a b-s-b-b h-pr-fl-ma f-w-bo f-f-Gilroy ns-f-s-medium`}>{h3}&zwj;{sup && ( <sup Style="font-size: 50%; top: -10px;">{sup}</sup>  )}</h2>      )}
          
          {h4 && ( <h4 className={` ${className} ${h4} w-100 h-a b-s-b-b h-pr-fl-ma f-w-bo f-f-Gilroy `}>{h4}</h4>      )}
          
          {h5 && ( <h5 className={` ${className} ${h5} w-100 h-a b-s-b-b h-pr-fl-ma f-w-bo f-f-Gilroy `}>{h5}</h5>      )}
          
          {h6 && ( <h6 className={` ${className} ${h6} w-100 h-a b-s-b-b h-pr-fl-ma f-w-bo f-f-Gilroy `}>{h6}</h6>      )}
          
 
    </>
  );
}
