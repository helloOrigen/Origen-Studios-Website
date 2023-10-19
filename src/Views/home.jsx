import React, { useEffect } from 'react'

import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'

import { Btn, ParallaxEffect } from '../components/index'

import Up3D from '../assets/images/compressed/up-3d-ia.webp'
import Card3D from '../assets/images/compressed/card-3d-ia.webp'
import OSSwipeIcon from '../assets/icons/os-swipe-icon.svg'
import ParallaxBg from '../assets/images/compressed/parallax-background.png'
import ParallaxWoman from '../assets/images/compressed/parallax-woman.png'
import LogotipoExample from '../assets/images/compressed/logotipo-example.jpg'
import RedaccionExample from '../assets/images/compressed/redaccion-example.jpg'
import BannerExample from '../assets/images/compressed/banner-example.jpg'
import SeoExample from '../assets/images/compressed/seo-example.jpg'
import LikeExample from '../assets/images/compressed/social-like.post.jpg'
import Heart3D from '../assets/images/compressed/heart-3d-ia.webp'
import Lupa3D from '../assets/images/compressed/lupa-3d-ia.webp'
import Megafono3D from '../assets/images/compressed/megafono-3d-ia.webp'
import Boligrafo3D from '../assets/images/compressed/boligrafo-3d-ia.webp'
import Box3D from '../assets/images/compressed/box-3d-ia.webp'

import Title from '../components/title'

