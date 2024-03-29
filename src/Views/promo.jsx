import React, { Fragment } from 'react'

import PromoTitulo from '../assets/images/promo/casos-de-exito-titulo.svg'
import PromoOferta from '../assets/images/promo/casos-de-exito-oferta.webp'
import ContentBox from '../components/contentBox'
import Btn from '../components/btn'
import MessageWriting from '../assets/icons/message_writing.svg'

import Thumbnail1 from '../assets/images/promo/thumbnail-1.jpg'
import Thumbnail2 from '../assets/images/promo/thumbnail-2.jpg'
import Thumbnail3 from '../assets/images/promo/thumbnail-3.jpg'
import Thumbnail4 from '../assets/images/promo/thumbnail-4.jpg'

const Promo = () => {
  return (
    <Fragment>
      <div className="w-95 h-a h-pr-fl-ma bg-d r-h-c m-t-20px m-b-20px b-s-b-b of-auto of-x-hidden p-20px">
        <div className="noselect w-100 h-a h-pr-fl-ma b-s-b-b b-s-b-b p-10px">
          <img
            src={PromoTitulo}
            alt="Titulo"
            className="w-100 h-100 h-pr-fl-ma"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="noselect m-d-n d-b w-100 h-a h-pr-fl-ma b-s-b-b p-20px b-s-b-b m-b-20px">
          <img
            src={PromoOferta}
            alt="Oferta"
            className="w-100 h-100 h-pr-fl-ma"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="noselect m-d-b d-n w-100 h-a h-pr-fl-ma b-s-b-b p-20px b-s-b-b m-b-50px">
          <img
            src={PromoOferta}
            alt="Promo"
            className="w-100 h-100 h-pr-fl-ma"
            style={{ objectFit: 'contain', transform: 'scale(1.5)' }}
          />
        </div>
      </div>

      <div className="w-95 h-a h-pr-fl-ma r-h-c b-s-b-b of-auto of-x-hidden">
        {/* BLOQUE RESPONSIVE 1 */}
        <div className="w-100 h-a h-pr-fl-ma p-10px bg-d bg-d bg-d ns-br-r-1 ns-br-r-1 b-s-b-b d-i-f m-d-b m-b-20px">
          <div
            className="m-w-100 w-300px h-200px m-h-300px h-pr-fl-ma ns-br-r-1"
            style={{ zIndex: 123 }}
          >
            <img
              src={Thumbnail1}
              alt="Logotipo"
              className="w-100 h-100 h-pr-fl-ma"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="m-w-100 w-80 h-200px m-h-300px h-pr-fl-ma bg-d">
            <div className="m-w-100 w-90 centered p-20px">
              <ContentBox
                className=""
                number={'1'}
                title={'LOGOTIPO:'}
                text={
                  'Producimos su nueva y mejorada imagen de marca, o le actualizamos la que ya posee. Se incluyen todos los parámetros de rendimiento, calidad y revisión con Inteligencia Artificial.'
                }
              />
            </div>
          </div>
        </div>

        {/* BLOQUE RESPONSIVE 2 */}
        <div className="w-100 h-a h-pr-fl-ma p-10px bg-d bg-d bg-d ns-br-r-1 ns-br-r-1 b-s-b-b d-i-f m-d-b m-b-20px">
          <div
            className="m-w-100 w-300px h-200px m-h-300px h-pr-fl-ma ns-br-r-1"
            style={{ zIndex: 123 }}
          >
            <img
              src={Thumbnail2}
              alt="Manual de uso"
              className="w-100 h-100 h-pr-fl-ma"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="m-w-100 w-80 h-200px m-h-300px h-pr-fl-ma bg-d">
            <div className="m-w-100 w-90 centered p-20px">
              <ContentBox
                className=""
                number={'2'}
                title={'MANUAL DE USO:'}
                text={
                  'El manual de uso incluye los detalles más importantes para la implementación de su marca. Conozca los márgenes, composición tipográfica, colores, casos de uso y prohibiciones.'
                }
              />
            </div>
          </div>
        </div>

        {/* BLOQUE RESPONSIVE 3 */}
        <div className="w-100 h-a h-pr-fl-ma p-10px bg-d bg-d bg-d ns-br-r-1 ns-br-r-1 b-s-b-b d-i-f m-d-b m-b-20px">
          <div
            className="m-w-100 w-300px h-200px m-h-300px h-pr-fl-ma ns-br-r-1"
            style={{ zIndex: 123 }}
          >
            <img
              src={Thumbnail3}
              alt="Publicidad Masiva"
              className="w-100 h-100 h-pr-fl-ma"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="m-w-100 w-80 h-200px m-h-300px h-pr-fl-ma bg-d">
            <div className="m-w-100 w-90 centered p-20px">
              <ContentBox
                className=""
                number={'3'}
                title={'PUBLICIDAD MASIVA:'}
                text={
                  'Publicaremos (con su permiso) nuestro caso de éxito y la colaboración con su marca en todas nuestras redes sociales y por supuesto en nuestra web OrigenStudios.com. Puede extender este plazo haciéndose nuestro “Sponsor”.'
                }
              />
            </div>
          </div>
        </div>

        {/* BLOQUE RESPONSIVE 4 */}
        <div className="w-100 h-a h-pr-fl-ma p-10px bg-d bg-d bg-d ns-br-r-1 ns-br-r-1 b-s-b-b d-i-f m-d-b m-b-20px">
          <div
            className="m-w-100 w-300px h-200px m-h-300px h-pr-fl-ma ns-br-r-1"
            style={{ zIndex: 123 }}
          >
            <img
              src={Thumbnail4}
              alt="Asesoría"
              className="w-100 h-100 h-pr-fl-ma"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="m-w-100 w-80 h-200px m-h-300px h-pr-fl-ma bg-d">
            <div className="m-w-100 w-90 centered p-20px">
              <ContentBox
                className=""
                number={'4'}
                title={'ASESORÍA DE MARCA:'}
                text={
                  'Tendrá acceso a (1) consulta de asesoría de marca completamente personalizada durante el primer mes posterior a la creación de su Logo. Gratis por única vez sin costo mediante esta promoción única.'
                }
              />
            </div>
          </div>
        </div>

        {/*  // ! ADS */}
        <div className="w-100 h-a h-pr-fl-ma bg-d m-d-b flexbox m-d-b b-s-b-b m-b-20px">
          <div className="w-33 m-d-n m-w-100 h-a h-pr-fl-ma p-10px">
            {/* ADS */}
          </div>
          <div className="w-33 m-d-n m-w-100 h-a h-pr-fl-ma p-10px">
            {/* ADS */}
          </div>
          <div className="w-33 m-w-100 h-a h-pr-fl-ma p-10px">
            {/* ADS */}
          </div>
        </div>

        {/* COORDINAR REUNIÓN AHORA */}
        <div className="w-100 m-w-100 r-h-c h-a h-pr-fl-ma f-f-Gilroy bg-d bg-d bg-d ns-br-r-1 ns-br-r-1 b-s-b-b d-i-f m-d-b">
          <div className="w-100 h-pr-fl-ma bg-d p-20px d-i-f m-d-b">
            <div className="w-70 m-w-100 h-pr-fl-ma t-a-c f-w-bo ns-f-s-medium noselect">
              Coordinemos una reunión hoy mismo y hagamos realidad su nueva marca!
            </div>
            <div className="w-a h-pr-fl-ma m-w-100 p-20px flexbox">
              <Btn
                className="ns-bg-e f-w-bo"
                text="Coordinar reunión &nbsp;"
                enlace={
                  'https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/'
                }
              >
                <div className="w-25px h-25px m-5px h-pr-fl-ma">
                  <img
                    className="w-100 h-100 h-pr-fl-ma"
                    style={{ stroke: '#ffffff !important' }}
                    src={MessageWriting}
                    alt="Coordinar"
                  />
                </div>
              </Btn>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 h-50px h-pr-fl-ma b-s-b-b ">&nbsp;</div>
    </Fragment>
  )
}

export default Promo
