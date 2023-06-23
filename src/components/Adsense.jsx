import React from 'react';
import PropTypes from 'prop-types';

const initAd = () => {
  (window.adsbygoogle = window.adsbygoogle || []).push({});
};

class Adsense extends React.Component {
  componentDidMount() {
    initAd();
  }

  shouldComponentUpdate(nextProps) {
    const { props: { path } } = this;
    return nextProps.path !== path;
  }

  componentDidUpdate() {
    initAd();
  }

  render() {
    const { children, className, path } = this.props;
    return (
      <div key={path} className={`adsense ${className}`}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-6375603115544403"
          data-ad-slot="9886328101"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }
}

Adsense.propTypes = {
  path: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Adsense.defaultProps = {
  className: '',
};

export default Adsense;