import React from "react";
import "../Styles/seed.css";

export default function Footer(props) {
  const { className, children } = props;

  return (
    <>
      <div className={` ${className} m-d-n h-pr-fl-ma w-a h-100 b-s-b-b `}>
        {/* Footer */}
        <div
          className="w-100 h-100 h-pr-fl-ma b-s-b-b"
          Style="font-size: 10px; color: white; line-height: 15px; "
        >
          <div className="w-25 h-100 p-t-10px  b-s-b-b h-pr-fl-ma p-l-10px p-r-10px"> {/* Bloque 1 - 25% height */}
            <b>
              OrigenStudios<sup Style="font-size:75%;  top: -0.28em;">®</sup>
            </b>
            &zwj;&nbsp;Company
            <br />
            2023&zwj;&nbsp;&zwj;&nbsp;&zwj;&nbsp;©&zwj;&nbsp;&zwj;&nbsp;&zwj;&nbsp;Todos&nbsp;&zwj;los&nbsp;&zwj;derechos&nbsp;&zwj;reservados.
            <br />
           <a href="mailto:hello@origenstudios.com" alt="Comuníquese con nosotros!" className="h-e c-p h-e-sub-line">hello@origenstudios.com <span className="h-e-sub-line"></span></a> <br />
            Montevideo, Uruguay.
          </div>
          <div className="w-25 h-100 p-t-10px  b-s-b-b h-pr-fl-ma p-l-10px p-r-10px t-a-l"> {/* Bloque 2 - 25% height */}
          <a href="#" alt="Comuníquese con nosotros!" className="h-e c-p h-e-sub-line">Próximos eventos. <span className="h-e-sub-line"></span></a> <br />

          <a href="#"  className="h-e c-p h-e-sub-line">Agendar consultas guiadas. <span className="h-e-sub-line"></span></a> <br />
          <a href="#"  className="h-e c-p h-e-sub-line">Empleos y pasantías. <span className="h-e-sub-line"></span></a> <br />
          <a href="#"  className="h-e c-p h-e-sub-line">Planes de beneficencia. <span className="h-e-sub-line"></span></a> <br />
          <a href="#"  className="h-e c-p h-e-sub-line">Planes cooperativos. <span className="h-e-sub-line"></span></a> <br />

          </div>
          <div className="w-25 h-100 p-t-10px  b-s-b-b h-pr-fl-ma p-l-10px p-r-10px t-a-l"> {/* Bloque 3 - 25% height */}
          <a href="#"  className="h-e c-p h-e-sub-line">Nuestra empresa. <span className="h-e-sub-line"></span></a> <br />
          <a href="#"  className="h-e c-p h-e-sub-line">Metodología y producción. <span className="h-e-sub-line"></span></a> <br />
          <a href="#"  className="h-e c-p h-e-sub-line">Recursos estratégicos. <span className="h-e-sub-line"></span></a> <br />
          <a href="#"  className="h-e c-p h-e-sub-line">Generación de oportunidades. <span className="h-e-sub-line"></span></a> <br />
          <a href="#"  className="h-e c-p h-e-sub-line">Casos de éxito. <span className="h-e-sub-line"></span></a> <br />

          </div>
          <div className="w-25 h-100 p-t-10px b-s-b-b h-pr-fl-ma  p-l-10px t-a-l"> {/* Bloque 4 - 25% height */}
          <a href="#"  className="h-e c-p h-e-sub-line">Términos y condiciones de uso. <span className="h-e-sub-line"></span></a> <br />
          <a href="#"  className="h-e c-p h-e-sub-line">Políticas de privacidad. <span className="h-e-sub-line"></span></a> <br />
          <a href="#"  className="h-e c-p h-e-sub-line">Centro de preguntas frecuentes. <span className="h-e-sub-line"></span></a> <br />
          <a href="#"  className="h-e c-p h-e-sub-line">Uso de cookies. <span className="h-e-sub-line"></span></a> <br />

          </div>
        </div>
      </div>
    </>
  );
}
