import React, { Fragment } from 'react'

import Info from '../components/info'
import CardContainer from "../components/cardcontainer";
import Card from "../components/card";


import Wallpaper1 from '../assets/images/compressed/wallpaper-1.jpg';
import Wallpaper2 from '../assets/images/compressed/wallpaper-2.jpg';
import Wallpaper3 from '../assets/images/compressed/wallpaper-3.jpg';
import Wallpaper4 from '../assets/images/compressed/wallpaper-4.jpg';
import Wallpaper5 from '../assets/images/compressed/wallpaper-5.jpg';
import Wallpaper6 from '../assets/images/compressed/wallpaper-6.jpg';
import Wallpaper7 from '../assets/images/compressed/wallpaper-7.jpg';
import Wallpaper8 from '../assets/images/compressed/wallpaper-8.jpg';
import Wallpaper9 from '../assets/images/compressed/wallpaper-9.jpg';
import Wallpaper10 from '../assets/images/compressed/wallpaper-10.jpg';
import Wallpaper11 from '../assets/images/compressed/wallpaper-11.jpg';
import Wallpaper12 from '../assets/images/compressed/wallpaper-12.jpg';
import Wallpaper13 from '../assets/images/compressed/wallpaper-13.jpg';
import Wallpaper14 from '../assets/images/compressed/wallpaper-14.jpg';
const Gallery = () => {
  return (
  <Fragment>
    <div className="w-100 h-100 h-pr-fl-ma centered b-s-b-b of-auto " >


<CardContainer className="m-b-20px">
<Card type="card-tall card-wide" image={Wallpaper1} alt="Wallpaper1" filename="wallpaperX" filetype="jpg" filesize="0000x0000px"  />
<Card type="card-tall" image={Wallpaper2} alt="Wallpaper2" filename="wallpaperX" filetype="jpg" filesize="0000x0000px"  />
<Card type="card-tall" image={Wallpaper3} alt="Wallpaper3" filename="wallpaperX" filetype="jpg" filesize="0000x0000px"  />
<Card type="card-tall" image={Wallpaper4} alt="Wallpaper4" filename="wallpaperX" filetype="jpg" filesize="0000x0000px"  />
<Card type="card-tall" image={Wallpaper5} alt="Wallpaper5" filename="wallpaperX" filetype="jpg" filesize="0000x0000px"  />
<Card type="card-tall" image={Wallpaper6} alt="Wallpaper6" filename="wallpaperX" filetype="jpg" filesize="0000x0000px"  />
<Card type="card-tall" image={Wallpaper7} alt="Wallpaper7" filename="wallpaperX" filetype="jpg" filesize="0000x0000px"  />
<Card type="card-tall card-wide" image={Wallpaper8} alt="Wallpaper8" filename="wallpaperX" filetype="jpg" filesize="0000x0000px"  />
<Card type="card-wide" image={Wallpaper9} alt="Wallpaper9" filename="wallpaperX" filetype="jpg" filesize="0000x0000px"  />
<Card type="card-tall" image={Wallpaper10} alt="Wallpaper10" filename="wallpaperX" filetype="jpg" filesize="0000x0000px"  />
<Card type="card-tall" image={Wallpaper11} alt="Wallpaper11" filename="wallpaperX" filetype="jpg" filesize="0000x0000px"  />
<Card type="card-tall" image={Wallpaper12} alt="Wallpaper12" filename="wallpaperX" filetype="jpg" filesize="0000x0000px"  />
<Card type="card-wide" image={Wallpaper13} alt="Wallpaper13" filename="wallpaperX" filetype="jpg" filesize="0000x0000px"  />
<Card type="card-wide" image={Wallpaper14} alt="Wallpaper14" filename="wallpaperX" filetype="jpg" filesize="0000x0000px"  />



</CardContainer>

   




<Info title="Info:" text="Ninguna de las ilustraciones aqu?? presentadas son de uso comercial, conzoca m??s acerca del origen de estas ilustraciones y sus referencias en nuestras pol??ticas de uso."></Info>



   </div>
    </Fragment>
  
 
  )
}

export default Gallery