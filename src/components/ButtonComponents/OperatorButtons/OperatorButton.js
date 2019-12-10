import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <p style={{margin: '40px', fontSize: '1.5rem', cursor: 'pointer'}} >{ props.operator.char }</p>
    </>
  );
};

export default OperatorButton