import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoogleAd extends Component {
  googleInit = null;

  componentDidMount() {
    const { timeout } = this.props;
    this.googleInit = setTimeout(() => {
      if (typeof window !== 'undefined')
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, timeout);
  }

  componentWillUnmount() {
    if (this.googleInit) clearTimeout(this.googleInit);
  }

  render() {
    const { className, slot, googleAdId, style, format } = this.props;
    return (
      <div className={`${className} w-100 h-a h-pr-fl-ma bg-d ns-br-r-2`}>
        <ins
          className="adsbygoogle"
          style={style || { display: 'block', textAlign: "center" }}
          data-ad-client={googleAdId}
          data-ad-slot={slot}
          data-ad-format={format || "auto"}
          data-full-width-responsive="true"
        ></ins>
      </div>
    );
  }
}
GoogleAd.propTypes = {
  classNames: PropTypes.string,
  slot: PropTypes.string,
  timeout: PropTypes.number,
  googleAdId: PropTypes.string,
};
GoogleAd.defaultProps = {
  classNames: '',
  timeout: 200,
};
export default GoogleAd;