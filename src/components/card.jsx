import React from 'react'
import PropTypes from 'prop-types'
import Btn from './btn'
import ImageComponent from './ImageComponent'

export default function Card (props) {
  const {
    color,
    title,
    titleclassName,
    titleStyle,
    subtitle,
    ContentBox,
    subtitleclassName,
    subtitleStyle,
    description,
    image,
    btn,
    btnLink,
    BtnOnClick,
    btnText,
    alt,
    type,
    filename,
    filetype,
    filesize,
    activeoptions,
    icon,
    iconclassName,
    CardClassName
  } = props

  return (
    <>
      <div
        className={`w-a h-a h-pr-fl-ma ${type} d-n-on-h-container card h-e b-s-b-b of-h ${CardClassName} ${color} c-p  br-w-1px br-s-solid ns-b-c-e-h br-r-10px`}
      >
        {image && (
          <div className=" w-100 h-100 card m-a b-s-b-b of-n">
            <ImageComponent
              imageUrl={image}
              alt={alt}
              Style={{ objectFit: 'cover' }}
              className="w-100 h-100  m-a b-s-b-b h-e-scale "
            />
          </div>
        )}

        {icon && (
          <div className="w-100 h-150px h-pr-fl-ma ">
            <div className="w-100 h-150px h-pr-fl-ma b-s-b-b of-n ">
              <img
                src={icon}
                alt={alt}
                className={`${iconclassName} w-100px h-100px`}
                style={{
                  position: 'absolute',
                  margin: 'auto',
                  right: '0px',
                  left: '0px',
                  top: '0px',
                  bottom: '0px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        )}

        {ContentBox && (
          <div
            className="w-100 bg-g-2  d-n-on-h"
            style={{ padding: '20px', position: 'absolute', margin: 'auto', top: '0px' }}
          >
            {title && (
              <div
                className={`w-100 p-5px f-w-bo f-f-Gilroy  ${titleclassName} br-c-white br-s-solid br-c-white br-r-50px`}
                style={{ fontSize: '15px', lineHeight: '25px', ...titleStyle }} >
                &nbsp;{title}
              </div>
            )}

            {subtitle && (
              <span
                className={`w-100 h-a h-pr-fl-ma p-10px t-a-c f-f-Gilroy ${subtitleclassName} ns-c-e`}
                style={{ fontSize: '15px', lineHeight: '15px', ...subtitleStyle }} >
                {' '}
                {subtitle}
              </span>
            )}
            {description && (
              <span className="w-90 m-t-10px h-pr-fl-ma f-f-Gilroy m-t-10px m-b-50px p-10px">
                {description}{' '}
              </span>
            )}
          </div>
        )}

        {activeoptions && (
          <div
            className=" h-pr-fl-ma card-h-opt bg-black-node-o-50 br-r-5px f-f-Gilroy  "
            style={{ zIndex: '120' }}
          >
            <div
              className="w-100 h-a h-pr-fl-ma b-s-b-b "
              style={{ fontSize: '12px' }}
            >
              <div className="w-100 h-100 h-pr-fl-ma b-s-b-b">
                <div className="w-100 h-a h-pr-fr-ma p-5px">
                  <div className="w-a h-a h-pr-fr-ma flexbox">
                    <Btn className="m-r-10px">HazteSponsor</Btn>
                    <Btn>DESCARGAR</Btn>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 h-a bg-black br-r-10px flexbox p-5px f-f-Gilroy h-pr-fr-ma b-s-b-b ns-f-s-small">
              <div className="w-a h-a h-pr-fl-ma p-5px">
                <div className="h-pr-fl-ma  l-h-10px   f-w-bo ">
                  {' '}
                  Nombre del archivo:
                </div>{' '}
                <br />
                <div className="h-pr-fl-ma l-h-15px   f-w-bo ns-c-e">
                  {filename}
                </div>
              </div>
              <div className="w-a h-a h-pr-fl-ma p-5px">
                <div className="h-pr-fl-ma l-h-10px   f-w-bo ">Formato:</div>{' '}
                <br />
                <div className="h-pr-fl-ma l-h-15px   f-w-bo ns-c-e">
                  {filetype}
                </div>
              </div>
              <div className="w-a h-a h-pr-fl-ma p-5px">
                <div className=" h-pr-fl-ma  l-h-10px   f-w-bo ">Tamaño:</div>{' '}
                <br />
                <div className="h-pr-fl-ma l-h-15px   f-w-bo ns-c-e">
                  {filesize}
                </div>
              </div>
            </div>
          </div>
        )}

        {btn && (
          <div className="h-pr-fl-ma m-20px">
            <Btn
              BtnonClick={BtnOnClick}
              className="h-pr-fr-ma"
              text={btnText}
              enlace={btnLink}
            />
          </div>
        )}
      </div>
    </>
  )
}

Card.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  titleclassName: PropTypes.string,
  titleStyle: PropTypes.object,
  subtitle: PropTypes.string,
  ContentBox: PropTypes.node,
  subtitleclassName: PropTypes.string,
  subtitleStyle: PropTypes.object,
  description: PropTypes.string,
  image: PropTypes.string,
  btn: PropTypes.bool,
  btnLink: PropTypes.string,
  BtnOnClick: PropTypes.func,
  btnText: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.string,
  filename: PropTypes.string,
  filetype: PropTypes.string,
  filesize: PropTypes.string,
  activeoptions: PropTypes.bool,
  icon: PropTypes.string,
  iconclassName: PropTypes.string,
  CardClassName: PropTypes.string
}
