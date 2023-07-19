import React, { Fragment } from 'react'
import { Title } from '../../components/index'

export default function PVIdentityMensuales (props) {
  return (
    <Fragment>
      <div className="w-100 r-h-c m-w-100 h-a h-pr-fl-ma p-10px m-d-b b-s-b-b">
         <Title
           h4="&#129150; Planes a presupuestar"
           className="w-100 t-a-l p-20px bg-d bg-g-identity "
         ></Title>
       </div>

      <div className="w-100 h-200px h-pr-fl-ma ns-br-r-1 bg-d b-s-b-b">
      <Title
          h1="
          &#128712; En construcción"
          className="w-100 h-a t-a-c p-20px r-v-c ns-c-e "
        ></Title>
 </div>
    </Fragment>
  )
}
