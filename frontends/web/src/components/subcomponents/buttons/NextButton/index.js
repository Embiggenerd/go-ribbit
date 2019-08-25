import React from 'react';
import Button from '../Button';

const NextButton = props => {
  const { handleClick } = props;
  return (
    <Button btnCls={'button_next'} handleClick={handleClick} text={'Next'} />
  );
};

export default NextButton