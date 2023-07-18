import React, { useEffect, useRef } from 'react';

const Adsense = (props) => {
  const { dataAdSlot, adKey } = props;
  const adsRef = useRef(null);

  useEffect(() => {
    if (window.adsbygoogle && adsRef.current) {
      try {
        window.adsbygoogle.push({});
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const adsClass = `adsbygoogle-${adKey}`;

  return (
    <ins
      className={`adsbygoogle ${adsClass}`}
      Style={{ display: "block" }}
      data-ad-client="ca-pub-6375603115544403"
      data-ad-slot={dataAdSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
      ref={adsRef}
    />
  );
};

export default Adsense;