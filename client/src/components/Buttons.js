import React from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import '../scss/styles.scss';

const Buttons = () => {
  const history = useHistory();

  function copyToClipboard() {
    var aux = document.createElement('input');
    aux.setAttribute('value', window.location.href);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
  }

  return (
    <div className='buttons-wrapper'>
      <button className='new-btn btn' onClick={() => history.push(`/documents/${uuidV4()}`)}>
        New document
      </button>
      <button className='link-btn btn' onClick={copyToClipboard}>
        Copy link
      </button>
    </div>
  );
};

export default Buttons;
