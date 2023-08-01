import React, { Fragment } from 'react'

import { Title, Btn } from '../components'
import SearchIcon from '../assets/icons/quick_reference.svg'
import EyeIcon from '../assets/icons/eye.svg'
import DocumentListIcon from '../assets/icons/document_list.svg'
import GroupIcon from '../assets/icons/group.svg'
import PictureIcon from '../assets/icons/picture.svg'
import PuzzlePieceIcon from '../assets/icons/puzzle-piece-icon.svg'
import SupervisedUserIcon from '../assets/icons/supervised_user.svg'
import RocketIcon from '../assets/icons/rocket.svg'
import RadarIcon from '../assets/icons/radar-icon.svg'
import ChevronUpIcon from '../assets/icons/chevron_up_double.svg'
import LogotipoExample from '../assets/images/compressed/logotipo-example.jpg'

const Identity = () => {
  return (
    <Fragment>
      <div className="w-100 h-100 h-pr-fl-ma  flexbox f-w-n-w m-d-b j-c-c of-a p-10px ">
        <div className="w-500px h-80vh h-pr-fl-ma b-s-b-b of-h m-h-400px m-w-100 ">
          <div
            className="pa m-a  b-0px t-0px l-0px r-0px ns-br-r-2 of-h p-10px"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={LogotipoExample} style={{ objectFit: 'contain' }} alt="" />
          </div>
          <div className="w-100 h-100 h-pr-fl-ma p-10px">
            <div className="w-100 h-a t-a-c r-v-c h-pr-fl-ma">
            <Title h1 className={' ns-c-e '}>
              Su mejor marca
            </Title>
            <Title h2 >
             comienza así:
            </Title>
            </div>
          </div>
        </div>
        <div className="w-70 m-w-100 h-100 h-pr-fl-ma p-10px ">
            <div className="w-90 m-w-100 h-a h-pr-fl-ma p-20px r-h-c ghost enfasis ns-br-r-2 m-b-50px">
                <div className="w-100 h-a h-pr-fl-ma m-t-50px m-b-50px">
            <Title h2 className="p-b-10px ns-c-e t-a-c">
                Procedimiento
              </Title>
              <Title h4 className="p-b-10px t-a-c">
                Para darle la mejor identidad gráfica de todas, hay que ser los mejores, y para eso es necesario el proceso más efectivo...
              </Title></div>
               {/* // orange ----------------------- BRIEFING */}
          <div className="w-100 h-a p-10px ns-bg-e ns-br-r-2 flexbox m-b-20px ">
           <div className="w-and-h-100px ns-bg-e m-d-n ns-br-r-2 p-10px"><img src={DocumentListIcon} alt="" className="w-100 h-pr-fl-ma centered" /></div>
            <div className="w-85 m-w-100 p-10px ">
              <Title h3 className="p-b-10px">
              1 ) Completamos el briefing
              </Title>
              <Title h4 className="l-h-15px">
              Celebramos una reunión para coordinar todos los aspectos importantes de su marca ideal. Nos enfocaremos en conocer cuál es su visión acerca del futuro de su marca y nos aseguraremos de tener todas sus especificaciones para utilizarlas de referencia.
              </Title>
            </div>
          </div>
            {/* // orange ----------------------- INVESTIGACION */}
          <div className="w-100 h-a p-10px bg-d-t ns-br-r-2 flexbox m-b-20px">
           <div className="w-and-h-100px m-d-n  bg-d ns-br-r-2 p-10px"><img src={EyeIcon} alt="" className="w-100 h-pr-fl-ma centered" /></div>
            <div className="w-85 m-w-100 p-10px ">
              <Title h3 className="p-b-10px">
             2 <span className="ns-c-e">) Investigación</span>
              </Title>
              <Title h4 className="l-h-15px">
              Realizamos una investigación exhaustiva de su sector, analizando a la competencia, identificando tendencias y oportunidades de mercado, y comprendiendo las necesidades y preferencias de su audiencia objetivo.e su sector de mercado
              </Title>
            </div>
          </div>
             {/* // orange ----------------------- ESTUDIO */}
          <div className="w-100 h-a p-10px bg-d-t ns-br-r-2 flexbox m-b-20px">
             <div className="w-and-h-100px m-d-n  bg-d ns-br-r-2 p-10px"><img src={SearchIcon} alt="" className="w-100 h-pr-fl-ma centered" /></div>
            <div className="w-85 m-w-100 p-10px ">
         <Title h3 className="p-b-10px">
         3 <span className="ns-c-e">) Estudio de marca</span>
              </Title>
              <Title h4 className="l-h-15px">
              Realizamos un estudio detallado de su marca actual (si existe) y evaluamos su posicionamiento, identidad visual, percepción en el mercado y nivel de reconocimiento. También analizamos el valor de su marca y su relevancia en relación con su audiencia.
              </Title>
            </div>
          </div>
              {/* // orange ----------------------- PLANIFICACIÓN */}
              <div className="w-100 h-a p-10px bg-d-t ns-br-r-2 flexbox m-b-20px">
               <div className="w-and-h-100px m-d-n  bg-d ns-br-r-2 p-10px"><img src={GroupIcon} alt="" className="w-100 h-pr-fl-ma centered" /></div>
            <div className="w-85 m-w-100 p-10px ">
         <Title h3 className="p-b-10px">
         4 <span className="ns-c-e">) Planificación y eficiencia</span>
              </Title>
              <Title h4 className="l-h-15px">
              Con base en los hallazgos de la investigación y el estudio de marca, desarrollamos una estrategia integral de marca. Definimos los objetivos, la propuesta de valor única, la personalidad de la marca, los mensajes clave y los canales de comunicación adecuados para alcanzar el éxito deseado.
              </Title>
            </div>
          </div>
           {/* // orange ----------------------- PROPUESTA */}
           <div className="w-100 h-a p-10px bg-d-t ns-br-r-2 flexbox m-b-20px">
            <div className="w-and-h-100px m-d-n  bg-d ns-br-r-2 p-10px"><img src={PictureIcon} alt="" className="w-100 h-pr-fl-ma centered" /></div>
            <div className="w-85 m-w-100 p-10px ">
         <Title h3 className="p-b-10px">
         5 <span className="ns-c-e">) Propuesta creativa</span>
              </Title>
              <Title h4 className="l-h-15px">
              Creamos una propuesta de marca que refleje la esencia y los valores de su empresa. Esto incluye la creación o rediseño del logotipo, la paleta de colores, la tipografía, la voz de la marca y otros elementos visuales y verbales que formarán parte de su identidad de marca.
              </Title>
            </div>
          </div>
           {/* // orange ----------------------- VALIDACIÓN */}
           <div className="w-100 h-a p-10px bg-d-t ns-br-r-2 flexbox m-b-20px">
            <div className="w-and-h-100px m-d-n  bg-d ns-br-r-2 p-10px"><img src={SupervisedUserIcon} alt="" className="w-100 h-pr-fl-ma centered" /></div>
            <div className="w-85 m-w-100 p-10px ">
         <Title h3 className="p-b-10px">
         6 <span className="ns-c-e">) Validación y Retroalimentación</span>
              </Title>
              <Title h4 className="l-h-15px">
              Presentamos la propuesta de marca a los stakeholders clave y recopilamos sus comentarios y opiniones. A partir de esta retroalimentación, ajustamos y refinamos la propuesta para asegurarnos de que cumpla con los objetivos estratégicos y sea bien recibida por el público objetivo.
              </Title>
            </div>
          </div>
          {/* // orange ----------------------- COMPOSICIÓN */}
          <div className="w-100 h-a p-10px bg-d-t ns-br-r-2 flexbox m-b-20px">
           <div className="w-and-h-100px m-d-n  bg-d ns-br-r-2 p-10px"><img src={PuzzlePieceIcon} alt="" className="w-100 h-pr-fl-ma centered" /></div>
            <div className="w-85 m-w-100 p-10px ">
         <Title h3 className="p-b-10px">
        7 <span className="ns-c-e">) Composición de la Identidad Visual</span>
              </Title>
              <Title h4 className="l-h-15px">
              Una vez que la propuesta de marca es validada, trabajamos en la composición de la identidad visual completa. Creamos todos los elementos gráficos necesarios, como papelería corporativa, tarjetas de presentación, materiales de marketing, y cualquier otro medio necesario para comunicar la marca de manera coherente y efectiva.
              </Title>
            </div>
          </div>
           {/* // orange ----------------------- IMPLEMENTACIÓN */}
           <div className="w-100 h-a p-10px bg-d-t ns-br-r-2 flexbox m-b-20px">
            <div className="w-and-h-100px m-d-n  bg-d ns-br-r-2 p-10px"><img src={RocketIcon} alt="" className="w-100 h-pr-fl-ma centered" /></div>
            <div className="w-85 m-w-100 p-10px ">
         <Title h3 className="p-b-10px">
         8 <span className="ns-c-e">) Implementación y Lanzamiento</span>
              </Title>
              <Title h4 className="l-h-15px">
              Implementamos la nueva identidad de marca en todos los puntos de contacto relevantes, tanto en línea como fuera de línea. Preparamos un plan de lanzamiento para dar a conocer la nueva marca a su audiencia y asegurarnos de una transición fluida.
              </Title>
            </div>
          </div>
          {/* // orange ----------------------- MONITOREO */}
          <div className="w-100 h-a p-10px bg-d-t ns-br-r-2 flexbox m-b-20px">
           <div className="w-and-h-100px m-d-n  bg-d ns-br-r-2 p-10px"><img src={RadarIcon} alt="" className="w-100 h-pr-fl-ma centered" /></div>
            <div className="w-85 m-w-100 p-10px ">
         <Title h3 className="p-b-10px">
         9 <span className="ns-c-e">) Monitoreo y Evaluación</span>
              </Title>
              <Title h4 className="l-h-15px">
              Monitoreamos de cerca la recepción de la nueva marca y su impacto en el mercado. Evaluamos los resultados en comparación con los objetivos establecidos y realizamos ajustes si es necesario para mejorar su desempeño.
              </Title>
            </div>
          </div>

          {/* // orange ----------------------- MONITOREO */}
          <div className="w-100 h-a p-10px ns-bg-e ns-br-r-2 flexbox m-d-b j-c-c f-w-n-w">
            <div className="w-70 m-w-100 h-a h-pr-fl-ma  ">
             <div className="w-and-h-100px m-d-n  ns-br-r-2 ns-bg-e p-10px h-pr-fl-ma h-a"><img src={ChevronUpIcon} alt="" className="w-100 h-pr-fl-ma centered" /></div>
            <div className="w-a flexbox">
            <div className="w-100 p-10px h-pr-fl-ma h-a ">
         <Title h3 className="w-100 h-pr-fl-ma p-b-10px">
         10 ) Comenzar!
              </Title>
              <Title h4 className="w-100 h-pr-fl-ma l-h-15px">
              Contactenos y con gusto nos encargaremos de poner en marcha todo lo que sabemos, para que obtenga todo lo que desea.
              </Title>
            </div>
            </div>
            </div>
            <div className="w-30 m-w-100 p-10px bg-d ns-br-r-2 h-pr-fl-ma flexbox"><Btn text="Comenzar" className="ns-bg-e w-100 p-15px f-w-bo t-a-c " enlace="https://wa.me/message/3J7NXI5ETDK7F1"></Btn></div>
          </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Identity
