import style from './App.module.css';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClicked = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal(""); // Clear the calculator display
    } else if (buttonText === '=') {
      try {
        const result = Function(`"use strict"; return (${calVal})`)(); // Safely evaluate the expression
        setCalVal(result.toString());
      } catch {
        setCalVal("Error"); // Handle invalid expressions
      }
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={style.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClicked} />
    </div>
  );
}

export default App;
