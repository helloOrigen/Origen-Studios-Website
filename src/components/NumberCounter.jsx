import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NumberCounter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount () {
    const { end, duration, delay } = this.props
    let current = 0
    const step = 33

    setTimeout(() => {
      const interval = setInterval(() => {
        if (current + step >= end) {
          this.setState({ count: end })
          clearInterval(interval)
        } else {
          this.setState({ count: current + step })
          current += step
        }
      }, duration)
    }, delay)
  }

  render () {
    const { className } = this.props // Destructura className desde props
    return (
      <span className={`w-100 t-a-c ${className} noselect f-f-Gilroy f-w-bo`}>
        +{this.state.count}
      </span>
    )
  }
}

NumberCounter.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number, // Duración de la animación en milisegundos
  delay: PropTypes.number, // Retraso antes de comenzar la animación en milisegundos
  className: PropTypes.string // Define className como PropTypes
}

NumberCounter.defaultProps = {
  duration: 1000, // Valor predeterminado de duración: 1 segundo
  delay: 0 // Valor predeterminado de retraso: 0 segundos
}

export default NumberCounter
