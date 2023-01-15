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
           <a href="mailto:hello@origenstudios.com" alt="Comuníquese con nosotros!"><span className="hover-underline-animation">hello@origenstudios.com</span>  </a> <br />
            Montevideo, Uruguay.
          </div>
          <div className="w-25 h-100 p-t-10px  b-s-b-b h-pr-fl-ma p-l-10px p-r-10px t-a-l"> {/* Bloque 2 - 25% height */}
          <a href="#" alt="Comuníquese con nosotros!"><span className="hover-underline-animation">Próximos eventos.</span>  </a> <br />

          <a href="#"><span className="hover-underline-animation">Agendar consultas guiadas.</span>   </a> <br />
          <a href="#"><span className="hover-underline-animation">Empleos y pasantías.</span>  </a> <br />
          <a href="#"><span className="hover-underline-animation">Planes de beneficencia.</span>  </a> <br />
          <a href="#"><span className="hover-underline-animation">Planes cooperativos.</span>  </a> <br />

          </div>
          <div className="w-25 h-100 p-t-10px  b-s-b-b h-pr-fl-ma p-l-10px p-r-10px t-a-l"> {/* Bloque 3 - 25% height */}
          <a href="#"><span className="hover-underline-animation">Nuestra empresa.</span>  </a> <br />
          <a href="#"><span className="hover-underline-animation">Metodología y producción.</span>  </a> <br />
          <a href="#"><span className="hover-underline-animation">Recursos estratégicos.</span>  </a> <br />
          <a href="#"><span className="hover-underline-animation">Generación de oportunidades.</span>  </a> <br />
          <a href="#"><span className="hover-underline-animation">Casos de éxito.</span>  </a> <br />

          </div>
          <div className="w-25 h-100 p-t-10px b-s-b-b h-pr-fl-ma  p-l-10px t-a-l"> {/* Bloque 4 - 25% height */}
          <a href="#"><span className="hover-underline-animation">Términos y condiciones de uso.</span>  </a> <br />
          <a href="#"><span className="hover-underline-animation">Políticas de privacidad.</span>  </a> <br />
          <a href="#"><span className="hover-underline-animation">Centro de preguntas frecuentes.</span>  </a> <br />
          <a href="#"><span className="hover-underline-animation">Uso de cookies.</span>  </a> <br />

          </div>
        </div>
      </div>
    </>
  );
}
