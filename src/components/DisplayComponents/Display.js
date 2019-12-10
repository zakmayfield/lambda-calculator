import React, {useState} from "react";

const Display = (props) => {
  const [displayNum, setDisplay] = useState(0);

  return (
    <div className="display">
      <span>{displayNum}</span>
    </div>
  )
};

export default Display