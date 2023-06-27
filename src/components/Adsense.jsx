import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Adsense extends Component {
  googleInit = null;

  componentDidMount() {
    const { timeout } = this.props;
    this.googleInit = setTimeout(() => {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    }, timeout);
  }

  componentWillUnmount() {
    if (this.googleInit) clearTimeout(this.googleInit);
  }

  render() {
    const { className, slot, googleAdId, style, format } = this.props;
    return (
      <div className={`${className} ns-br-r-1`}>
        <ins
          className="adsbygoogle"
          style={style || { display: 'block', textAlign: 'center' }}
          data-ad-client={googleAdId}
          data-ad-slot={slot}
          data-ad-format={format || 'auto'}
          data-full-width-responsive="true"

          data-ad-responsive="true"
        />
      </div>
    );
  }
}

Adsense.propTypes = {
  className: PropTypes.string,
  slot: PropTypes.string,
  timeout: PropTypes.number,
  googleAdId: PropTypes.string.isRequired,
  format: PropTypes.string,
  style: PropTypes.object,
};

Adsense.defaultProps = {
  classNames: '',
  timeout: 200,
};

export default Adsense;
