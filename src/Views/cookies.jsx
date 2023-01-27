import React, { Fragment} from "react";
import ContentBox from "../components/contentBox";

const Cookies = () => {

  return (
    <Fragment>
      <div
        className="w-100 h-100 h-pr-fl-ma centered b-s-b-b of-auto b-s-b-b"
        Style="background: black;"
      >
        <div className="m-w-90 w-60 h-100 h-pr-fl-ma r-h-c b-s-b-b p-20px ">
          <ContentBox
            className="w-100 h-a m-b-20px"
            title={"Políticas de Cookies"}
            subtitle={"Conozca nuestras políticas de cookies."}
          />
          {/* 1 INFORMACIÓN GENERAL ------------------------------------------------------------------ */}
          <ContentBox
            className="w-100 h-a m-b-10px"
            number="1"
            title={"INFORMACIÓN GENERAL"}
          />
          <ContentBox className="w-100 h-a m-b-40px">
          En esta web se utilizan cookies de terceros y propias para conseguir que tengas una mejor experiencia de navegación, puedas compartir contenido en redes sociales y para que podamos obtener estadísticas de los usuarios.<br /><br />
Puedes evitar la descarga de cookies a través de la configuración de tu navegador, evitando que las cookies se almacenen en su dispositivo.<br /><br />
Como propietario de este sitio web, te comunico que no utilizamos ninguna información personal procedente de cookies, tan sólo realizamos estadísticas generales de visitas que no suponen ninguna información personal.<br /><br />
Es muy importante que leas la presente política de cookies y comprendas que, si continúas navegando, consideraremos que aceptas su uso.<br /><br />
Según los términos incluidos en el artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico, si continúas navegando, estarás prestando tu consentimiento para el empleo de los referidos mecanismos.<br /><br />

          </ContentBox>
 {/* ------------------------------------------------------------------ 1 INFORMACIÓN GENERAL  */}


  {/* 2 ENTIDAD RESPONSABLE ------------------------------------------------------------------ */}
  <ContentBox
            className="w-100 h-a m-b-10px"
            number="2"
            title={"ENTIDAD RESPONSABLE"}
          />
          <ContentBox className="w-100 h-a m-b-40px">
          La entidad responsable de la recogida, procesamiento y utilización de tus datos personales, en el sentido establecido por la Ley de Protección de Datos Personales es la página <span Style="font-weight: bold;">OrigenStudios.com</span>, propiedad de <span Style="font-weight: bold;">
              Origen&zwj;Studios&zwj;<sup>&reg;</sup></span> – Montevideo, Uruguay.

          </ContentBox>
 {/* ------------------------------------------------------------------  2 ENTIDAD RESPONSABLE   */}


  {/* 3 ¿QUÉ SON LAS COOKIES? ------------------------------------------------------------------ */}
  <ContentBox
            className="w-100 h-a m-b-10px"
            number="3"
            title={"¿QUÉ SON LAS COOKIES? "}
          />
          <ContentBox className="w-100 h-a m-b-40px">
          Las cookies son un conjunto de datos que un servidor deposita en el navegador del usuario para recoger la información de registro estándar de Internet y la información del comportamiento de los visitantes en un sitio web. Es decir, se trata de pequeños archivos de texto que quedan almacenados en el disco duro del ordenador y que sirven para identificar al usuario cuando se conecta nuevamente al sitio web. Su objetivo es registrar la visita del usuario y guardar cierta información. Su uso es común y frecuente en la web ya que permite a las páginas funcionar de manera más eficiente y conseguir una mayor personalización y análisis sobre el comportamiento del usuario.

          </ContentBox>
 {/* ------------------------------------------------------------------  3 ¿QUÉ SON LAS COOKIES?   */}


{/* 4 ¿QUÉ TIPOS DE COOKIES EXISTEN? ------------------------------------------------------------------ */}
<ContentBox
            className="w-100 h-a m-b-10px"
            number="4"
            title={"¿QUÉ TIPOS DE COOKIES EXISTEN? "}
          />
          <ContentBox className="w-100 h-a m-b-40px">
          Las cookies utilizadas en nuestro sitio web, son de sesión y de terceros, y nos permiten almacenar y acceder a información relativa al idioma, el tipo de navegador utilizado, y otras características generales predefinidas por el usuario, así como, seguir y analizar la actividad que lleva a cabo, con el objeto de introducir mejoras y prestar nuestros servicios de una manera más eficiente y personalizada.<br /><br />
Las cookies, en función de su permanencia, pueden dividirse en cookies de sesión o permanentes. Las que expiran cuando el usuario cierra el navegador. Las que expiran en función de cuando se cumpla el objetivo para el que sirven (por ejemplo, para que el usuario se mantenga identificado en los servicios de  <span Style="font-weight: bold;">
              Origen&zwj;Studios&zwj;<sup>&reg;</sup></span>) o bien cuando se borran manualmente.<br /><br />

              <table className="w-100 h-pr-fl-ma" align="center">
	<thead>
		<tr>
			<th className="m-ns-f-s-text p-5px ns-c-e">NOMBRE</th>
			<th className="m-ns-f-s-text p-5px ns-c-e">TIPO</th>
			<th className="m-ns-f-s-text p-5px ns-c-e">CADUCIDAD</th>
			<th className="m-ns-f-s-text p-5px ns-c-e">FINALIDAD</th>
      <th className="m-ns-f-s-text p-5px ns-c-e">CLASE</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td className="p-5px m-ns-f-s-text">__utma</td>
			<td className="p-5px m-ns-f-s-text">De terceros (Google Analytics)</td>
			<td className="p-5px m-ns-f-s-text">2 Años</td>
			<td className="p-5px m-ns-f-s-text">Se usa para distinguir usuarios y sesiones</td>
      <td className="p-5px m-ns-f-s-text">No exenta</td>
		</tr>
		<tr>
			<td className="p-5px m-ns-f-s-text">__utmb</td>
      <td className="p-5px m-ns-f-s-text">De Terceros (Google Analytics)</td>
			<td className="p-5px m-ns-f-s-text">30 minutos</td>
			<td className="p-5px m-ns-f-s-text">Se usa para determinar nuevas sesiones o visitas</td>
      <td className="p-5px m-ns-f-s-text">No exenta</td>
		</tr>
		<tr>
			<td className="p-5px m-ns-f-s-text">__utmc</td>
      <td className="p-5px m-ns-f-s-text">De Terceros (Google Analytics)</td>
			<td className="p-5px m-ns-f-s-text">Al finalizar la sesión</td>
			<td className="p-5px m-ns-f-s-text">Se configura para su uso con Urchin</td>
      <td className="p-5px m-ns-f-s-text">No exenta</td>
		</tr>
		<tr>
			<td className="p-5px m-ns-f-s-text">__utmz</td>
      <td className="p-5px m-ns-f-s-text">De Terceros (Google Analytics)</td>
			<td className="p-5px m-ns-f-s-text">6 meses</td>
			<td className="p-5px m-ns-f-s-text">Almacena el origen o la campaña que explica cómo el usuario ha llegado hasta la página web</td>
      <td className="p-5px m-ns-f-s-text">No exenta</td>
		</tr>
		
	</tbody>
</table>
Adicionalmente, en función de su objetivo, las cookies pueden clasificarse de la siguiente forma:
          </ContentBox>
 {/* ------------------------------------------------------------------  4 ¿QUÉ TIPOS DE COOKIES EXISTEN?    */}

{/* 5 COOKIES DE RENDIMIENTO ------------------------------------------------------------------ */}
<ContentBox
            className="w-100 h-a m-b-10px"
            number="5"
            title={"COOKIES DE RENDIMIENTO "}
          />
          <ContentBox className="w-100 h-a m-b-40px">
          Este tipo de Cookie recuerda sus preferencias para las herramientas que se encuentran en los servicios, por lo que no tiene que volver a configurar el servicio cada vez que usted visita. A modo de ejemplo, en esta tipología se incluyen: Ajustes de volumen de reproductores de vídeo o sonido. Las velocidades de transmisión de vídeo que sean compatibles con su navegador. Los objetos guardados en el “carrito de la compra” en los servicios de e-commerce tales como tiendas.
          </ContentBox>


{/* ----------------------------------------------------------------- 5 COOKIES DE RENDIMIENTO  */}


{/* 6 COOKIES DE GEOLOCALIZACIÓN ------------------------------------------------------------------ */}
<ContentBox
            className="w-100 h-a m-b-10px"
            number="6"
            title={"COOKIES DE GEOLOCALIZACIÓN "}
          />
          <ContentBox className="w-100 h-a m-b-40px">
          Estas cookies son utilizadas para averiguar en qué país se encuentra cuando se solicita un servicio. Esta cookie es totalmente anónima, y sólo se utiliza para ayudar a orientar el contenido a su ubicación.
          </ContentBox>


{/* ----------------------------------------------------------------- 6 COOKIES DE GEOLOCALIZACIÓN   */}

{/* 7 COOKIES DE REGISTRO ------------------------------------------------------------------ */}
<ContentBox
            className="w-100 h-a m-b-10px"
            number="7"
            title={"COOKIES DE REGISTRO"}
          />
          <ContentBox className="w-100 h-a m-b-40px">
          Las cookies de registro se generan una vez que el usuario se ha registrado o posteriormente ha abierto su sesión, y se utilizan para identificarle en los servicios con los siguientes objetivos:<br /><br />
Mantener al usuario identificado de forma que, si cierra un servicio, el navegador o el ordenador y en otro momento u otro día vuelve a entrar en dicho servicio, seguirá identificado, facilitando así su navegación sin tener que volver a identificarse. Esta funcionalidad se puede suprimir si el usuario pulsa la funcionalidad [cerrar sesión], de forma que esta cookie se elimina y la próxima vez que entre en el servicio el usuario tendrá que iniciar sesión para estar identificado.<br /><br />
Comprobar si el usuario está autorizado para acceder a ciertos servicios, por ejemplo, para participar en un concurso.<br /><br />
Adicionalmente, algunos servicios pueden utilizar conectores con redes sociales tales como Facebook o Twitter. Cuando el usuario se registra en un servicio con credenciales de una red social, autoriza a la red social a guardar una Cookie persistente que recuerda su identidad y le garantiza acceso a los servicios hasta que expira. El usuario puede borrar esta Cookie y revocar el acceso a los servicios mediante redes sociales actualizando sus preferencias en la red social que específica.

          </ContentBox>


{/* ----------------------------------------------------------------- 7 COOKIES DE REGISTRO    */}



{/* 8 COOKIES DE ANALITICAS ------------------------------------------------------------------ */}
<ContentBox
            className="w-100 h-a m-b-10px"
            number="8"
            title={"COOKIES DE ANALITICAS "}
          />
          <ContentBox className="w-100 h-a m-b-40px">Cada vez que un usuario visita un servicio, una herramienta de un proveedor externo genera una cookie analítica en el ordenador del usuario. Esta cookie que sólo se genera en la visita, servirá en próximas visitas a los servicios de  <span Style="font-weight: bold;">
              Origen&zwj;Studios&zwj;<sup>&reg;</sup></span> para identificar de forma anónima al visitante. Los objetivos principales que se persiguen son:<br /><br />
Permitir la identificación anónima de los usuarios navegantes a través de la cookie (identifica navegadores y dispositivos, no personas) y por lo tanto la contabilización aproximada del número de visitantes y su tendencia en el tiempo.<br /><br />
Identificar de forma anónima los contenidos más visitados y por lo tanto más atractivos para los usuarios Saber si el usuario que está accediendo es nuevo o repite visita.<br /><br />

<b> Importante: Salvo que el usuario decida registrarse en un servicio de  <span Style="font-weight: bold;">
              Origen&zwj;Studios&zwj;<sup>&reg;</sup></span>, la cookie nunca irá asociada a ningún dato de carácter personal que pueda identificarle. Dichas cookies sólo serán utilizadas con propósitos estadísticos que ayuden a la optimización de la experiencia de los usuarios en el sitio.</b>
</ContentBox>
{/* ------------------------------------------------------------------ 8 COOKIES DE ANALITICAS  */}




{/* 9 COOKIES DE PUBLICIDAD ------------------------------------------------------------------ */}
<ContentBox
            className="w-100 h-a m-b-10px"
            number="9"
            title={"COOKIES DE PUBLICIDAD  "}
          />
          <ContentBox className="w-100 h-a m-b-40px">
          Este tipo de cookies permiten ampliar la información de los anuncios mostrados a cada usuario anónimo en los servicios de  <span Style="font-weight: bold;">
              Origen&zwj;Studios&zwj;<sup>&reg;</sup></span>. Entre otros, se almacena la duración o frecuencia de visualización de posiciones publicitarias, la interacción con las mismas, o los patrones de navegación y/o comportamientos del usuario ya que ayudan a conformar un perfil de interés publicitario. De este modo, permiten ofrecer publicidad afín a los intereses del usuario.
          </ContentBox>
{/* ------------------------------------------------------------------ 9 COOKIES DE PUBLICIDAD  */}


{/* 10 COOKIES PUBLICITARIAS DE TERCEROS ------------------------------------------------------------------ */}
<ContentBox
            className="w-100 h-a m-b-10px"
            number="10"
            title={"COOKIES PUBLICITARIAS DE TERCEROS  "}
          />
          <ContentBox className="w-100 h-a m-b-40px">Además de la publicidad gestionada por las webs de  <span Style="font-weight: bold;">
              Origen&zwj;Studios&zwj;<sup>&reg;</sup></span> en sus servicios, las webs de  <span Style="font-weight: bold;">
              Origen&zwj;Studios&zwj;<sup>&reg;</sup></span> ofrecen a sus anunciantes la opción de servir anuncios a través de terceros (“Ad-Servers”). De este modo, estos terceros pueden almacenar cookies enviadas desde los servicios de  <span Style="font-weight: bold;">
              Origen&zwj;Studios&zwj;<sup>&reg;</sup></span> procedentes de los navegadores de los usuarios, así como acceder a los datos que en ellas se guardan.<br /><br />
Las empresas que generan estas cookies tienen sus propias políticas de privacidad. En la actualidad, las webs de  <span Style="font-weight: bold;">
              Origen&zwj;Studios&zwj;<sup>&reg;</sup></span> utilizan la plataforma Doubleclick (Google) para gestionar estos servicios. Para más información, acuda a<br /><br />
http://www.google.es/policies/privacy/ads/#toc-doubleclick y a http://www.google.es/policies/privacy/ads/.

          </ContentBox>
{/* ------------------------------------------------------------------ 10 COOKIES PUBLICITARIAS DE TERCEROS  */}



{/* 11 ¿CÓMO DESHABILITAR LAS COOKIES EN MI NAVEGADOR?------------------------------------------------------------------ */}
<ContentBox
            className="w-100 h-a m-b-10px"
            number="11"
            title={"¿CÓMO DESHABILITAR LAS COOKIES EN MI NAVEGADOR?  "}
          />
          <ContentBox className="w-100 h-a m-b-40px">Se pueden configurar los diferentes navegadores para avisar al usuario de la recepción de cookies y, si se desea, impedir su instalación en el equipo. Asimismo, el usuario puede revisar en su navegador qué cookies tiene instaladas y cuál es el plazo de caducidad de las mismas, pudiendo eliminarlas.<br /><br />
Para ampliar esta información consulte las instrucciones y manuales de su navegador:
Para más información sobre la administración de las cookies en Google Chrome: https://support.google.com/chrome/answer/95647?hl=es<br /><br />
Para más información sobre la administración de las cookies en Internet Explorer: http://windows.microsoft.com/es-es/windows-vista/cookies-frequently-asked-questions<br /><br />
Para más información sobre la administración de las cookies en Mozilla Firefox: http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we<br /><br />
Para más información sobre la administración de las cookies en Safari: http://www.apple.com/es/privacy/use-of-cookies/<br /><br />
Para más información sobre la administración de las cookies en Opera: http://help.opera.com/Windows/11.50/es-ES/cookies.html<br /><br />
Si desea dejar de ser seguido por Google Analytics visite: http://tools.google.com/dlpage/gaoptout


          </ContentBox>
{/* ------------------------------------------------------------------ 11 ¿CÓMO DESHABILITAR LAS COOKIES EN MI NAVEGADOR?  */}


{/* 12 PARA SABER MÁS SOBRE LAS COOKIES ------------------------------------------------------------------ */}
<ContentBox
            className="w-100 h-a m-b-10px"
            number="12"
            title={"PARA SABER MÁS SOBRE LAS COOKIES   "}
          />
          <ContentBox className="w-100 h-a m-b-40px">Puede obtener más información sobre la publicidad online basada en el comportamiento y la privacidad online en el siguiente enlace: http://www.youronlinechoices.com/es/<br /><br />
Protección de datos de Google Analytics: http://www.google.com/analytics/learn/privacy.html<br /><br />
Cómo usa Google Analytics las cookies: https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es#analyticsjs
</ContentBox>
{/* ---------------------------------------------------------------- 12 PARA SABER MÁS SOBRE LAS COOKIES  */}


{/* 13 ACTUALIZACIONES Y CAMBIOS EN LA POLITICA DE PRIVACIDAD/COOKIES ------------------------------------------------------------------ */}
<ContentBox
            className="w-100 h-a m-b-10px"
            number="13"
            title={"ACTUALIZACIONES Y CAMBIOS EN LA POLITICA DE PRIVACIDAD/COOKIES "}
          />
          <ContentBox className="w-100 h-a m-b-40px">Las webs de  <span Style="font-weight: bold;">
              Origen&zwj;Studios&zwj;<sup>&reg;</sup></span> pueden modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos, por ello se aconseja a los usuarios que la visiten periódicamente.<br /><br />
Cuando se produzcan cambios significativos en esta Política de Cookies, estos se comunicarán a los usuarios bien mediante la web o a través de correo electrónico a los usuarios registrados.
</ContentBox>
{/*  ------------------------------------------------------------------ 13 ACTUALIZACIONES Y CAMBIOS EN LA POLITICA DE PRIVACIDAD/COOKIES */}

 {/* ESPACIADO FINAL ------------------------------------------------------------------  */}


 <div className="w-100 h-150px h-pr-fl-ma m-b-20px b-s-b-b" Style="border: 1px solid; border-color: white;"><div className="w-80 h-a h-pr-fl-ma centered  t-a-c" Style="color: #666666;"> Fin del Documento | Políticas de Cookies | 27 Ene 2023</div></div><span className="w-100 h-pr-fl-ma"><br />&nbsp;</span>
{/* ------------------------------------------------------------------ ESPACIADO FINAL */}
       


          </div>
      </div>
    </Fragment>
  );
};

export default Cookies;
