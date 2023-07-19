import React, { Fragment } from 'react'
import { ContentBox } from '../components/index'

import Eye from '../assets/icons/eye.svg'
import Target from '../assets/icons/target.svg'
import Diamond from '../assets/icons/diamond.svg'
import Logo from '../assets/logo/OS-logo-white.png'

const About = () => {
  return (
    <Fragment>
      <div className="w-100 h-100 h-pr-fl-ma centered b-s-b-b of-auto ">
        <div className="w-100 h-a h-pr-fl-ma d-f m-d-b">
          <div className="m-w-100 w-50 h-a h-pr-fl-ma p-20px">
            <img
              className="w-and-h-500px m-w-250px m-h-250px r-h-c h-pr-fl-ma"
              style={{ objectFit: 'contain' }}
              src={Logo}
              alt="Logo"
            />
          </div>
          <div className="m-w-100 w-50 h-a h-pr-fl-ma p-20px b-s-b-b bg-black-node-o-70 blur ns-br-r-1">
            <ContentBox
              className="w-100 h-a"
              title={'Nuestra historia.'}
              subtitle="2023 - Montevideo, Uruguay. "
              text="Un grupo conformado por un experto en Administración Contable (Cesar Lima), una Master y nuestro referente de Legal & Jurídica (Victoria Brylka) y un Diseñador Gráfico Sr. con más de 15 años de experiencia, (Nickolás Machado), nos reunimos con el fin de mejorar la calidad, optimizar los recursos y generar oportunidades reales de crecimiento en todos aquellos productos y servicios digitales que hoy en día, se ofrecen al público por miles de empresas a nivel regional e internacional."
            />
            <ContentBox
              className="w-100 h-a m-b-10px"
              text="En ese entonces, iniciamos con un ''Estudio de mercado'', con la idea de sectorizar nuestros ''Nichos Prospecto'', en función a nuestros Conocimientos, Habilidades y Experiencias, pero lo que encontramos nos impactó..."
            />
            <ContentBox
              className="w-100 h-a m-b-10px"
              text="Actualmente, existen en internet un sin fin de sitios webs creados por ''Agencias de Desarrollo'' que no conocen de parámetros de rendimiento, optimización de recursos, y mucho menos certificación de calidad."
            />
            <ContentBox
              className="w-100 h-a m-b-10px"
              text="Estas empresas, ofrecen servicios tales como: ''¡Creamos su página web original en el día!'', o ''¡Creamos su logo en 10 minutos!'', a las claras, se puede ver que no solo los sitios webs son clones uno de otros, sino que también los ''Logotipos Originales'' son generados con plantillas online y carecen totalmente de cualquier tipo de parámetro de rendimiento y calidad."
            />
            <ContentBox
              className="w-100 h-a m-b-10px"
              text="Es por eso, que decidimos unir fuerzas, con muchas y muy potentes ideas, comenzamos la travesía de ofrecer más y mejores servicios que cumplan con todo lo anteriormente mencionado, a su vez, buscamos implantar un estándar de rendimiento y calidad para ayudar a las empresas a ofrecerle lo mejor a sus clientes."
            />
            <ContentBox
              className="w-100 h-a m-b-10px"
              text="Y por último, una pregunta muy frecuente... El Nombre... ¿A qué refiere?..."
            />
            <ContentBox
              className="w-100 h-a m-b-10px"
              text="Inspiraremos grandes cambios positivos, tenemos grandes planes, somos super ambiciosos/as, y crearemos oportunidades para muchas personas, eso nos brinda mucha motivación y nos da aliento para hacer eso que nos preparamos durante todas nuestras carreras... pero nada de esto será posible, sin un comienzo, un Origen."
            />
          </div>
        </div>

        <div className="m-w-100 w-33  h-100 h-pr-fl-ma p-20px ">
          <div
            className="w-100 h-100 h-pr-fl-ma bg-black-node-o-70 blur ns-br-r-1"
            style={{ border: '1px solid', borderColor: 'white' }}
          >
            <div className="w-100 h-a h-pr-fl-ma r-v-c">
              <div className="w-and-h-150px h-pr-fl-ma r-h-c circle p-20px">
                <img
                  alt="target"
                  src={Target}
                  className="w-100 h-100 h-pr-fl-ma"
                  style={{ stroke: '#ffffff !important' }}
                />
              </div>
              <ContentBox
                link={'enlace accion'}
                className="w-100 p-20px h-a t-a-c"
                title={'Misión'}
                titleclassName={'t-a-c'}
                subtitle={'Su nueva imagen de marca.'}
                text={
                  'Nuestra misión es ser el origen de un impacto positivo en el desarrollo de nuevas marcas. Nos enfocamos en elevar el estándar de calidad y rendimiento en todos los productos y servicios digitales, siendo la pieza maestra de las marcas y el ejemplo de inspiración que les ayude a alcanzar sus más ambiciosos proyectos.'
                }
              />
            </div>
          </div>
        </div>
        <div className="m-w-100 w-33  h-100 h-pr-fl-ma p-20px ">
          <div
            className="w-100 h-100 h-pr-fl-ma bg-black-node-o-70 blur ns-br-r-1"
            style={{ border: '1px solid', borderColor: 'white' }}
          >
            <div className="w-100 h-a h-pr-fl-ma r-v-c">
              <div className="w-and-h-150px h-pr-fl-ma r-h-c circle p-20px">
                <img
                  alt="IconEye"
                  src={Eye}
                  className="w-100 h-100 h-pr-fl-ma"
                  style={{ stroke: '#ffffff !important' }}
                />
              </div>
              <ContentBox
                link={'enlace accion'}
                className="w-100 p-20px h-a t-a-c"
                title={'Visión'}
                subtitle={'Su nueva imagen de marca.'}
                text={
                  'Nuestra visión es ser la agencia de producción y desarrollo más reconocida a nivel regional, creando espacios de colaboración con empresas multinacionales, para generar cientos de miles de oportunidades directa e indirectamente tanto a empresas como a personas, así como el deseo de colaboración y producción internacional en nuestro país.'
                }
              />
            </div>
          </div>
        </div>
        <div className="m-w-100 w-33  h-100 h-pr-fl-ma p-20px">
          <div
            className="w-100 h-100 h-pr-fl-ma bg-black-node-o-70 blur ns-br-r-1"
            style={{ border: '1px solid', borderColor: 'white' }}
          >
            <div className="w-100 h-a h-pr-fl-ma r-v-c">
              <div className="w-and-h-150px h-pr-fl-ma r-h-c circle p-20px">
                <img
                  alt="diamond"
                  src={Diamond}
                  className="w-100 h-100 h-pr-fl-ma"
                  style={{ stroke: '#ffffff !important' }}
                />
              </div>

              <ContentBox
                link={'enlace accion'}
                className="w-100 p-20px h-a t-a-c"
                title={'Valores'}
                subtitle={'Su nueva imagen de marca.'}
                text={
                  'Somos un grupo de personas creativas, ambiciosas y con más de 100.000 horas de estudio, planificación y desarrollo en cada una de nuestras áreas. Promovemos los conocimientos, habilidades y experiencias de todas las personas, nuestras raíces latinas cargadas de tanta cultura aportan un gran valor inclusivo y multicultural.'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default About
