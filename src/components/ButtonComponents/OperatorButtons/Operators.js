import React, {useState} from "react";

import OperatorButton from './OperatorButton';

import { operators as operatorData } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operations, setOperations] = useState(operatorData);

  return (
    <div style={{display: 'flex', flexFlow: 'row wrap', width: '100%'}} >
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operations.map((op, index) =>  (
          <OperatorButton 
            operator={op}
            key={index}
          />
        )
       )}
    </div>
  );
};

export default Operators
