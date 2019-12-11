import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <p 
        style={{margin: '40px', fontSize: '1.5rem', cursor: 'pointer'}}
        onClick={ () => {
          props.setDisplay(props.displayNum + props.operator.value)

          if(props.operator.char === "="){
            props.setDisplay(eval(props.displayNum))
          }

        } }>{ props.operator.char }</p>
    </>
  );
};

export default OperatorButton