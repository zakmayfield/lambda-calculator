import React, {useState} from "react";

import NumberButton from './NumberButton';

import Display from '../../DisplayComponents/Display';

import { numbers as numberData } from '../../../data';


const Numbers = (props) => {
  const [numbers, setNumbers] = useState(numberData);

  // const addToDisplay = () => {
  //   props.setDisplay(props.number);
  // }
  
  return (
    <div className="number-container" style={{/* display: 'flex', flexFlow: 'row wrap', width: '75%' */}} >

       {numbers.map((num, index) => (
           <NumberButton 
            number={num}
            key={index}
            // addToDisplay = { addToDisplay }
          />
       ))}

    </div>
  );
};

export default Numbers