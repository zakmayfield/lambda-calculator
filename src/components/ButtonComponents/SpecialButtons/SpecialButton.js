import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <p className="special-buttons"
          onClick={ () => { 
            props.setDisplay(props.displayNum + props.special);

            if(props.special === "C"){
              props.setDisplay('0');
            }

            if(props.special === '+/-'){
              props.setDisplay(-props.displayNum)
            }

          } } >{ props.special }</p>
    </>
  );
};

export default SpecialButton