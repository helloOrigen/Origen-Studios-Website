import React, { Fragment } from 'react'

import { Title, Btn, FastDescription } from '../components'
/* import SearchIcon from '../assets/icons/quick_reference.svg'
import EyeIcon from '../assets/icons/eye.svg'
import GroupIcon from '../assets/icons/group.svg'
import PictureIcon from '../assets/icons/picture.svg'
import PuzzlePieceIcon from '../assets/icons/puzzle-piece-icon.svg'
import SupervisedUserIcon from '../assets/icons/supervised_user.svg'
import RocketIcon from '../assets/icons/rocket.svg'
import RadarIcon from '../assets/icons/radar-icon.svg' */
import ChevronUpIcon from '../assets/icons/chevron_up_double.svg'
import ImgExampleOne from '../assets/images/views/ecommerce-image-data.jpg'
import ImgExampleTwo from '../assets/images/views/ecommerce-image-photo.jpg'
import ImgExampleThree from '../assets/images/views/ecommerce-image-amazon.jpg'
import ImgExampleFour from '../assets/images/views/ecommerce-image-scan.jpg'
import ImgExampleFive from '../assets/images/views/ecommerce-image-catalogo.jpg'
import ImgExampleSix from '../assets/images/views/ecommerce-image-edit.jpg'
import ImgExampleSeven from '../assets/images/views/ecommerce-image-cut.jpg'
import ImgExampleEight from '../assets/images/views/ecommerce-image-promo.jpg'
import ImgExampleNine from '../assets/images/views/ecommerce-image-life.jpg'
import ImgExampleTen from '../assets/images/views/ecommerce-image-logo.jpg'
import ImgExampleEleven from '../assets/images/views/ecommerce-image-variants.jpg'
import ImgExampleTwelve from '../assets/images/views/ecommerce-image-gifs.gif'
const Ecommerce = () => {
  return (
    <Fragment>
      <div className="w-100 h-100 h-pr-fl-ma  p-10px ">
        <div
          style={{ width: '1000px' }}
          className="r-h-c m-w-100 h-a h-pr-fl-ma p-10px "
        >
          <div className="w-100 m-w-100 h-a h-pr-fl-ma p-10px r-h-c  ns-br-r-2 m-b-50px">
            <div className="w-100 h-a h-pr-fl-ma m-t-50px m-b-50px">
              <Title h2 className="p-b-10px ns-c-e  t-a-c">
                SOLUCIONES PARA POTENCIAR SUS VENTAS ONLINE
              </Title>
              <Title h4 className="p-b-10px t-a-c">
                Creamos todo para que tu tienda se vea super genial ya sea en tu
                Instagram, MercadoLibre, Amazon, Shopify, SHEIN, AliExpress,
                Ebay, Wordpress o para tu Sitio web Personalizado...
              </Title>
            </div>
            {/* // orange ----------------------- Fotografía de Producto */}
            <FastDescription
              titulo="Búsqueda y reconocimiento de producto"
              descripcion="Buscamos, recopilamos y analizamos todas las referencias de tu producto en todas las tiendas disponibles, y en tiendas de la competencia para ofrecerte las imágenes de mayor eficiencia y calidad."
              comentario="Nunca pensé que haciendo la investigación previa de mis propios productos obtendría mayor rentabilidad, pero jamás imaginé que alguien podría hacerlo por mí, de verdad, estoy súper agradecida con ustedes. ¡Recomiendo ampliamente este servicio!"
              nombre="Mercedes Luna"
              pais="Argentina"
              image={ImgExampleOne}
              alt="Image One"
            />
           {/* // orange ----------------------- Fotografía de Producto */}
<FastDescription
  titulo="Fotografía y Pulído de Producto"
  descripcion="Fotografiamos y pulimos tus productos para que se vean geniales en tu Instagram, MercadoLibre, Amazon, Shopify, SHEIN, AliExpress, Ebay, Wordpress o para tu Sitio web Personalizado."
  comentario="¡Las imágenes con fondo blanco son esenciales para MercadoLibre y Amazon, gracias a ustedes transformé mi tienda en línea! Mis productos nunca se vieron tan profesionales. ¡Recomiendo ampliamente este servicio!"
  nombre="María Rodríguez"
  pais="Argentina"
  image={ImgExampleTwo}
  alt="Image One"
/>

{/* // blue ----------------------- Edición de Imágenes */}
<FastDescription
  titulo="Edición de Imágenes"
  descripcion="Transformamos tus fotos de producto en imágenes perfectas con fondos y textos llamativos, retoques y mejoras de la calidad visual."
  comentario="Gracias a la edición de imágenes de mi tienda, mis fotos ahora son impecables. Esto ha tenido un impacto positivo en mis ventas como pocas veces ha sucedido. ¡Gran trabajo y muchísimas gracias!"
  nombre="Franco Leal"
  pais="México"
  image={ImgExampleSix}
  alt="Image Two"
/>

{/* // green ----------------------- Diseño de Portadas */}
<FastDescription
  titulo="Diseño de Portadas"
  descripcion="Creamos portadas atractivas para tus listados en Amazon, AliExpress, y más. Capturamos la atención de los compradores desde el primer vistazo."
  comentario="¡No lo puedo creer! Creamos juntos un montón de portadas que realmente resaltan en los listados de Amazon. Ahora mis productos se destacan entre la multitud. Ojalá los hubiese conocido antes. ¡Increíble servicio!"
  nombre="Carla González"
  pais="España"
  image={ImgExampleThree}
  alt="Image Three"
/>

{/* // red ----------------------- Optimización de Fotos */}
<FastDescription
  titulo="Optimización de Fotos"
  descripcion="Mejoramos la visibilidad de tus productos con imágenes optimizadas. Aumentamos las conversiones y el interés de los clientes gracias a la fluidez e intuitividad de tu sitio."
  comentario="De verdad no creía que esto fuera tan fácil... Pasé meses sin vender nada y en pocos días llegué a un montón de personas! Las conversiones se dispararon y mis clientes están encantados. ¡Un servicio esencial!"
  nombre="Alejandro Suarez"
  pais="Chile"
  image={ImgExampleFour}
  alt="Image Four"
/>

{/* // yellow ----------------------- Fotografía de Catálogo */}
<FastDescription
  titulo="Fotografía de Catálogo"
  descripcion="Obtén imágenes profesionales para tu catálogo. Mostramos tus productos de manera atractiva y coherente con cada contexto en una composición perfecta."
  comentario="La fotografía de catálogo de OrigenStudios hizo que mis productos se vean espectaculares. La calidad y atención al detalle son incomparables. ¡Muy satisfecho! Ojalá mi competencia no se entere que trabajamos juntos jaja"
  nombre="Martín Sánchez"
  pais="Argentina"
  image={ImgExampleFive}
  alt="Image Five"
/>

{/* // purple ----------------------- Recorte y Retoque de Imágenes */}
<FastDescription
  titulo="Recorte y Retoque de Imágenes"
  descripcion="Eliminamos fondos y artefactos no deseados, retocamos y ajustamos todo lo necesario para que tus productos brillen en imágenes de alta calidad."
  comentario="¡Gracias chicos y chicas! ¡Estoy por transformar mis fotos! Las imágenes ahora son perfectas con fondos blancos y detalles nítidos. Servicio rápido y de alta calidad. ¡Viva Uruguay!"
  nombre="Ana Martínez"
  pais="España"
  image={ImgExampleSeven}
  alt="Image Six"
/>

{/* // pink ----------------------- Creación de Imágenes Publicitarias */}
<FastDescription
  titulo="Creación de Imágenes Publicitarias"
  descripcion="Diseñamos imágenes llamativas para anuncios y promociones. Aumentamos tus ventas e interacciones con reconocimientos visuales atractivos y profesionales."
  comentario="Las imágenes publicitarias creadas por Nick y su equipo han impulsado nuestras campañas. Atraen la atención y generan ventas. ¡Estamos encantados!"
  nombre="Carlos Pelaez"
  pais="Colombia"
  image={ImgExampleEight}
  alt="Image Seven"
/>

{/* // teal ----------------------- Fotografía de Estilo de Vida */}
<FastDescription
  titulo="Fotografía de Estilo de Vida"
  descripcion="Mostramos tus productos en situaciones de la vida real. Creamos conexiones emocionales con tus clientes a través de imágenes de estilo de vida."
  comentario="Con la fotografía de estilo de vida, mis productos llegan hasta donde mis clientes están, porque los ven directamente en su rutina sin salir de mi web. Los clientes pueden verse usando mis productos, lo que ha sido un gran éxito."
  nombre="Laura Rodríguez"
  pais="Estados Unidos"
  image={ImgExampleNine}
  alt="Image Eight"
/>

{/* // lavender ----------------------- Diseño de Logotipos */}
<FastDescription
  titulo="Diseño de Logotipos"
  descripcion="Destacamos tu marca con un logotipo único y memorable. Aseguramos el reconocimiento de tu marca en todas tus publicaciones."
  comentario="Gracias Nick y a todo el Team por diseñar nuestro logotipo. No sabíamos que un logo importaba tanto! Ahora, nuestra marca se destaca en todas partes. ¡No podríamos estar más contentos con el resultado!"
  nombre="Sergio Fernandez"
  pais="Paraguay"
  image={ImgExampleTen}
  alt="Image Nine"
/>

{/* // pink-lavender ----------------------- Creación de GIFs de Producto */}
<FastDescription
  titulo="Creación de GIFs de Producto"
  descripcion="Le damos vida a tus productos con GIFs animados. Atraemos la atención con contenido dinámico y atractivo, que genera interés y compras rápidas."
  comentario="Mi web está viva! Los GIFs de productos de son impresionantes. Agregaron dinamismo a mi tienda en línea y aumentaron la interacción con los productos. ¡Gran servicio!"
  nombre="Luli Díaz Etchenique"
  pais="España"
  image={ImgExampleTwelve}
  alt="Image Ten"
/>
{/* // pink-lavender ----------------------- Generación de variantes */}
<FastDescription
  titulo="Generación de Variantes"
  descripcion="Buscamos y/o Generamos las variantes de tu producto, para que tus clientes puedan personalizar su experiencia en base a sus gustos."
  comentario="Esto es algo que llevaba esperando mucho tiempo! Vendemos miles de productos y tengo que crear variantes para cada uno, no siempre se encuentran en internet, este servicio es escencial! ¡Gracias a todos por hacer esto posible!"
  nombre="Bryan Gomez Lewinski"
  pais="Paraguay"
  image={ImgExampleEleven}
  alt="Image Ten"
/>

            {/* // orange ----------------------- MONITOREO */}
            <div className="w-100 h-a p-10px ns-bg-e ns-br-r-2 flexbox m-d-b j-c-c f-w-n-w">
              <div className="w-70 m-w-100 h-a h-pr-fl-ma  ">
                <div className="w-and-h-100px m-d-n  ns-br-r-2 ns-bg-e p-10px h-pr-fl-ma h-a">
                  <img
                    src={ChevronUpIcon}
                    alt=""
                    className="w-100 h-pr-fl-ma centered"
                  />
                </div>
                <div className="w-a flexbox">
                  <div className="w-100 p-10px h-pr-fl-ma h-a ">
                    <Title h3 className="w-100 h-pr-fl-ma p-b-10px">
                      ¡Iniciemos hoy!
                    </Title>
                    <Title h4 className="w-100 h-pr-fl-ma l-h-15px">
                      Contactenos y con gusto nos encargaremos de poner en
                      marcha todo lo que sabemos, para que obtenga todo lo que
                      desea.
                    </Title>
                  </div>
                </div>
              </div>
              <div className="w-30 m-w-100 p-10px bg-d ns-br-r-2 h-pr-fl-ma flexbox">
                <Btn
                  text="Comenzar"
                  className="ns-bg-e w-100 p-15px f-w-bo t-a-c "
                  enlace="https://wa.me/message/3J7NXI5ETDK7F1"
                ></Btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Ecommerce
