import React from 'react'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MercadoLibre from '../assets/images/logos/mercadolibre.svg'
import Wallmart from '../assets/images/logos/wallmart.svg'
import Alibaba from '../assets/images/logos/alibaba.svg'
import Shein from '../assets/images/logos/shein.svg'
import Ebay from '../assets/images/logos/ebay.svg'
import Amazon from '../assets/images/logos/amazon.svg'
import AliExpress from '../assets/images/logos/aliexpress.svg'

import ImgExampleOne from '../assets/images/views/ecommerce-image-data.jpg'
import ImgExampleThree from '../assets/images/views/ecommerce-image-amazon.jpg'
import ImgExampleFour from '../assets/images/views/ecommerce-image-scan.jpg'
import ImgExampleNine from '../assets/images/views/ecommerce-image-life.jpg'
import ImgExampleTen from '../assets/images/views/ecommerce-image-logo.jpg'
import ImgExampleEleven from '../assets/images/views/ecommerce-image-variants.jpg'
/*
import ImgExampleTwo from '../assets/images/views/ecommerce-image-photo.jpg'

import ImgExampleFour from '../assets/images/views/ecommerce-image-scan.jpg'
import ImgExampleFive from '../assets/images/views/ecommerce-image-catalogo.jpg'
import ImgExampleSix from '../assets/images/views/ecommerce-image-edit.jpg'
import ImgExampleSeven from '../assets/images/views/ecommerce-image-cut.jpg'
import ImgExampleEight from '../assets/images/views/ecommerce-image-promo.jpg'

import ImgExampleTwelve from '../assets/images/views/ecommerce-image-gifs.gif' */

import { Title, Btn, NumberCounter } from '../components/index'

