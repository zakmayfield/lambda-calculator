import React, {useState} from "react";

import NumberButton from './NumberButton';

import Display from '../../DisplayComponents/Display';

import { numbers as numberData } from '../../../data';


const Numbers = (props) => {
  const [numbers, setNumbers] = useState(numberData);
  
  return (
    <div className="number-container">

       {numbers.map((num, index) => (
           <NumberButton 
            number={num}
            key={index}
            setDisplay={props.setDisplay}
            displayNum={props.displayNum}
          />
       ))}

    </div>
  );
};

export default Numbers