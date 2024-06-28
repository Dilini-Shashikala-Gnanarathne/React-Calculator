import React, { useState } from 'react'
import Keywindows from './Keywindows.js';
import DisplayWindows from './DisplayWindows';
const Calculator = () => {

  const[expression, setExpressions] =useState("");
  const[desplayedex,setDesplayedex] = useState('');
  const[result,setResult] = useState(0);

  function handleButtonPress(){
    console.log(valuee);
  }
  return (
    <div>
       <DisplayWindows expression={desplayedex} result={result}/>
       <Keywindows  handleButtonPress={handleButtonPress}/> 
    </div>
  )
}

export default Calculator
