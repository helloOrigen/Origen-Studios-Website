import React, { Fragment } from 'react'
import ContentBox from '../components/contentBox'
import Btn from '../components/btn'
import HomeIcon from '../assets/icons/home.svg'
import { Link } from "react-router-dom";

const Careers = () => {
  return (
  <Fragment>
    <div className="w-100 h-100 h-pr-fl-ma centered b-s-b-b">
    <div className="w-100 h-a h-pr-fl-ma r-v-c">
 <div className="f-f-Gilroy t-a-c w-100 h-pr-fl-ma" Style="font-size: 180px; line-height: 185px ; font-weight: bold;">404</div>
 <div className="f-f-Gilroy t-a-c w-100 h-pr-fl-ma ns-c-e m-b-20px" Style="font-size: 40px; line-height: 45px ; font-weight: bold;">Pagina no encontrada</div>
 <div className="w-50 r-h-c h-pr-fl-ma m-l-10px m-r-10px h-pr-fl-ma m-a b-s-b-b divider "></div>
 <Link to="/"> <Btn className="r-h-c m-t-20px" text="Página principal"><div className="w-25px h-25px m-5px h-pr-fl-ma"><img
              src={HomeIcon}
              className="w-100 h-100 h-pr-fl-ma"
              Style="stroke: #ffffff !important;"
              alt="Página principal"
            /></div></Btn></Link>

 </div>

   </div>
    </Fragment>
  
 
  )
}

export default Careers