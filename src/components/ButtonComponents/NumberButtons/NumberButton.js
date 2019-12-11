import React from "react";

import Display from '../../DisplayComponents/Display';

const NumberButton = (props) => {
  return (
    <>
      <p className="number-button" onClick={ () => { 
        console.log(`${props.number} clicked`);
        console.log(props.displayNum);
        props.setDisplay(props.displayNum + props.number)
       } }>{ props.number }</p>
    </>
  );
};

export default NumberButton
