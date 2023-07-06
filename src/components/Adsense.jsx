import React, { useEffect  } from 'react';

const Adsense = (props) => {
  const { dataAdSlot } = props;  



useEffect(() => {

    try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    catch (e) {

    }

},[]);



return (
    <>
        <ins className="adsbygoogle noselect"
            style={{ display: "block" }}
            data-ad-client="ca-pub-6375603115544403"
            data-ad-slot={dataAdSlot}
            data-ad-format="auto"
            data-full-width-responsive="true">
        </ins>
    </>
);
 };

  export default Adsense;

 