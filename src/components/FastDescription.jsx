import React from 'react'
import PropTypes from 'prop-types'

import { Title } from '../components'

const FastDescription = ({ titulo, descripcion, comentario, nombre, pais, image }) => {
  return (
    <div className="w-100 h-a p-10px bg-d-t h-pr-fl-ma flexbox m-d-b ns-br-r-2 m-b-20px">
      <div className="w-100 d-b m-d-f h-a h-pr-fl-ma">
        <div className="w-500px h-a h-pr-fl-ma bg-d ns-br-r-2 b-s-b-b of-h p-10px">
          <img src={image} alt="" className="w-100 ns-br-r-1 b-s-b-b of-h h-pr-fl-ma" />
        </div>
      </div>
      <div className="w-100 h-a h-pr-fl-ma p-20px">
        <Title h2 className="p-b-10px f-f-Gilroy f-w-l-i t-a-c">
          <u className="UnderLine">{titulo}</u>
        </Title>
        <Title h4 className="p-b-10px f-w-n-i t-a-c">{descripcion}</Title>
          <p className="w-100 h-a h-pr-fl-ma f-f-Gilroy f-w-n-i t-a-c"><span className="ns-c-white ns-f-s-normal f-w-bo">&#34;&zwj;&nbsp;&zwj;</span>&zwj;<span className="ns-c-e ns-f-s-normal ">{comentario}</span>&zwj;<span className="ns-c-white ns-f-s-normal f-w-bo">&zwj;&nbsp;&zwj;&#34;</span></p>
          <p className="w-100 h-a h-pr-fl-ma f-f-Gilroy f-w-n-i t-a-c">
          {nombre} - {pais}</p>
      </div>
    </div>
  )
}

FastDescription.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  comentario: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  pais: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default FastDescription
