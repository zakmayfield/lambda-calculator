import React from "react";

import Display from '../../DisplayComponents/Display';

const NumberButton = (props) => {
  return (
    <>
      <p className="number-button"
      // onClick={ props.addToDisplay }
      >{ props.number }</p>
    </>
  );
};

export default NumberButton
