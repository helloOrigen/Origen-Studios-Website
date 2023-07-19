import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export default function ContentBox (props) {
  const {
    title,
    titleclassName,
    subtitle,
    subtitleclassName,
    text,
    textclassName,
    className,
    listclassName,
    list,
    note,
    noteclassName,
    action,
    actionclassName,
    link,
    number,
    numberclassName,
    Style,
    intitle,
    intitleclassName,
    category,
    categoryclassName,
    children,
    pricing,
    antes,
    ahora,
    plazo,
    divisa,
    simbolo,
    decimas
  } = props

  return (
    <Fragment>
      <div
        className={` ${className} h-pr-fl-ma w-a h-a b-s-b-b t-o-e f-f-Gilroy`}
        style={Style}
      >
        {title && (
          <h2
            className={` ${titleclassName} h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy d-i `}
            style={{ fontSize: '25px', fontWeight: 'bold', lineHeight: '30px' }}
          >
            {number && (
              <div
                className={` ${numberclassName} m-b-10px h-pr-fl-ma ns-c-e w-and-h-30px t-a-c b-s-b-b of-h t-a-c m-r-10px `}
                style={{
                  fontSize: '13px',
                  border: '1px solid',
                  borderRadius: '100%',
                  borderColor: 'white'
                }}
              >
                <div className="w-a h-a centered ns-c-e h-pr-fl-ma">{number}</div>
              </div>
            )}{' '}
            <div>{title}</div>
          </h2>
        )}
        {subtitle && (
          <h3
            className={` ${subtitleclassName} h-pr-fl-ma b-s-b-b w-100 ns-c-e h-a f-f-Gilroy`}
            style={{
              fontSize: '15px',
              fontWeight: 'bold',
              lineHeight: '20px',
              letterSpacing: '1px'
            }}
          >
            {subtitle}
          </h3>
        )}

        {intitle && (
          <div
            className={` ${intitleclassName} h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy`}
            style={{
              fontSize: '15px',
              lineHeight: '20px',
              fontStyle: 'italic',
              color: 'white'
            }}
          >
            {intitle}
          </div>
        )}

        {category && (
          <div
            className={` ${categoryclassName} h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy`}
            style={{ borderBottom: '1px solid', borderColor: 'white' }}
          >
            <span
              className="w-100 h-a h-pr-fl-ma t-a-r f-w-bo p-l-10px p-r-10px ns-c-e "
              style={{ fontSize: '10px', lineHeight: '15px' }}
            >
              {category}
            </span>
          </div>
        )}
        {text && (
          <p
            className={` ${textclassName} h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy`}
            style={{ fontSize: '15px', lineHeight: '20px' }}
          >
            {text}
          </p>
        )}
        {list && (
          <div
            className={` ${listclassName} h-pr-fl-ma b-s-b-b w-100 ns-f-s-normal h-a f-f-Gilroy`}
            style={{ lineHeight: '20px' }}
          >
            <span className="f-w-bo ns-c-e">&#8600;&zwj;&nbsp;&zwj;</span>&zwj;
            <span className={` ${listclassName}`}>{list}</span>
          </div>
        )}
        {note && (
          <span
            className={` ${noteclassName} ns-c-e h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy`}
            style={{ fontSize: '10px', lineHeight: '15px', fontStyle: 'italic' }}
          >
            {note}
          </span>
        )}
        {children}
        {action && (
          <span
            className={` ${actionclassName} h-pr-fl-ma b-s-b-b w-100 h-a f-f-Gilroy  m-t-10px `}
            style={{ fontSize: '10px', lineHeight: '15px', color: 'white' }}
          >
            <a href={`${link}`}>
              <span className="hover-underline-animation">{action}</span>
            </a>
          </span>
        )}

        {pricing && (
          <div className="w-100 h-pr-fl-ma">
            <div className="w-100 h-pr-fl-ma t-a-r f-w-bo">
              <i>
                <span style={{ color: '#666666' }}>Antes:</span>&nbsp;<s>{antes}</s>
              </i>{' '}
            </div>
            <div className="w-100 h-pr-fl-ma flexbox j-c-c  ">
              <div className="w-a a-s-c ns-f-s-medium  f-w-bo  ns-c-e">
                {simbolo}
              </div>
              <div className="w-a a-s-c  flexbox">
                <div className=" a-s-b" style={{ fontSize: '40px' }}>{ahora}</div>
                <div className=" a-s-b ns-f-s-normal f-w-bo">
                  ,&nbsp;{decimas}
                </div>{' '}
              </div>
              <div className="w-a a-s-c  f-w-bo ns-c-e" style={{ fontSize: '20px' }}>
                &nbsp;{divisa}
              </div>
            </div>
            <div
              className="w-100 h-pr-fl-ma t-a-c f-w-bo ns-f-s-small"
              style={{ color: '#666666' }}
            >
              I.V.A. Inc./ {plazo}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  )
}

ContentBox.propTypes = {
  title: PropTypes.string,
  titleclassName: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleclassName: PropTypes.string,
  text: PropTypes.string,
  textclassName: PropTypes.string,
  className: PropTypes.string,
  listclassName: PropTypes.string,
  list: PropTypes.array,
  note: PropTypes.string,
  noteclassName: PropTypes.string,
  action: PropTypes.string,
  actionclassName: PropTypes.string,
  link: PropTypes.string,
  number: PropTypes.string,
  numberclassName: PropTypes.string,
  Style: PropTypes.object,
  intitle: PropTypes.string,
  intitleclassName: PropTypes.string,
  category: PropTypes.string,
  categoryclassName: PropTypes.string,
  children: PropTypes.node,
  pricing: PropTypes.string,
  antes: PropTypes.string,
  ahora: PropTypes.string,
  plazo: PropTypes.string,
  divisa: PropTypes.string,
  simbolo: PropTypes.string,
  decimas: PropTypes.string
}
