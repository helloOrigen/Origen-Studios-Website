import React, { Fragment, useState } from "react";

import ContentBox from "../components/contentBox";
import Title from "../components/title";
import Btn from "../components/btn";
import ImageComponent from "../components/ImageComponent";
import Adsense from "../components/Adsense";

import CreateIcon from "../assets/icons/create.svg";

const Plans = ({ children }) => {
  const [infoVisible, setInfoVisible] = useState([false, false]);

  const toggleInfo = (index) => {
    setInfoVisible((prevState) => {
      const updatedInfoVisible = [...prevState];
      updatedInfoVisible[index] = !prevState[index];
      return updatedInfoVisible;
    });
  };
  return (
    <Fragment>
      <div className="w-95 r-h-c m-w-100 h-a h-pr-fl-ma noselect m-d-b  b-s-b-b m-b-20px ">
        <Title
          h1="Todos los planes"
          className="w-100 t-a-c m-t-100px m-b-100px "
        ></Title>
      <div className="w-100 m-w-95 h-pr-fl-ma h-100 b-s-b-b r-h-c  bg-d m-t-20px m-b-20px flexbox j-c-c tab-d-b m-d-b ns-br-r-1">

          {/* //green PLANES: 1 - PLANES DE MARCA */}
          <div className="w-33 tab-w-50 m-w-100 h-a noselect h-pr-fl-ma ns-br-r-1 p-10px">
          <div className="w-100 h-a h-pr-fl-ma b-s-b-b p-5px bg-g-identity ns-br-r-1">

              <div className="w-100 h-a b-s-b-b h-pr-fl-ma flexbox j-c-c p-10px">
                <ImageComponent
                  className="w-and-h-150px b-s-b-b  h-pr-fl-ma bg-d ns-br-r-1"
                  imageUrl={CreateIcon}
                ></ImageComponent>
                <Title
                  h4="IDENTIDAD DE MARCA"
                  className="p-10px w-100 t-a-c  ns-br-r-1"
                ></Title>
              </div>
              <div className="w-100 h-100 h-pr-fl-ma ">
                <div className="w-100 h-pr-fl-ma bg-d p-20px ">
                  <ContentBox
                    className="w-100 t-a-c bg-g-identity f-w-bo p-10px"
                    text="Ideal para su emprendimiento/empresa."
                  ></ContentBox>
                  <Title
                    h3="&#8599; Planes únicos"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <ContentBox
                    className="w-100"
                    list="Para ocasiones especiales, y/o puntualidades."
                  ></ContentBox>
                  <Title
                    h3="&#8599; Planes Mensuales"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <ContentBox
                    className="w-100"
                    list="Te acompañamos en todo el mes."
                  ></ContentBox>

                  <Btn
                    className="w-100 p-20px f-w-bo m-t-20px bg-g-identity "
                    text="Ver más..."
                    enlace="/plans/identity"
                  ></Btn>
                  <ContentBox
                    className="w-100 t-a-c m-t-5px f-w-bo "
                    Style="font-size: 10px;"
                  >
                    OrigenStudios.com/plans/identity
                  </ContentBox>
                </div>
              </div>
       
          </div>
          </div>
          {/* //blue PLANES: 2 - PLANES DE CONTENIDO */}

          <div className="w-33 tab-w-50 m-w-100 h-a noselect h-pr-fl-ma ns-br-r-1 p-10px">
          <div className="w-100 h-a h-pr-fl-ma b-s-b-b p-5px bg-g-contents ns-br-r-1">
           
              <div className="w-100 h-a b-s-b-b h-pr-fl-ma flexbox j-c-c p-10px">
                <ImageComponent
                  className="w-and-h-150px b-s-b-b  h-pr-fl-ma bg-d  ns-br-r-1"
                  imageUrl={CreateIcon}
                ></ImageComponent>
                <Title
                  h4="CREACIÓN DE CONTENIDO"
                  className="p-10px w-100 t-a-c  ns-br-r-1"
                ></Title>
              </div>
              <div className="w-100 h-100 h-pr-fl-ma ">
                <div className="w-100 h-pr-fl-ma bg-d p-20px ">
                  <ContentBox
                    className="w-100 t-a-c bg-g-contents f-w-bo p-10px"
                    text="Ideal para su emprendimiento/empresa."
                  ></ContentBox>
                  <Title
                    h3="&#8599; Planes únicos"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <ContentBox
                    className="w-100"
                    list="Para ocasiones especiales, y/o puntualidades."
                  ></ContentBox>
                  <Title
                    h3="&#8599; Planes Mensuales"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <ContentBox
                    className="w-100"
                    list="Te acompañamos en todo el mes."
                  ></ContentBox>

                  <Btn
                    className="w-100 p-20px f-w-bo m-t-20px bg-g-contents "
                    text="Ver más..."
                    enlace="/plans/contents"
                  ></Btn>
                  <ContentBox
                    className="w-100 t-a-c m-t-5px f-w-bo "
                    Style="font-size: 10px;"
                  >
                    OrigenStudios.com/plans/contents
                  </ContentBox>
                </div>
              </div>
        
          </div>
          </div>
          {/* //blue PLANES: 2 - PLANES DE CONTENIDO */}

          <div className="w-33 tab-w-50 m-w-100 h-a h-pr-fl-ma noselect p-10px">
          <div className="w-100 h-a h-pr-fl-ma b-s-b-b p-5px bg-g-asesoria ns-br-r-1">
    
              <div className="w-100 h-a b-s-b-b h-pr-fl-ma flexbox j-c-c p-10px">
                <ImageComponent
                  className="w-and-h-150px b-s-b-b  h-pr-fl-ma bg-d ns-br-r-1"
                  imageUrl={CreateIcon}
                ></ImageComponent>
                <Title
                  h4="ASESORÍA (proximamente)"
                  className="p-10px w-100 t-a-c  ns-br-r-1"
                ></Title>
              </div>
              <div className="w-100 h-100 h-pr-fl-ma ">
                <div className="w-100 h-pr-fl-ma bg-d p-20px ">
                  <ContentBox
                    className="w-100 t-a-c bg-g-asesoria f-w-bo p-10px"
                    text="Ideal para su emprendimiento/empresa."
                  ></ContentBox>
                  <Title
                    h3="&#8599; Planes únicos"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <ContentBox
                    className="w-100"
                    list="Para ocasiones especiales, y/o puntualidades."
                  ></ContentBox>
                  <Title
                    h3="&#8599; Planes Mensuales"
                    className="w-100 h-pr-fl-ma m-t-10px"
                  ></Title>
                  <ContentBox
                    className="w-100"
                    list="Te acompañamos en todo el mes."
                  ></ContentBox>

                  <Btn
                    className="w-100 p-20px f-w-bo m-t-20px bg-g-asesoria "
                    text="Ver más..."
                    enlace="/plans/specials"
                  ></Btn>
                  <ContentBox
                    className="w-100 t-a-c m-t-5px f-w-bo "
                    Style="font-size: 10px;"
                  >
                    OrigenStudios.com/plans
                  </ContentBox>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </div>

      <div className="w-95 h-pr-fl-ma h-100 b-s-b-b r-h-c noselect p-20px bg-d m-t-20px m-b-20px tab-d-b m-d-b ns-br-r-1">
        {/* //todo PLANES: 4 - PLANES DE ESPECIALES */}

        <div className="w-100 h-pr-fl-ma ">
          <Title className="t-a-c p-50px ns-c-white" h1="Planes especiales"></Title>
        </div>

        {/* //? PLANES: 4 - TRADERS Y BROKERS */}
        <div className="w-100 h-pr-fl-ma p-10px bg-g-green ns-br-r-1 m-b-5px">
          <div className="w-100 h-pr-fl-ma  flexbox m-d-b p-20px">
            <div className="w-70 m-w-100 h-pr-fl-ma">
              <Title className="ns-c-white" h3="&#8599; TRADERS & BROKERS"></Title>
            </div>
            <div className="w-30 m-w-100 h-pr-fl-ma ">
              <div className="w-a m-w-100 m-d-b h-a h-pr-fr-ma d-i-f p-10px">
                <Btn
                  className="p-10px  m-w-100 f-w-bo bg-d h-pr-fr-ma"
                  text={infoVisible[0] ? "- Cerrar info" : "+ Abrir info"}
                  click={() => toggleInfo(0)}
                ></Btn>
                <Btn
                  className="p-10px m-d-n m-w-100 f-w-bo ns-bg-e h-pr-fr-ma m-l-10px"
                  enlace="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
                  text="Coordinar Reunión"
                ></Btn>
              </div>
            </div>
          </div>
          <div className="w-100 h-pr-fl-ma ">
            <div
              id="contenedorinfo"
              className={`w-100 h-a h-pr-fl-ma ${infoVisible[0] ? "" : "d-n"}`}
            >
              <span className="w-a h-pr-fl-ma bg-d ns-c-white f-f-Gilroy f-w-bo p-5px m-t-5px">
                Creamos todo el contenido que su empresa necesite:
              </span>
              <span className="tag">Logotipo</span>
              <span className="tag">Tarjetas de presentación</span>
              <span className="tag">
                Papelería corporativa (sobres, hojas membretadas, etc.)
              </span>
              <span className="tag">Presentaciones corporativas</span>
              <span className="tag">
                Infografías (Gráficos y visualizaciones de datos)
              </span>
              <span className="tag">Plantillas de correo electrónico</span>
              <span className="tag">Diseño de página web</span>
              <span className="tag">Banners y anuncios publicitarios</span>
              <span className="tag">Plantillas para redes sociales</span>
              <span className="tag">Imágenes y fotografías de productos</span>
              <span className="tag">Documentos corporativos</span>
              <span className="tag">
                Material promocional impreso (folletos, volantes, etc.)
              </span>
              <span className="tag">Identidad de marca</span>
              <span className="tag">
                Iconos y elementos gráficos para aplicaciones o plataformas
              </span>
              <span className="tag">Ilustraciones y gráficos vectoriales</span>
              <span className="tag">
                Plantillas de presentación de productos o servicios
              </span>
              <span className="tag">
                Diseño de interfaz de usuario (UI) para aplicaciones o
                plataformas
              </span>
              <span className="tag">
                Material de marketing (brochures, catálogos, etc.)
              </span>
              <span className="tag">Animaciones y videos promocionales</span>
              <span className="tag">Packaging de productos</span>
              <Btn
                  className="p-15px m-w-100 f-w-bo ns-bg-e h-pr-fr-ma m-t-20px m-l-10px d-n m-d-b"
                  enlace="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
                  text="Coordinar Reunión"

                ></Btn>
            </div>
          </div>
        </div>
      {/* //? PLANES: 4 - SUPERMERCADOS*/}

      <div className="w-100 h-pr-fl-ma p-10px bg-g-blue ns-br-r-1 m-b-5px">
      <div className="w-100 h-pr-fl-ma  flexbox m-d-b p-20px">
            <div className="w-70 m-w-100 h-pr-fl-ma">
              <Title className="ns-c-white" h3="&#8599; SUPERMERCADOS & DEPÓSITOS"></Title>
            </div>
            <div className="w-30 m-w-100 h-pr-fl-ma ">
              <div className="w-a m-w-100 m-d-b h-a h-pr-fr-ma d-i-f p-10px">
                <Btn
                  className="p-10px  m-w-100 f-w-bo bg-d h-pr-fr-ma"
                  text={infoVisible[3] ? "- Cerrar info" : "+ Abrir info"}
                  click={() => toggleInfo(3)}
                ></Btn>
                <Btn
                  className="p-10px m-d-n m-w-100 f-w-bo ns-bg-e h-pr-fr-ma m-l-10px"
                  enlace="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
                  text="Coordinar Reunión"
                ></Btn>
              </div>
            </div>
          </div>
          <div className="w-100 h-pr-fl-ma ">
            <div
              id="contenedorinfo"
              className={`w-100 h-a h-pr-fl-ma ${infoVisible[3] ? "" : "d-n"}`}
            >
              <span className="w-a h-pr-fl-ma bg-d ns-c-white f-f-Gilroy f-w-bo p-5px m-t-5px">
                Creamos todo el contenido que su empresa necesite:
              </span>

              <span className="tag">Logotipo del supermercado</span>
              <span className="tag">
                Diseño de la fachada y señalización exterior
              </span>
              <span className="tag">
                Diseño de letreros y carteles promocionales
              </span>
              <span className="tag">
                Etiquetas de precio y promociones para productos
              </span>
              <span className="tag">
                Diseño de tarjetas de fidelidad o membresía
              </span>
              <span className="tag">
                Catálogos de productos y folletos informativos
              </span>
              <span className="tag">
                Anuncios y publicidad para medios impresos y digitales
              </span>
              <span className="tag">
                Diseño de envases y etiquetas para productos de marca propia
              </span>
              <span className="tag">
                Señalización interior (direcciones, secciones, información del
                producto)
              </span>
              <span className="tag">
                Diseño de banners y pancartas para promociones especiales
              </span>
              <span className="tag">
                Etiquetas y carteles de información nutricional
              </span>
              <span className="tag">Diseño de tarjetas de regalo</span>
              <span className="tag">
                Material gráfico para eventos especiales o ferias comerciales
              </span>
              <span className="tag">
                Diseño de rótulos y señalización en estanterías y pasillos
              </span>
              <span className="tag">
                Diseño de bolsas de compras reutilizables
              </span>
              <span className="tag">
                Diseño de etiquetas y materiales de promoción para productos
                frescos
              </span>
              <span className="tag">
                Diseño de envoltorios y etiquetas para productos de panadería y
                pastelería
              </span>
              <span className="tag">
                Diseño de cupones y vales de descuento
              </span>
              <span className="tag">
                Material gráfico para campañas de responsabilidad social y
                sostenibilidad
              </span>
              <span className="tag">
                Diseño de gráficos para pantallas digitales y puntos de venta
                interactivos
              </span>
              <Btn
                  className="p-15px m-w-100 f-w-bo ns-bg-e h-pr-fr-ma m-t-20px m-l-10px d-n m-d-b"
                  enlace="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
                  text="Coordinar Reunión"

                ></Btn>
            </div>
          </div>
        </div>
        {/* //? PLANES: 4 - CASINOS */}

        <div className="w-100 h-pr-fl-ma p-10px bg-g-purple ns-br-r-1 m-b-5px">
        <div className="w-100 h-pr-fl-ma  flexbox m-d-b p-20px">
            <div className="w-70 m-w-100 h-pr-fl-ma">
              <Title className="ns-c-white" h3="&#8599; CASINOS & HOTELES"></Title>
            </div>
            <div className="w-30 m-w-100 h-pr-fl-ma ">
              <div className="w-a m-w-100 m-d-b h-a h-pr-fr-ma d-i-f p-10px">
                <Btn
                  className="p-10px  m-w-100 f-w-bo bg-d h-pr-fr-ma"
                  text={infoVisible[1] ? "- Cerrar info" : "+ Abrir info"}
                  click={() => toggleInfo(1)}
                ></Btn>
                <Btn
                  className="p-10px m-d-n m-w-100 f-w-bo ns-bg-e h-pr-fr-ma m-l-10px"
                  enlace="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
                  text="Coordinar Reunión"
                ></Btn>
              </div>
            </div>
          </div>
          <div className="w-100 h-pr-fl-ma ">
            <div
              id="contenedorinfo"
              className={`w-100 h-a h-pr-fl-ma ${infoVisible[1] ? "" : "d-n"}`}
            >
              <span className="w-a h-pr-fl-ma bg-d ns-c-white f-f-Gilroy f-w-bo p-5px m-t-5px">
                Creamos todo el contenido que su empresa necesite:
              </span>
              <span className="tag">Infografías</span>
              <span className="tag">Identidad de marca</span>
              <span className="tag">Post para redes sociales</span>
              <span className="tag">Logotipo</span>
              <span className="tag">Tarjetas de presentación</span>
              <span className="tag">Menús y carteles</span>
              <span className="tag">Banners publicitarios</span>
              <span className="tag">Diseño de página web</span>
              <span className="tag">Folletos promocionales</span>
              <span className="tag">
                Papelería corporativa (sobres, hojas membretadas)
              </span>
              <span className="tag">Anuncios de revistas y periódicos</span>
              <span className="tag">Pósters y vallas publicitarias</span>
              <span className="tag">Tarjetas de regalo y cupones</span>
              <span className="tag">Plantillas de correo electrónico</span>
              <span className="tag">Diseño de uniformes para el personal</span>
              <span className="tag">Señalización interior y exterior</span>
              <span className="tag">
                Packaging y etiquetas para productos promocionales
              </span>
              <span className="tag">
                Pantallas digitales y señalización digital
              </span>
              <span className="tag">
                Diseño de escenografía y decoración de eventos
              </span>
              <span className="tag">
                Materiales promocionales para eventos (banners, roll-ups)
              </span>
              <Btn
                  className="p-15px m-w-100 f-w-bo ns-bg-e h-pr-fr-ma m-t-20px m-l-10px d-n m-d-b"
                  enlace="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
                  text="Coordinar Reunión"

                ></Btn>
            </div>
          </div>
        </div>

        {/* //? PLANES: 4 - RESTAURANTES*/}

        <div className="w-100 h-pr-fl-ma p-10px bg-g-pink ns-br-r-1 m-b-5px">
        <div className="w-100 h-pr-fl-ma  flexbox m-d-b p-20px">
            <div className="w-70 m-w-100 h-pr-fl-ma">
              <Title className="ns-c-white  ns-br-r-1" h3="&#8599; RESTAURANTES & FRANQUICIAS"></Title>
            </div>
            <div className="w-30 m-w-100 h-pr-fl-ma ">
              <div className="w-a m-w-100 m-d-b h-a h-pr-fr-ma d-i-f p-10px">
                <Btn
                  className="p-10px  m-w-100 f-w-bo h-pr-fr-ma"
                  text={infoVisible[2] ? "- Cerrar info" : "+ Abrir info"}
                  click={() => toggleInfo(2)}
                ></Btn>
                <Btn
                  className="p-10px m-d-n m-w-100 f-w-bo ns-bg-e h-pr-fr-ma m-l-10px"
                  enlace="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
                  text="Coordinar Reunión"
                ></Btn>
              </div>
            </div>
          </div>
          <div className="w-100 h-pr-fl-ma ">
            <div
              id="contenedorinfo"
              className={`w-100 h-a h-pr-fl-ma ${infoVisible[2] ? "" : "d-n"}`}
            >
              <span className="w-a h-pr-fl-ma bg-d ns-c-white f-f-Gilroy f-w-bo p-5px m-t-5px">
                Creamos todo el contenido que su empresa necesite:
              </span>
              <span className="tag">Menú del restaurante</span>
              <span className="tag">Logotipo</span>
              <span className="tag">Tarjetas de presentación</span>
              <span className="tag">Cartas de vinos y bebidas</span>
              <span className="tag">
                Papelería corporativa (sobres, hojas membretadas)
              </span>
              <span className="tag">Diseño de página web</span>
              <span className="tag">Menús para eventos especiales</span>
              <span className="tag">Banners publicitarios</span>
              <span className="tag">Anuncios de revistas y periódicos</span>
              <span className="tag">Pósters y vallas publicitarias</span>
              <span className="tag">Tarjetas de regalo y cupones</span>
              <span className="tag">Plantillas de correo electrónico</span>
              <span className="tag">Diseño de uniformes para el personal</span>
              <span className="tag">Señalización interior y exterior</span>
              <span className="tag">
                Packaging y etiquetas para productos promocionales (si el
                restaurante vende productos envasados)
              </span>
              <span className="tag">
                Diseño de escenografía y decoración de eventos
              </span>
              <span className="tag">
                Materiales promocionales para eventos (banners, roll-ups)
              </span>
              <span className="tag">
                Diseño de menús digitales para tablets o pantallas interactivas
              </span>
              <span className="tag">
                Diseño de etiquetas para productos frescos o para llevar
              </span>
              <span className="tag">
                Diseño de material gráfico para promociones especiales o
                descuentos
              </span>
              <Btn
                  className="p-15px m-w-100 f-w-bo ns-bg-e h-pr-fr-ma m-t-20px m-l-10px d-n m-d-b"
                  enlace="https://outlook.office365.com/owa/calendar/OrigenStudiosPrimerosPasos@origenstudios.com/bookings/"
                  text="Coordinar Reunión"

                ></Btn>
             
              
            </div>
            
          </div>
        </div>

  
      </div>

    {/*  // !                           ADS                         */}
    <div className="w-95 r-h-c  h-a h-pr-fl-ma  bg-d m-d-b flexbox m-d-b b-s-b-b m-b-20px">
            <div className="w-33 m-d-n m-w-100 h-a h-pr-fl-ma   p-10px">
                <Adsense  dataAdSlot='9886328101'  />
            </div>
            <div className="w-33 m-d-n m-w-100 h-a h-pr-fl-ma   p-10px">
                <Adsense  dataAdSlot='9886328101'  />
            </div>
            <div className="w-33  m-w-100 h-a h-pr-fl-ma   p-10px">
                <Adsense  dataAdSlot='9886328101'  />
            </div>
          </div>

      <div className="w-100 h-200px h-pr-fl-ma b-s-b-b  m-d-b">&nbsp;</div>
    </Fragment>
  );
};

export default Plans;
