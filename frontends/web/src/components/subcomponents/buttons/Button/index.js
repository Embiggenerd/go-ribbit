import React from 'react'

const Button = ({ handleClick, btnCls, text }) => {
  return (
    <button className={`button ${btnCls}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button