export default function Home (props) {
  const settings = {
    dots: false, // Muestra los puntos de navegación
    infinite: true, // Permite un deslizamiento infinito
    speed: 100, // Velocidad de animación en milisegundos
    slidesToShow: 5, // Número de logos que se muestran a la vez
    slidesToScroll: 1, // Número de logos que se desplazan a la vez
    autoplay: true, // Habilita el desplazamiento automático
    autoplaySpeed: 2000, // Interva
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <>
        <div className="w-100 h-a h-pr-fl-ma b-s-b-b">
          <div className='w-90 r-h-c h-600px h-pr-fl-ma ns-br-r-2 m-b-50px of-h'>
            <div className='w-50 m-w-100 h-100 h-pr-fl-ma tab-w-100 p-50px'>
            <img src={ImgExampleTen} className='w-100 h-100 p-a ma l-0px tab-d-b r-0px t-0px b-0px d-n m-d-b img-cover img-filter-gray o-10'/>
            <h1 className="w-90  f-f-Gilroy noselect m-ns-f-s-big  t-a-c centered ns-f-s-giant c-white ">Hagamos <br /> crecer su<br /><span className=' ns-c-e-animated'>negocio</span></h1>
            </div>
            <div className='w-50 m-w-100 h-100 h-pr-fl-ma m-d-n tab-d-n of-h p-20px'><img src={ImgExampleTen} className='w-100 h-100 ns-br-r-2 h-pr-fl-ma img-cover img-filter-gray o-50'/></div>
          </div>
          <div className='ContainerLogoMarks w-90 r-h-c h-a of-h b-s-b-b p-20px p-l-50px p-r-50px h-pr-fl-ma ns-bg-e ns-br-r-2 m-b-50px'>
        <Slider {...settings} >
          <div className='LogoMarks w-150px h-100px p-10px h-pr-fl-ma'><img src={MercadoLibre} className='w-100 h-100 h-pr-fl-ma'/></div>
          <div className='LogoMarks w-150px h-100px p-10px h-pr-fl-ma'><img src={Wallmart} className='w-100 h-100 h-pr-fl-ma'/></div>
          <div className='LogoMarks w-150px h-100px p-10px h-pr-fl-ma'><img src={Alibaba} className='w-100 h-100 h-pr-fl-ma'/></div>
          <div className='LogoMarks w-150px h-100px p-10px h-pr-fl-ma'><img src={Shein} className='w-100 h-100 h-pr-fl-ma'/></div>
          <div className='LogoMarks w-150px h-100px p-10px h-pr-fl-ma'><img src={Ebay} className='w-100 h-100 h-pr-fl-ma'/></div>
          <div className='LogoMarks w-150px h-100px p-10px h-pr-fl-ma'><img src={Amazon} className='w-100 h-100 h-pr-fl-ma'/></div>
          <div className='LogoMarks w-150px h-100px p-10px h-pr-fl-ma'><img src={AliExpress} className='w-100 h-100 h-pr-fl-ma'/></div>
        </Slider>
      </div>
       {/* -------------------------------------------------------------------- 1 */}
          <div className='w-90 r-h-c h-300px m-h-400px m-b-50px ns-br-r-2 h-pr-fl-ma bg-d'>
            <div className='w-50 m-w-100 h-100 m-h-a h-pr-fl-ma  m-d-n'><div className='w-100 h-100 h-pr-fl-ma'><img src={ImgExampleOne} className='w-100 h-100 p-a ma l-0px r-0px t-0px b-0px img-cover img-filter-gray o-50'/><Btn text="Ver más" className="ns-bg-e w-300px centered p-15px f-w-bo t-a-c " enlace="/ecommerce"></Btn></div></div>
            <div className='w-50 m-w-100 h-100 m-h-a h-pr-fl-ma  p-50px'>
            <img src={ImgExampleOne} className='w-100 h-100 p-a ma l-0px r-0px t-0px b-0px d-n m-d-b img-cover img-filter-gray o-10'/>
              <div className='w-100 h-a r-v-c h-pr-fl-ma'>
            <Title h2 className="w-100 h-a h-pr-fl-ma c-white m-b-5px">Realizamos estudios e investigaciones de sus productos.</Title>
            <Title h4 className="w-100 h-a h-pr-fl-ma ns-c-e">Buscamos y recopilamos todos los detalles <br /> para potenciar las fortalezas y corregir las debilidades de sus productos .</Title>
            <Btn text="• Ver más" className="ns-bg-e w-100 d-n m-d-b h-pr-fl-ma p-15px f-w-bo m-t-20px" enlace="/ecommerce"></Btn>
            </div>
            </div>
          </div>
          {/* -------------------------------------------------------------------- 2 */}
          <div className='w-90 r-h-c h-300px m-h-400px m-b-50px ns-br-r-2 h-pr-fl-ma bg-d of-h'>
            <div className='w-50 m-w-100 h-100 h-pr-fl-ma  p-50px'>
            <img src={ImgExampleThree} className='w-100 h-100 p-a ma l-0px r-0px t-0px b-0px d-n m-d-b img-cover img-filter-gray o-10'/>
              <div className='w-100 h-a r-v-c h-pr-fl-ma'>
            <Title h2 className="w-100 h-pr-fl-ma c-white m-b-5px">Nos encargamos de sus publicaciones de producto.</Title>
            <Title h4 className="w-100 h-pr-fl-ma ns-c-e">Preparamos todos los assets necesarios <br /> para facilitar la publicación de todos sus productos.</Title>
            <Btn text="• Ver más" className="ns-bg-e w-100 d-n m-d-b h-pr-fl-ma p-15px f-w-bo m-t-20px" enlace="/ecommerce"></Btn>
            </div>
            </div>
            <div className='w-50 m-w-100 h-100 h-pr-fl-ma  m-d-n'><div className='w-100 h-100 h-pr-fl-ma'><div className='w-100 h-100 h-pr-fl-ma'><img src={ImgExampleThree} className='w-100 h-100 p-a ma l-0px r-0px t-0px b-0px img-cover img-filter-gray o-50'/><Btn text="Ver más" className="ns-bg-e w-300px centered p-15px f-w-bo t-a-c " enlace="/ecommerce"></Btn> </div></div></div>
          </div>
          {/* -------------------------------------------------------------------- 3 */}
          <div className='w-90 r-h-c h-300px m-h-400px m-b-50px ns-br-r-2 h-pr-fl-ma bg-d of-h'>
            <div className='w-50 m-w-100 h-100   h-pr-fl-ma  m-d-n'><div className='w-100 h-100 h-pr-fl-ma'><img src={ImgExampleFour} className='w-100 h-100 p-a ma l-0px r-0px t-0px b-0px img-cover img-filter-gray o-50'/><Btn text="Ver más" className="ns-bg-e w-300px centered p-15px f-w-bo t-a-c " enlace="/ecommerce"></Btn> </div></div>
            <div className='w-50 m-w-100 h-100 h-pr-fl-ma  p-50px'>
            <img src={ImgExampleFour} className='w-100 h-100 p-a ma l-0px r-0px t-0px b-0px d-n m-d-b img-cover img-filter-gray o-10'/>
              <div className='w-100 h-a r-v-c h-pr-fl-ma'>
            <Title h2 className="w-100 c-white m-b-5px">Mejoramos y optimizamos la calidad de sus publicaciones.</Title>
            <Title h4 className="w-100 ns-c-e">Utilizamos todos los recursos disponibles así como Inteligencia Artificial <br /> para potenciar la visibilidad de todos sus productos productos.</Title>
            <Btn text="• Ver más" className="ns-bg-e w-100 d-n m-d-b h-pr-fl-ma p-15px f-w-bo m-t-20px " enlace="/ecommerce"></Btn>
            </div>
            </div>
          </div>
 {/* -------------------------------------------------------------------- 4 */}
 <div className='w-90 r-h-c h-300px m-h-400px m-b-50px ns-br-r-2 h-pr-fl-ma bg-d of-h'>            <div className='w-50 m-w-100 h-100 h-pr-fl-ma  p-50px'>
            <img src={ImgExampleEleven} className='w-100 h-100 p-a ma l-0px r-0px t-0px b-0px d-n m-d-b img-cover img-filter-gray o-10'/>
              <div className='w-100 h-a r-v-c h-pr-fl-ma'>
            <Title h2 className="w-100 c-white m-b-5px">Buscamos y/o producimos las variantes de sus productos.</Title>
            <Title h4 className="w-100 ns-c-e">Facilitamos la búsqueda y creación de variantes de sus productos <br /> para personalizar la experiencia de sus clientes.</Title>
            <Btn text="• Ver más" className="ns-bg-e w-100 d-n m-d-b h-pr-fl-ma p-15px f-w-bo m-t-20px " enlace="/ecommerce"></Btn>
            </div>
            </div>
            <div className='w-50 m-w-100 h-100 h-pr-fl-ma m-d-n'><div className='w-100 h-100 h-pr-fl-ma'><img src={ImgExampleEleven} className='w-100 h-100 p-a ma l-0px r-0px t-0px b-0px img-cover img-filter-gray o-50'/><Btn text="Ver más" className="ns-bg-e w-300px centered p-15px f-w-bo t-a-c " enlace="/ecommerce"></Btn> </div></div>
          </div>

          {/* -------------------------------------------------------------------- 5 */}
          <div className='w-90 r-h-c h-a m-b-50px ns-br-r-2 flexbox f-w-n-w m-f-w-w m-f-d-c h-pr-fl-ma'>
          <div className='w-33 m-w-100 h-100 h-pr-fl-ma p-10px bg-d-t ns-br-r-2 of-h'>
            <Title h3 className="w-100 t-a-c m-ns-f-s-medium p-20px m-b-10px">Post Creados</Title>
          <NumberCounter duration={5} delay={1000} end={14670} className="w-100 h-a ns-c-e m-b-10px ns-f-s-big c-white h-pr-fl-ma m-ns-f-s-big"/>
            <Title h4 className="w-80 r-h-c p-20px ns-c-e t-a-c">Generamos más de 10.000 Post completamente desde cero, generando una gran cantidad de contenido y potenciando la calidad gráfica del mercado.</Title>
          </div>
          <div className='w-33 m-w-100 h-100 h-pr-fl-ma p-10px bg-d ns-br-r-2 of-h'>
            <Title h3 className="w-100 t-a-c m-ns-f-s-medium p-20px m-b-10px">Conversiones Alcanzadas</Title>
          <NumberCounter duration={5} delay={1000} end={105441} className="w-100 h-a ns-c-e m-b-10px ns-f-s-big c-white h-pr-fl-ma m-ns-f-s-big"/>
            <Title h4 className="w-80 r-h-c p-20px ns-c-e t-a-c">Hemos sido parte la compra de productos de mas de 1.100.000 personas, generando una gran cantidad de conversiones para nuestros clientes.</Title>
            <Title h4 className="w-80 r-h-c p-20px c-white t-a-c">¡Gracias por confiar en nosotros!</Title>
          </div>
          <div className='w-33 m-w-100 h-100 h-pr-fl-ma p-10px bg-d-t ns-br-r-2 of-h'>
            <Title h3 className="w-100 t-a-c m-ns-f-s-medium p-20px m-b-10px">Descripciones Mejoradas</Title>
          <NumberCounter duration={5} delay={1000} end={21330} className="w-100 h-a ns-c-e m-b-10px ns-f-s-big c-white h-pr-fl-ma m-ns-f-s-big"/>
            <Title h4 className="w-80 r-h-c p-20px ns-c-e t-a-c">Ayudamos a más de 100.000 personas a encontrar lo que buscaba a la primera, bajando la cantidad de devoluciones y reclamos en más de un 76%.</Title>
          </div>
            </div>
          {/* -------------------------------------------------------------------- 6 */}
          <div className='w-90 r-h-c h-200px m-h-500px m-b-50px ns-br-r-2 of-h h-pr-fl-ma bg-d-t '>
            <div className='w-50 m-w-100 h-100 m-h-70 h-pr-fl-ma p-50px'>
            <div className='w-100 h-a r-v-c h-pr-fl-ma'>
            <Title h2 className="w-100 c-white m-b-20px ">Trabajemos ahora mismo en potenciar <span className='UnderLineText'>su negocio</span>.</Title>
            <Title h4 className="w-100 ns-c-e">Coordinemos una reunión juntos para hacer posible, todo lo que necesita.</Title>
            </div>
            </div>
            <div className='w-50 m-w-100 h-100 m-h-30 h-pr-fl-ma bg-d'>
            <img src={ImgExampleNine} className='w-100 h-100 p-a ma l-0px r-0px t-0px b-0px d-n m-d-b img-cover img-filter-gray o-10'/>
              <div className='w-100 h-pr-fl-ma h-a flexbox f-d-c r-v-c'><Btn text="¡Comenzar!" className="ns-bg-e w-300px  p-15px f-w-bo t-a-c " enlace="https://wa.me/message/3J7NXI5ETDK7F1"></Btn>
            <Title h5 className="w-100 h-pr-fl-ma h-a t-a-c p-t-10px">Este es el primer ppaso para hacernos parte del equipo.</Title></div></div>
          </div>

      </div>
    </>
  )
}
