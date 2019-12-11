import React, {useState} from "react";

import SpecialButton from './SpecialButton';

import { specials as specialsData } from '../../../data';

const Specials = (props) => {
  const [specials, setSpecials] = useState(specialsData);

  return (
    <div className="special-container">

       {specials.map((spec, index) => (
        <SpecialButton 
          special={spec}
          key={index}
          setDisplay={props.setDisplay}
          displayNum={props.displayNum}
        />
       ))}
    </div>
  );
};

export default Specials