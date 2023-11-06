import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ContentBox from '../components/contentBox'
import Title from '../components/title'
import Btn from '../components/btn'

import Megafono from '../assets/plans/megafono.svg'
import Articulo from '../assets/plans/articulo.svg'
import Logo from '../assets/plans/logo.svg'
const Plans = ({ children }) => {
  return (
    <Fragment>
      <div className="w-95 r-h-c m-w-100 h-a h-pr-fl-ma noselect m-d-b  b-s-b-b m-b-20px ">
      <div className="w-500px w-100 h-200px h-pr-fl-ma b-s-b-b t-a-c m-d-b   ">
          <div className="w-100 centered h-a h-pr-fl-ma b-s-b-b  ">
            <Title h2><span className="ns-c-e-animated">Nuestros Planes</span></Title>
            <Title h1>Para potenciar <span className="ns-c-e-animated">sus&zwj;&nbsp;&zwj;ventas.</span></Title>
          </div>
        </div>
      <div className="w-100 m-w-95 h-pr-fl-ma h-100 b-s-b-b r-h-c  bg-d m-t-20px m-b-20px flexbox j-c-c tab-d-b m-d-b ns-br-r-1">

          {/* //green PLANES: 1 - CONTENIDO PARA ARTICULOS */}
          <div className="w-350px tab-w-50 m-w-100 h-a noselect h-pr-fl-ma ns-br-r-2 p-10px">
          <div className="w-100 h-a h-pr-fl-ma b-s-b-b p-5px bg-d-t ns-br-r-3">

              <div className="w-100 h-a bg-d-t ns-br-r-3 b-s-b-b h-pr-fl-ma d-f f-w-n-w p-10px">
              <div style={{ width: '80px !important', height: '80px !important' }} className='p-5px circle bg-d b-s-b-b  h-pr-fl-ma'>
              <img src={Articulo} alt="" className="w-and-h-80px  p-5px h-pr-fl-ma" />
               </div>
              <Title
                  h4="CREAMOS TODO EL CONTENIDO PARA SUS ARTÍCULOS"
                  className="p-10px w-70 h-a "
                ></Title>
              </div>
              <div className="w-100 h-100 h-pr-fl-ma ">
                <div className="w-100 h-pr-fl-ma p-20px ns-br-r-3">
                  <ContentBox
                    className="w-100 t-a-c bg-g-identity f-w-bo p-5px ns-br-r-2 m-t-5px m-b-5px"
                    text="Ideal para tiendas online y blogs."
                  ></ContentBox>
                  <Title
                    h4="&#8599; IMAGENES CON FONDO BLANCO"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                   <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                   Para sus publicaciones en las plataformas de terceros más exigentes.
                  </span></div>
                   <Title
                    h4="&#8599; IMÁGENES DE CATÁLOGO"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                   <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                   Estudiamos y le ofrecemos las mejores imágenes de sus productos, esas que están convirtiendo en las principales plataformas.
                  </span></div>
                  <Title
                    h4="&#8599; GIFS CON MARCA DE AGUA"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                   Le damos vida a su web con gifs que muestren las funcionalidades más llamativas e importantes de sus productos, además las protegemos con su marca de agua personalizada.
                  </span></div>
                  <Title
                    h4="&#8599; GENERACIÓN DE VARIANTES"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                   Generamos variantes de sus productos, esa imagen que no encuentra en linea, nosotros la hacemos realidad.
                  </span></div>
                    <Title
                    h4="&#8599; TÍTULACIÓN DE PRODUCTOS"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                   Creamos títulos estratégicos para facilitar las búsquedas de sus clientes y la compatibilidad con multiples plataformas.
                  </span></div>
                  <Title
                    h4="&#8599; DESCRIPCIONES EMOCIONALES"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                   Generamos conexiones directas con sus clientes mediante el impacto directo en su necesidad.
                  </span></div>
                  <Title
                    h4="&#8599; DESCRIPCIONES TÉCNICAS"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                   Nos encargamos de la descripción técnica de sus productos, talles, variaciones disponibles, medidas y mucho más.
                  </span></div>
                  <div className='w-100 h-a h-pr-fl-ma b-s-b-b m-t-5px m-b-5px'>
                  <Title
                    h2="ARTICULOS"
                    className="w-100 t-a-c h-pr-fl-ma m-t-10px"
                  ></Title>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <p
                    className="w-100 f-w-bo ns-c-1 f-s-11px t-a-c f-f-Gilroy h-pr-fl-ma">
                   <span className="ns-c-e">UN ARTÍCULO PARA TODA LA VIDA</span> <br/> SÓLO POR U$S 99,50 IVA INC.
                  </p></div></div>
                  <Btn
                    className="w-100 h-a h-pr-fl-ma p-15px f-w-bo m-t-10px bg-g-identity ns-br-r-4"
                    text="Consultar sin costo"
                    enlace="https://wa.me/59892221516?text=Buen%20d%C3%ADa!%20Quiero%20saber%20m%C3%A1s%20sobre%20*Planes%20de%20Art%C3%ADculos*!"
                  ></Btn>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <p
                    className="w-100 f-w-bo ns-c-1 f-s-11px t-a-c m-t-5px f-f-Gilroy h-pr-fl-ma">
                    ¡Consulte sin costo por Whatsapp!
                  </p></div>
                </div>
              </div>

          </div>
          </div>

            {/* //green PLANES: 1 - ASSETS PARA ADS PUBLICITARIOS */}
            <div className="w-350px tab-w-50 m-w-100 h-a noselect h-pr-fl-ma ns-br-r-2 p-10px">
          <div className="w-100 h-a h-pr-fl-ma b-s-b-b p-5px bg-d-t ns-br-r-3">

              <div className="w-100 h-a bg-d-t ns-br-r-3 b-s-b-b h-pr-fl-ma d-f f-w-n-w p-10px">
              <div style={{ width: '80px !important', height: '80px !important' }} className='p-5px circle bg-d b-s-b-b  h-pr-fl-ma'>
              <img src={Megafono} alt="" className="w-and-h-80px  p-5px h-pr-fl-ma" />
               </div>
              <Title
                  h4="CREAMOS TODO PARA SUS CAMPAÑAS PUBLICITARIAS"
                  className="p-10px w-70 h-a "
                ></Title>
              </div>
              <div className="w-100 h-100 h-pr-fl-ma ">
                <div className="w-100 h-pr-fl-ma p-20px ns-br-r-3">
                  <ContentBox
                    className="w-100 t-a-c bg-g-identity f-w-bo p-5px ns-br-r-2 m-t-5px m-b-5px"
                    text="Ideal para campañas publicitarias y eventos."
                  ></ContentBox>
                  <Title
                    h4="&#8599; BANNERS PARA WEB"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                   <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                  Hacemos que la portada de su web genere emociones impactantes y refleje sus promociones actuales y futuras.
                  </span></div>
                   <Title
                    h4="&#8599; BANNERS RESPONSIVOS"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                   <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                   Creamos todo un set de imágenes para multiples dispositivos, para que nadie se pierda la oportunidad de conocer sus productos y servicios.
                  </span></div>
                  <Title
                    h4="&#8599; BANNERS ANIMADOS"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                   Le damos vida a sus publicidades con animaciones que atrapan la atención de las personas y las invitan a convertirse en sus nuevos clientes.
                  </span></div>
                  <Title
                    h4="&#8599; GIGANTOGRAFÍAS FULL HD"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                   Llamamos la atención del público con creatividades gigantes que impactan a la sociedad, con el valor añadido de las ideas más virales e innovadoras.
                  </span></div>
                    <Title
                    h4="&#8599; POSTERS Y BANNERS"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                   Creamos las mejores portadas orientadas directamente a su sector de mercado, con la información visual ncesaria para generar seguridad y conversiones directas.
                  </span></div>
                  <Title
                    h4="&#8599; PLOTEOS Y CARTELERÍA"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                   Generamos una asociación emocional directa y positiva entre su marca y sus clientes, aplicando detalles visuales en su cartelería para que les recuerden no solo al llegar a su local, sino también al ver a su competencia.
                  </span></div>
                  <div className='w-100 h-a h-pr-fl-ma b-s-b-b m-t-5px m-b-5px'>
                  <Title
                    h2="PUBLICIDADES"
                    className="w-100 t-a-c h-pr-fl-ma m-t-10px"
                  ></Title>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <p
                    className="w-100 f-w-bo ns-c-1 f-s-11px t-a-c f-f-Gilroy h-pr-fl-ma">
                   <span className="ns-c-e">SU MARCA EN LA MENTE DE SUS CLIENTES</span> <br/> HAGAMOS UN PLAN PERSONALIZADO.
                  </p></div></div>
                  <Btn
                    className="w-100 h-a h-pr-fl-ma p-15px f-w-bo m-t-10px bg-g-identity ns-br-r-4"
                    text="Consultar sin costo"
                    enlace="https://wa.me/59892221516?text=Buen%20d%C3%ADa!%20Quiero%20saber%20m%C3%A1s%20sobre%20*Planes%20de%20Publicidad*!"
                  ></Btn>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <p
                    className="w-100 f-w-bo ns-c-1 f-s-11px t-a-c m-t-5px f-f-Gilroy h-pr-fl-ma">
                    ¡Consulte sin costo por Whatsapp!
                  </p></div>
                </div>
              </div>

          </div>
          </div>

 {/* //green PLANES: 1 - ASESORÍA */}
 <div className="w-350px tab-w-50 m-w-100 h-a noselect h-pr-fl-ma ns-br-r-2 p-10px">
          <div className="w-100 h-a h-pr-fl-ma b-s-b-b p-5px bg-d-t ns-br-r-3">

              <div className="w-100 h-a bg-d-t ns-br-r-3 b-s-b-b h-pr-fl-ma d-f f-w-n-w p-10px">
              <div style={{ width: '80px !important', height: '80px !important' }} className='p-5px circle bg-d b-s-b-b  h-pr-fl-ma'>
              <img src={Logo} alt="" className="w-and-h-80px  p-5px h-pr-fl-ma" />
               </div>
              <Title
                  h4="CREAMOS Y/O ACTUALIZAMOS SU IDENTIDAD GRÁFICA COMPLETA"
                  className="p-10px w-70 h-a "
                ></Title>
              </div>
              <div className="w-100 h-100 h-pr-fl-ma ">
                <div className="w-100 h-pr-fl-ma p-20px ns-br-r-3">
                  <ContentBox
                    className="w-100 t-a-c bg-g-identity f-w-bo p-5px ns-br-r-2 m-t-5px m-b-5px"
                    text="Ideal para emprendimientos y renovaciones"
                  ></ContentBox>
                  <Title
                    h4="&#8599; IDENTIDAD DE MARCA"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                   <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                  Estudiamos su negocio, su identidad gráfica actual, sus representaciones marcarias dentro de su contexto y sector y creamos un Logotipo, Isotipo, Imagotipo o Imagologo, con todos los parámetros de rendimiento marcario que su marca merece.
                  </span></div>
                   <Title
                    h4="&#8599; IDENTIDAD GRÁFICA"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                   <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                   Generamos y/o actualizamos todos sus medios gráficos, para establecer una compatibilidad semántica y asociar todo su universo cercano a su marca.
                  </span></div>
                  <Title
                    h4="&#8599; MANUAL DE USO TÉCNICO DE IDENTIDAD"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                   Creamos su manual de uso técnico para establecer la importancia de su marca y guiar a quien le represente a hacer un uso responsable y fidedigno de su marca gráfica.
                  </span></div>
                  <Title
                    h4="&#8599; ESTUDIO DE PARÁMETROS DE RENDIMIENTO"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                   Ponemos a prueba su identidad gráfica completa, bajo distintos parámetros de rendimiento marcario, receptividad social, gestión funcional y aplicación en diversidad de medios.
                  </span></div>
                    <Title
                    h4="&#8599; GENERACIÓN DE VARIANTES"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                   Preparamos todas las variaciones necesarias para su Logo, Tamaños, Colores y Formas.
                  </span></div>
                  <Title
                    h4="&#8599; BRANDING SENSORIAL"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <span
                    className="w-100 f-w-bo ns-c-1 f-s-11px  f-f-Gilroy h-pr-fl-ma">
                   Le asesoramos para hacer que sus clientes perciban su marca no solo en imagenes y videos, también al entrar a su tienda o al utilizar sus productos incluso cuando estos no posean un logotipo. Hacemos que su marca se sienta única.
                  </span></div>
                  <div className='w-100 h-a h-pr-fl-ma b-s-b-b m-t-5px m-b-5px'>
                  <Title
                    h2="IDENTIDAD"
                    className="w-100 t-a-c h-pr-fl-ma m-t-10px"
                  ></Title>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <p
                    className="w-100 f-w-bo ns-c-1 f-s-11px t-a-c f-f-Gilroy h-pr-fl-ma">
                   <span className="ns-c-e">SU MARCA EN LA VIDA DE SUS CLIENTES</span> <br/> HAGAMOS UN PLAN PERSONALIZADO.
                  </p></div></div>
                  <Btn
                    className="w-100 h-a h-pr-fl-ma p-15px f-w-bo m-t-10px bg-g-identity ns-br-r-4"
                    text="Consultar sin costo"
                    enlace="https://wa.me/59892221516?text=Buen%20d%C3%ADa!%20Quiero%20saber%20m%C3%A1s%20sobre%20*Planes%20de%20Identidad%20Gr%C3%A1fica*!"
                  ></Btn>
                  <div className='l-h-13px h-pr-fl-ma w-100'>
                    <p
                    className="w-100 f-w-bo ns-c-1 f-s-11px t-a-c m-t-5px f-f-Gilroy h-pr-fl-ma">
                    ¡Consulte sin costo por Whatsapp!
                  </p></div>
                </div>
              </div>

          </div>
          </div>

        </div>

      </div>

    </Fragment>
  )
}
Plans.propTypes = {
  children: PropTypes.string
}
export default Plans
