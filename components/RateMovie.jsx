import React from "react";

export default function RateMovie({ onRateClick }) {
  return (
    <div>
      <button onClick={() => {onRateClick(1);}}>1</button>
      <button onClick={() => {onRateClick(2);}}>2</button>
      <button onClick={()=> {onRateClick(3);}}>3</button>
      <button onClick={()=> {onRateClick(4);}}>4</button>
      <button onClick={()=> {onRateClick(5);}}>5</button>
    </div>
  );
}
