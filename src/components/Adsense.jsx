import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Adsense extends Component {
  googleInit = null;

  componentDidMount() {
    const { timeout } = this.props;
    if (timeout) {
      this.googleInit = setTimeout(() => {
        if (typeof window !== 'undefined' && window.adsbygoogle) {
          window.adsbygoogle.push({});
        }
      }, timeout);
    }
  }
  componentWillUnmount() {
    if (this.googleInit) clearTimeout(this.googleInit);
  }

  render() {
    const { className, slot, googleAdId, style, format } = this.props;
    const finalClassName = className ? `${className} ns-br-r-1` : 'ns-br-r-1';
    const insStyle = style || { display: 'block', textAlign: 'center' };
    return (
      <div className={finalClassName}>
        <ins
          className="adsbygoogle"
          style={insStyle}
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
  className: '',
  timeout: 200,
};

export default Adsense;
