import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function Cifrador() {
  const [mensaje, setMensaje] = useState('');
  const [clave, setClave] = useState('');
  const [textoCifrado, setTextoCifrado] = useState('');
  const [textoDescifrado, setTextoDescifrado] = useState('');

  const cifrar = () => {
    const textoCifrado = CryptoJS.AES.encrypt(mensaje, clave).toString();
    setTextoCifrado(textoCifrado);
  };

  const descifrar = () => {
    const bytes = CryptoJS.AES.decrypt(textoCifrado, clave);
    const textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
    setTextoDescifrado(textoDescifrado);
  };

  return (
    <div className="w-100 h-a h-pr-fl-ma p-20px bg-black flexbox">
      <label>
        Insertar mensaje:
        <textarea className="w-200px h-200px h-pr-fl-ma bg-blue p-20px m-5px" type="text" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
      </label>
      <br />
      <label>
        Insertar clave de cifrado:
        <textarea className="w-200px h-200px h-pr-fl-ma bg-orange p-20px m-5px" type="text" value={clave} onChange={(e) => setClave(e.target.value)} />
      </label>
      <br />
      <button className="w-a h-a h-pr-fl-ma bg-green p-20px m-5px" onClick={cifrar}>Cifrar</button>
      <button className="w-a h-a h-pr-fl-ma bg-green p-20px m-5px" onClick={descifrar}>Descifrar</button>
      <br />
      <label>
        Texto cifrado:
        <textarea  type="text" value={textoCifrado} readOnly />
      </label>
      <br />
      <label>
        Texto descifrado:
        <textarea  type="text" value={textoDescifrado} readOnly />
      </label>
    </div>
  );
}

export default Cifrador;