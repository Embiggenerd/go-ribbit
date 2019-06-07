import React from 'react';

const Modal = ({ code, message, onClose }) => {
  return (
    <div
      className={message ? 'click_catcher click_catcher--open' : 'click_catcher'}
      onClick={onClose}
    >
      <div className="modal" data-test-id="modal">
        <h3>{code}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