export default function Home (props) {
  const peimg1StyleProps = {
    width: '240%'
  }

  const peimg2StyleProps = {
    left: '50%',
    height: '100%',
    width: '100%'
  }
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      effect: 'coverflow',
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      scrollbar: {
        el: '.swiper-scrollbar'
      },
      slidesPerView: 1,
      breakpoints: {
        1024: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2
        }
      }
    })

    return () => {
      swiper.destroy()
    }
  }, [])

  return (
    <>
        <div className="w-a m-d-n h-60px pa t-0px r-0px m-a noselect " style={{ zIndex: '5' }}>
          <div className="w-a flexbox h-pr-fr-ma op-v-on-h-container">
          <div className="w-a flexbox ns-bg-e-r   op-30-on-h h-pr-fr-ma ns-br-r-1 ">
                    <Title h4 className="w-100px t-a-c p-10px">
                      Deslice para
                      <span className="ns-c-e-animated">&nbsp;saber más</span>...
                    </Title>
                    <div className="w-20 h-pr-fl-ma  ">
                      <img className="w-and-h-60px h-pr-fr-ma p-r-20px  m-r-5px" src={OSSwipeIcon} alt="" />
                    </div>    </div>
                  </div>
          </div>
      <div className="w-100 h-100 h-pr-fl-ma b-s-b-b of-x-auto flexbox f-f-Gilroy p-10px c-white">

        <div className="w-500px h-100 h-pr-fl-ma  p-10px b-s-b-b of-h m-d-n ">
          <div className="w-100 h-100 h-pr-fl-ma   ns-br-r-1 of-h b-s-b-b ">
            <div className="pa m-a w-100 h-100  b-s-b-b of-n ns-br-r-2">
              <ParallaxEffect peimg1StyleProps={peimg1StyleProps} peimg2StyleProps={peimg2StyleProps} image1={ParallaxBg} image2={ParallaxWoman} />
            </div>
            <div className="r-v-c " style={{ pointerEvents: 'none' }}>
              <Title h2 className="noselect p-30px m-b-20px">
                Creamos toda <br /> su identidad <br /> de&zwj;&nbsp;&zwj;
                <span className="ns-c-e-animated">marca</span>.
              </Title>
            </div>
            <div className="w-100 h-80px  p-a b-0px m-a">
              <Btn
                className="w-80 r-h-c t-a-c  p-15px h-a ns-bg-e f-w-bo   h-pr-fl-ma"
                text="Contacto Whatsapp"
                enlace="https://wa.me/message/3J7NXI5ETDK7F1"
              />
            </div>
          </div>
        </div>

        {/*  // !          BARS |  */}
        <div className="swiper-container w-100 h-100 h-pr-fl-ma b-s-b-b ">
          <div className="swiper-wrapper b-s-b-b ">
            {/*  // orange          TITLE VISIBLE MOBILE % */}
            <div className="swiper-slide noselect d-n m-d-b h-100  ns-br-r-2  of-h ">
              <div className="w-100 h-100 h-pr-fl-ma bg-d-t ns-br-r-3 d-n m-d-b ghost enfasis of-h b-s-b-b">
                <div className="pa m-a w-100 h-100 of-h b-s-b-b">
                  <ParallaxEffect image1={ParallaxBg} image2={ParallaxWoman} />
                </div>
                <div className="r-v-c " style={{ pointerEvents: 'none' }}>
                  <Title h1 className="p-30px m-b-20px">
                    Creamos toda <br /> su identidad <br /> de&zwj;&nbsp;&zwj;
                    <span className="ns-c-e-animated">marca</span>.
                  </Title>
                  <div className="w-100 flexbox ns-bg-e h-pr-fl-ma">
                    <Title h4 className="w-80 t-a-c p-30px">
                      Deslice para
                      <span className="ns-c-e-animated">saber más</span>...
                    </Title>
                    <div className="w-20 h-pr-fl-ma">
                      <img className="w-and-h-80px h-pr-fr-ma p-r-20px m-r-10px" src={OSSwipeIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-100 h-80px  p-a b-0px m-a">
                  <Btn
                    className="w-80 r-h-c t-a-c  p-15px h-a ns-bg-e f-w-bo   h-pr-fl-ma"
                    text="Contacto Whatsapp"
                    enlace="https://wa.me/message/3J7NXI5ETDK7F1"
                  />
                </div>
              </div>
            </div>
            {/*  // orange          33 % */}
            <div className="swiper-slide noselect h-100  ns-br-r-2 p-10px of-h" >
              <div className="w-100 h-100 h-pr-fl-ma bg-d-t op-v-on-h-container ns-br-r-1">
                <div className="op-10-on-h pa w-100 h-100 m-a bg-orange b-0px t-0px l-0px r-0px">
                <img src={LogotipoExample} style={{ objectFit: 'cover' }} className="w-100 b-s-b-b h-100 h-pr-fl-ma " /></div>
                <div className="centered flexbox j-c-c f-w-w p-e-n noselect">
                  <img className="w-200px floating-effect" src={Up3D} alt="" />
                  <Title h3 className="t-a-c m-b-10px p-10px">
                    Creamos o Actualizamos su logo.
                  </Title>
                </div>
                <div className="w-100 h-a  p-a b-0px m-a p-b-20px">
                <Btn className="w-80  t-a-c h-a m-b-5px r-h-c bg-d-t f-w-bo h-pr-fl-ma" text="Ver ejemplos" enlace="/concepts" />
                  <Btn className="w-80 r-h-c t-a-c  p-10px h-a info f-w-bo   h-pr-fl-ma" text="Saber más..." enlace="/identity" />
                </div>
              </div>
            </div>
            {/*  // orange          33 % */}
            <div className="swiper-slide noselect h-100  ns-br-r-2 p-10px of-h">
              <div className="w-100 h-100 h-pr-fl-ma bg-d-t op-v-on-h-container ns-br-r-1">
                <div className="op-10-on-h pa w-100 h-100 m-a bg-orange b-0px t-0px l-0px r-0px">
                <img src={RedaccionExample} style={{ objectFit: 'cover' }} className="w-100 b-s-b-b h-100 h-pr-fl-ma " /></div>
                <div className="centered flexbox j-c-c f-w-w p-e-n noselect">
                  <img className="w-200px floating-effect" src={Boligrafo3D} alt="" />
                  <Title h3 className="t-a-c m-b-10px p-10px">
                  Redactamos sus artículos y manuales.
                  </Title>
                </div>
                <div className="w-100 h-a  p-a b-0px m-a p-b-20px">
                  <Btn className="w-80 r-h-c t-a-c  p-10px h-a info f-w-bo   h-pr-fl-ma" text="Saber más..." enlace="/identity" />
                </div>
              </div>
            </div>
             {/*  // orange          33 % */}
             <div className="swiper-slide noselect h-100  ns-br-r-2 p-10px of-h">
              <div className="w-100 h-100 h-pr-fl-ma bg-d-t op-v-on-h-container ns-br-r-1">
                <div className="op-10-on-h pa w-100 h-100 m-a bg-orange b-0px t-0px l-0px r-0px">
                <img src={BannerExample} style={{ objectFit: 'cover' }} className="w-100 b-s-b-b h-100 h-pr-fl-ma " /></div>
                <div className="centered flexbox j-c-c f-w-w p-e-n noselect">
                  <img className="w-200px floating-effect" src={Megafono3D} alt="" />
                  <Title h3 className="t-a-c m-b-10px p-10px">
                  Creamos sus campañas de Marketing.
                  </Title>
                </div>
                <div className="w-100 h-a  p-a b-0px m-a p-b-20px">
                  <Btn className="w-80 r-h-c t-a-c  p-10px h-a info f-w-bo   h-pr-fl-ma" text="Saber más..." enlace="/identity" />
                </div>
              </div>
            </div>
             {/*  // orange          33 % */}
             <div className="swiper-slide noselect h-100  ns-br-r-2 p-10px of-h">
              <div className="w-100 h-100 h-pr-fl-ma bg-d-t op-v-on-h-container ns-br-r-1">
                <div className="op-10-on-h pa w-100 h-100 m-a bg-orange b-0px t-0px l-0px r-0px">
                <img src={SeoExample} style={{ objectFit: 'cover' }} className="w-100 b-s-b-b h-100 h-pr-fl-ma " /></div>
                <div className="centered flexbox j-c-c f-w-w p-e-n noselect">
                  <img className="w-200px floating-effect" src={Lupa3D} alt="" />
                  <Title h3 className="t-a-c m-b-10px p-10px">
                  Hacemos todo para su Ecommerce.
                  </Title>
                </div>
                <div className="w-100 h-a  p-a b-0px m-a p-b-20px">
                  <Btn className="w-80 r-h-c t-a-c  p-10px h-a info f-w-bo   h-pr-fl-ma" text="Saber más..." enlace="/ecommerce" />
                </div>
              </div>
            </div>
              {/*  // orange          33 % */}
              <div className="swiper-slide noselect h-100  ns-br-r-2 p-10px of-h">
              <div className="w-100 h-100 h-pr-fl-ma bg-d-t op-v-on-h-container ns-br-r-1">
                <div className="op-10-on-h pa w-100 h-100 m-a bg-orange b-0px t-0px l-0px r-0px">
                <img src={LikeExample} style={{ objectFit: 'cover' }} className="w-100 b-s-b-b h-100 h-pr-fl-ma " /></div>
                <div className="centered flexbox j-c-c f-w-w p-e-n noselect">
                  <img className="w-200px floating-effect" src={Heart3D} alt="" />
                  <Title h3 className="t-a-c m-b-10px p-10px">
                  Posicionamos su marca en las redes sociales.
                  </Title>
                </div>
                <div className="w-100 h-a  p-a b-0px m-a p-b-20px">
                  <Btn className="w-80 r-h-c t-a-c  p-10px h-a info f-w-bo   h-pr-fl-ma" text="Saber más..." enlace="/identity" />
                </div>
              </div>
            </div>
            {/*  // orange          33 % */}
            <div className="swiper-slide noselect  h-100  ns-br-r-2 p-10px of-h">
              <div className="w-100 h-100 h-pr-fl-ma bg-d-t ns-br-r-1">
                <div className="centered flexbox j-c-c f-w-w">
                  <img className="w-200px floating-effect" src={Box3D} alt="" />
                  <Title h3 className="t-a-c m-b-10px p-10px">
                    Le asesoramos en cada paso de tu marca.
                  </Title>
                </div>
                <div className="w-100 h-60px  p-a b-0px m-a">
                  <Btn className="w-80 r-h-c t-a-c  p-10px h-a ns-bg-e f-w-bo   h-pr-fl-ma" text="Comenzar" enlace="https://wa.me/message/3J7NXI5ETDK7F1" />
                </div>
              </div>
            </div>
            <div className="swiper-slide noselect  h-100  ns-br-r-2 p-10px of-h">
              <div className="w-100 h-100 h-pr-fl-ma ns-bg-e ns-br-r-1">
                <div className="centered flexbox j-c-c f-w-w">
                  <img className="w-200px floating-effect" src={Card3D} alt="" />
                  <Title h3 className="t-a-c m-b-10px p-10px">
                    ¿Necesitas más?. <br /> ¡Conoce nuestros
                    <span className="ns-c-e-animated">planes</span>!
                  </Title>
                </div>
                <div className="w-100 h-60px  p-a b-0px m-a">
                  <Btn className="w-80 r-h-c t-a-c  p-10px h-a bg-d-t f-w-bo   h-pr-fl-ma" text="Ver planes" enlace="/plans" />
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    </>
  )
}
