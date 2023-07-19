import React from 'react'
import PropTypes from 'prop-types'
import Btn from './btn'

export default function BlockList (props) {
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
    text,
    btn,
    tags,
    btnLink,
    BtnOnClick,
    btnText,
    alt,
    type,
    icon,
    iconclassName,
    CardClassName
  } = props

  const renderTags = () => {
    if (!tags) return null

    const tagArray = tags.split(',')

    return tagArray.map((tag, index) => (
      <div
        key={index}
        className={`tag ${titleclassName}`}
        style={{ fontSize: '20px', lineHeight: '25px', ...titleStyle }}
      >
        {tag.trim()}
      </div>
    ))
  }

  return (
    <>
      <div
        className={`w-100 h-a h-pr-fl-ma ${type} bg-d h-e b-s-b-b of-h ${CardClassName} ${color} c-p  br-w-1px br-s-solid  ns-br-r-1 m-b-10px flexbox m-d-b p-5px`}
      >
        {image && (
          <div className="w-250px m-w-100 h-100px m-h-100px  of-h h-pr-fl-ma b-s-b-b p-10px of-n bg-d">
            <div className="w-100 h-a h-pr-fl-m b-s-b-b r-v-c">
              <img
                src={image}
                alt={alt}
                style={{ objectFit: 'contain' }}
                className="w-100 h-100 p-5px b-s-b-b  ns-br-r-2 of-h"
              />
            </div>
          </div>
        )}

        {icon && (
          <div className="w-100 h-150px h-pr-fl-ma">
            <div className="w-100 h-150px h-pr-fl-ma b-s-b-b of-n">
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
          <div className="w-100 h-a h-pr-fl-ma p-10px">
            {title && (
              <div
                className={`w-100 p-5px f-f-Gilroy ${titleclassName} f-w-bo ns-c-e`}
                style={{ fontSize: '20px', lineHeight: '25px', ...titleStyle }}
              >
                {title}
              </div>
            )}
            {renderTags()} {/* Renderizar las etiquetas generadas */}
            {text && (
              <div
                className={`w-100 p-5px f-f-Gilroy ${titleclassName}`}
                style={{ fontSize: '15px', lineHeight: '20px', ...titleStyle }}
              >
                {text}
              </div>
            )}

            {subtitle && (
              <span
                className={`w-100 h-a h-pr-fl-ma p-10px t-a-c f-f-Gilroy ${subtitleclassName} ns-c-e`}
                style={{ fontSize: '15px', lineHeight: '15px', ...subtitleStyle }}
              >
                {subtitle}
              </span>
            )}
            {description && (
              <span className="w-90 m-t-10px h-pr-fl-ma f-f-Gilroy m-t-10px m-b-50px p-10px">
                {description}
              </span>
            )}
          </div>
        )}

        {btn && (
          <div className="w-250px flexbox m-d-b m-w-100 h-pr-fl-ma p-10px">
            <Btn
              BtnOnClick={BtnOnClick}
              className="w-100 m-w-100 h-pr-fr-ma p-15px ns-bg-e f-w-bo"
              text={btnText}
              enlace={btnLink}
            />
          </div>
        )}
      </div>
    </>
  )
}

BlockList.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  titleclassName: PropTypes.string,
  titleStyle: PropTypes.object,
  subtitle: PropTypes.string,
  ContentBox: PropTypes.string,
  subtitleclassName: PropTypes.string,
  subtitleStyle: PropTypes.object,
  description: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  btn: PropTypes.string,
  tags: PropTypes.string,
  btnLink: PropTypes.string,
  BtnOnClick: PropTypes.string,
  btnText: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  iconclassName: PropTypes.string,
  CardClassName: PropTypes.string
}
