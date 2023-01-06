import React from 'react';
import '../Styles/home.css'

const navBar = () => {
    return (


        <nav className="nav-p">
            <ul>
                <li>
                    <a href="#">Nosotros</a>
                    <ul>
                        <li><a href="#">Equipo</a></li>
                        <li><a href="#">Misión</a></li>
                        <li><a href="#">Visión</a></li>
                        <li><a href="#">Valores</a></li>
                        <li><a href="#">Cultura</a></li>
                    </ul>
                </li>
                <li><a href="#">Estructura</a>
                    <ul><li><a href="#">Areas</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Planes</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Servicios</a>
                    <ul>
                        <li><a href="#">Diseño </a></li>
                        <li><a href="#">Desarrollo</a></li>
                        <li><a href="#">Marketing Digital</a></li>
                        <li><a href="#">Testing</a></li>
                        <li><a href="#">Asesoria</a></li>

                    </ul>
                </li>
                <li>
                <a href="#">Planes</a>
                    <ul>
                        <li><a href="#">Conceptos</a></li>
                        <li><a href="#">Sturtups</a></li>
                        <li><a href="#">Medianas</a></li>
                        <li><a href="#">Grandes</a></li>
                        <li><a href="#">Internacionales</a></li>
                        <li><a href="#"></a></li>

                    </ul>
                </li>
                <li><a href="#">Metodología</a>
                    <ul><li><a href="#">Reconocimiento</a></li>
                        <li><a href="#">Produccion</a></li>
                        <li><a href="#">Entrega</a></li></ul></li>
                <li><a href="#">Controles</a>
                    <ul>
                        <li><a href="#">Controles de Calidad</a></li>
                        <li><a href="#">Parametros de Rendimiento</a></li>
                        <li><a href="#">Certificaciones</a></li>
                        <li><a href="#">Validaciones</a></li>
                        <li><a href="#">Internacionales</a></li>
                        <li><a href="#">Personalizadas</a></li>
                    </ul></li>
            </ul>
        </nav>





    )
}

export default navBar