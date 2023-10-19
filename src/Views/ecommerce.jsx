import React, { Fragment } from 'react'

import { Title, Btn } from '../components'
import DocumentListIcon from '../assets/icons/document_list.svg'
/* import SearchIcon from '../assets/icons/quick_reference.svg'
import EyeIcon from '../assets/icons/eye.svg'
import GroupIcon from '../assets/icons/group.svg'
import PictureIcon from '../assets/icons/picture.svg'
import PuzzlePieceIcon from '../assets/icons/puzzle-piece-icon.svg'
import SupervisedUserIcon from '../assets/icons/supervised_user.svg'
import RocketIcon from '../assets/icons/rocket.svg'
import RadarIcon from '../assets/icons/radar-icon.svg' */
import ChevronUpIcon from '../assets/icons/chevron_up_double.svg'
import ImgExampleOne from '../assets/images/views/ecommerce-image-f-b.jpg'
import ImgExampleTwo from '../assets/images/views/ecommerce-image-edit.jpg'
const Ecommerce = () => {
  return (
    <Fragment>
      <div className="w-100 h-100 h-pr-fl-ma  p-20px ">
        <div style={{ width: '800px' }} className="r-h-c m-w-100 h-a h-pr-fl-ma p-10px ">
            <div className="w-100 m-w-100 h-a h-pr-fl-ma p-20px r-h-c ghost enfasis ns-br-r-2 m-b-50px">
                <div className="w-100 h-a h-pr-fl-ma m-t-50px m-b-50px">
            <Title h2 className="p-b-10px ns-c-e t-a-c">
               SOLUCIONES PARA POTENCIAR SUS VENTAS ONLINE
              </Title>
              <Title h4 className="p-b-10px t-a-c">
               Creamos todo para que tu tienda se vea super genial ya sea en tu Instagram, MercadoLibre, Amazon, Shopify, SHEIN, AliExpress, Ebay, Wordpress o para tu Sitio web Personalizado...
              </Title></div>
               {/* // orange ----------------------- Fotografía de Producto */}
               <div className="w-100 h-a p-10px bg-d-t h-pr-fl-ma flexbox m-d-b ns-br-r-2 m-b-20px">
                <div className="w-100 d-b m-d-f h-a h-pr-fl-ma">
               <div className="w-and-h-300px h-pr-fl-ma bg-d ns-br-r-2 b-s-b-b of-h p-10px"><img src={ImgExampleOne} alt="" className="w-100 ns-br-r-1 b-s-b-b of-h h-pr-fl-ma " /></div></div>
            <div className="w-100 h-a h-pr-fl-ma p-20px ">
                  <Title h3 className="p-b-10px t-a-c">

              Fotografía de Producto
              </Title>
              <Title h4 className="l-h-15px p-b-10px">
              Destacamos tus productos con imágenes profesionales de alta calidad. Fondos blancos, detalles nítidos y colores precisos.
              </Title>
              <Title h4 className="l-h-15px ns-c-e">
              ¡Las imágenes con fondo blanco son escenciales para MercadoLibre y Amazon, gracias a ustedes transforme mi tienda en línea! Mis productos nunca se vieron tan profesionales. ¡Recomiendo ampliamente este servicio! - María Rodríguez - Argentina
              </Title>
            </div>
          </div>
          {/* // blue ----------------------- Edición de Imágenes */}
          <div className="w-100 h-a p-10px bg-d-t h-pr-fl-ma flexbox m-d-b ns-br-r-2 m-b-20px">
                <div className="w-100 d-b m-d-f h-a h-pr-fl-ma">
               <div className="w-and-h-300px h-pr-fl-ma bg-d ns-br-r-2 p-10px"><img src={ImgExampleTwo} alt="" className="w-100 h-pr-fl-ma " /></div></div>
            <div className="w-100 h-a h-pr-fl-ma p-20px ">
        <Title h3 className="p-b-10px t-a-c">

      Edición de Imágenes
    </Title>
    <Title h4 className="l-h-15px p-b-10px">
      Transformamos tus fotos de producto en imágenes perfectas con fondos y textos llamativos, retoques y mejoras de la calidad visual.
    </Title>
    <Title h4 className="l-h-15px ns-c-e">
      {/* Comentario de un cliente */}
      Gracias a la edición de imágenes de mi tienda, mis fotos ahora son impecables. Esto ha tenido un impacto positivo en mis ventas como pocas veces ha sucedido. ¡Gran trabajo y muchísimas gracias! - Franco Leal - México
    </Title>
  </div>
</div>

{/* // green ----------------------- Diseño de Portadas */}
<div className="w-100 h-a p-10px bg-d-t h-pr-fl-ma flexbox m-d-b ns-br-r-2 m-b-20px">
                <div className="w-100 d-b m-d-f h-a h-pr-fl-ma">
               <div className="w-and-h-300px h-pr-fl-ma bg-d ns-br-r-2 p-10px"><img src={DocumentListIcon} alt="" className="w-100 h-pr-fl-ma " /></div></div>
            <div className="w-100 h-a h-pr-fl-ma p-20px ">
        <Title h3 className="p-b-10px t-a-c">

      Diseño de Portadas
    </Title>
    <Title h4 className="l-h-15px p-b-10px">
      Creamos portadas atractivas para tus listados en Amazon, AliExpress, y más. Capturamos la atención de los compradores desde el primer vistazo.
    </Title>
    <Title h4 className="l-h-15px ns-c-e">
      {/* Comentario de un cliente */}
     ¡No lo puedo creer! Creamos juntos un montón de portadas que realmente resaltan en los listados de Amazon. Ahora mis productos se destacan entre la multitud. Ojalá los hubiese conocido antes! ¡Increíble servicio! - Carla González - España
    </Title>
  </div>
</div>

{/* // red ----------------------- Optimización de Fotos */}
<div className="w-100 h-a p-10px bg-d-t h-pr-fl-ma flexbox m-d-b ns-br-r-2 m-b-20px">
                <div className="w-100 d-b m-d-f h-a h-pr-fl-ma">
               <div className="w-and-h-300px h-pr-fl-ma bg-d ns-br-r-2 p-10px"><img src={DocumentListIcon} alt="" className="w-100 h-pr-fl-ma " /></div></div>
            <div className="w-100 h-a h-pr-fl-ma p-20px ">
        <Title h3 className="p-b-10px t-a-c">

      Optimización de Fotos
    </Title>
    <Title h4 className="l-h-15px p-b-10px">
      Mejoramos la visibilidad de tus productos con imágenes optimizadas. Aumentamos las conversiones y el interés de los clientes gracias a la fluidez e intuitividad de tu sitio.
    </Title>
    <Title h4 className="l-h-15px ns-c-e">
      {/* Comentario de un cliente */}
      De verdad no creía que esto fuera tan fácil... Pasé meses sin vender nada y en pocos días llegué a un montón de personas! Las conversiones se dispararon y mis clientes están encantados. ¡Un servicio esencial! - Alejandro Suarez - Chile
    </Title>
  </div>
</div>

{/* // yellow ----------------------- Fotografía de Catálogo */}
<div className="w-100 h-a p-10px bg-d-t h-pr-fl-ma flexbox m-d-b ns-br-r-2 m-b-20px">
                <div className="w-100 d-b m-d-f h-a h-pr-fl-ma">
               <div className="w-and-h-300px h-pr-fl-ma bg-d ns-br-r-2 p-10px"><img src={DocumentListIcon} alt="" className="w-100 h-pr-fl-ma " /></div></div>
            <div className="w-100 h-a h-pr-fl-ma p-20px ">
        <Title h3 className="p-b-10px t-a-c">

      Fotografía de Catálogo
    </Title>
    <Title h4 className="l-h-15px p-b-10px">
      Obtén imágenes profesionales para tu catálogo. Mostramos tus productos de manera atractiva y coherente con cada contexto en una composición perfecta.
    </Title>
    <Title h4 className="l-h-15px ns-c-e">
      {/* Comentario de un cliente */}
      La fotografía de catálogo de OrigenStudios hizo que mis productos se vean espectaculares. La calidad y atención al detalle son incomparables. ¡Muy satisfecho! Ojalá mi competencia no se entere que trabajamos juntos jajaj - Martín Sánchez - Argentina
    </Title>
  </div>
</div>

{/* // purple ----------------------- Recorte y Retoque de Imágenes */}
<div className="w-100 h-a p-10px bg-d-t h-pr-fl-ma flexbox m-d-b ns-br-r-2 m-b-20px">
                <div className="w-100 d-b m-d-f h-a h-pr-fl-ma">
               <div className="w-and-h-300px h-pr-fl-ma bg-d ns-br-r-2 p-10px"><img src={DocumentListIcon} alt="" className="w-100 h-pr-fl-ma " /></div></div>
            <div className="w-100 h-a h-pr-fl-ma p-20px ">
        <Title h3 className="p-b-10px t-a-c">

      Recorte y Retoque de Imágenes
    </Title>
    <Title h4 className="l-h-15px p-b-10px">
      Eliminamos fondos y artefactos no deseados, retocamos y ajustamos todo lo necesario para que tus productos brillen en imágenes de alta calidad.
    </Title>
    <Title h4 className="l-h-15px ns-c-e">
      {/* Comentario de un cliente */}
      ¡Gracias chicos y chicas! ¡Estoy por transformar mis fotos! Las imágenes ahora son perfectas con fondos blancos y detalles nítidos. Servicio rápido y de alta calidad. ¡Viva Uruguay! - Ana Martínez - España
    </Title>
  </div>
</div>

{/* // pink ----------------------- Creación de Imágenes Publicitarias */}
<div className="w-100 h-a p-10px bg-d-t h-pr-fl-ma flexbox m-d-b ns-br-r-2 m-b-20px">
                <div className="w-100 d-b m-d-f h-a h-pr-fl-ma">
               <div className="w-and-h-300px h-pr-fl-ma bg-d ns-br-r-2 p-10px"><img src={DocumentListIcon} alt="" className="w-100 h-pr-fl-ma " /></div></div>
            <div className="w-100 h-a h-pr-fl-ma p-20px ">
        <Title h3 className="p-b-10px t-a-c">

      Creación de Imágenes Publicitarias
    </Title>
    <Title h4 className="l-h-15px p-b-10px">
      Diseñamos imágenes llamativas para anuncios y promociones. Aumentamos tus ventas e interacciones con reconocimientos visuales atractivos y profesionales.
    </Title>
    <Title h4 className="l-h-15px ns-c-e">
      {/* Comentario de un cliente */}
      Las imágenes publicitarias creadas por Nick y su equipo han impulsado nuestras campañas. Atraen la atención y generan ventas. ¡Estamos encantados! - Carlos Pelaez - Colombia
    </Title>
  </div>
</div>

{/* // teal ----------------------- Fotografía de Estilo de Vida */}
<div className="w-100 h-a p-10px bg-d-t h-pr-fl-ma flexbox m-d-b ns-br-r-2 m-b-20px">
                <div className="w-100 d-b m-d-f h-a h-pr-fl-ma">
               <div className="w-and-h-300px h-pr-fl-ma bg-d ns-br-r-2 p-10px"><img src={DocumentListIcon} alt="" className="w-100 h-pr-fl-ma " /></div></div>
            <div className="w-100 h-a h-pr-fl-ma p-20px ">
        <Title h3 className="p-b-10px t-a-c">

      Fotografía de Estilo de Vida
    </Title>
    <Title h4 className="l-h-15px p-b-10px">
      Mostramos tus productos en situaciones de la vida real. Creamos conexiones emocionales con tus clientes a través de imágenes de estilo de vida.
    </Title>
    <Title h4 className="l-h-15px ns-c-e">
      {/* Comentario de un cliente */}
      Con la fotografía de estilo de vida, mis productos llegan hasta donde mis clientes están, porque los ven directamente en su rutina sin salir de mi web. Los clientes pueden verse usando mis productos, lo que ha sido un gran éxito. - Laura Rodríguez - Estados Unidos
    </Title>
  </div>
</div>

{/* // lavender ----------------------- Diseño de Logotipos */}
<div className="w-100 h-a p-10px bg-d-t h-pr-fl-ma flexbox m-d-b ns-br-r-2 m-b-20px">
                <div className="w-100 d-b m-d-f h-a h-pr-fl-ma">
               <div className="w-and-h-300px h-pr-fl-ma bg-d ns-br-r-2 p-10px"><img src={DocumentListIcon} alt="" className="w-100 h-pr-fl-ma " /></div></div>
            <div className="w-100 h-a h-pr-fl-ma p-20px ">
        <Title h3 className="p-b-10px t-a-c">

      Diseño de Logotipos
    </Title>
    <Title h4 className="l-h-15px p-b-10px">
      Destacamos tu marca con un logotipo único y memorable. Aseguramos el reconocimiento de tu marca en todas tus publicaciones.
    </Title>
    <Title h4 className="l-h-15px ns-c-e">
      {/* Comentario de un cliente */}
      Gracias Nick y a todo el Team por diseñar nuestro logotipo. No sabíamos que un logo importaba tanto! Ahora, nuestra marca se destaca en todas partes. ¡No podríamos estar más contentos con el resultado! - Sergio Fernandez - Paraguay
    </Title>
  </div>
</div>

{/* // pink-lavender ----------------------- Creación de GIFs de Producto */}
<div className="w-100 h-a p-10px bg-d-t h-pr-fl-ma flexbox m-d-b ns-br-r-2 m-b-20px">
                <div className="w-100 d-b m-d-f h-a h-pr-fl-ma">
               <div className="w-and-h-300px h-pr-fl-ma bg-d ns-br-r-2 p-10px"><img src={DocumentListIcon} alt="" className="w-100 h-pr-fl-ma " /></div></div>
            <div className="w-100 h-a h-pr-fl-ma p-20px ">
        <Title h3 className="p-b-10px t-a-c">

      Creación de GIFs de Producto
    </Title>
    <Title h4 className="l-h-15px p-b-10px">
      Le damos vida a tus productos con GIFs animados. Atraemos la atención con contenido dinámico y atractivo, que genera interés y compras rápidas.
    </Title>
    <Title h4 className="l-h-15px ns-c-e">
      {/* Comentario de un cliente */}
      Mi web está viva! Los GIFs de productos de son impresionantes. Agregaron dinamismo a mi tienda en línea y aumentaron la interacción con los productos. ¡Gran servicio! - Luli Díaz Etchenique - España
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
        ¡Iniciemos hoy!
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

export default Ecommerce
