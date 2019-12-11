import React, {useState} from "react";

import OperatorButton from './OperatorButton';

import { operators as operatorData } from '../../../data';

const Operators = (props) => {
  const [operations, setOperations] = useState(operatorData);

  return (
    <div style={{display: 'flex', flexFlow: 'row wrap', width: '100%'}} >
       {operations.map((op, index) =>  (
          <OperatorButton 
            operator={op}
            key={index}
            setDisplay={props.setDisplay}
            displayNum={props.displayNum}
          />
        )
       )}
    </div>
  );
};

export default Operators
