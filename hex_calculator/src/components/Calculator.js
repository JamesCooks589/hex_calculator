import React, { useState } from 'react';
import { 
  addHex
} from '../utils/hexArithmetic';
import { isValidHex } from '../utils/hexValidation';
import '../styles/calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('00');
  const [firstOperand, setFirstOperand] = useState('');
  const [operator, setOperator] = useState('');
  const [secondOperand, setSecondOperand] = useState('00');

  const hexButtons = [
    '7', '8', '9', 'divide',
    '4', '5', '6', 'multiply',
    '1', '2', '3', 'subtract',
    '0', 'A', 'B', 'plus',
    'C', 'D', 'E', 'equals',
    'F', 'clear'
  ];

  const handleNumberInput = (value) => {
    if (!operator) {
      // First operand input
      const newValue = (firstOperand + value).slice(-2);
      setFirstOperand(newValue.padStart(2, '0'));
      setDisplay(newValue.padStart(2, '0'));
    } else {
      // Second operand input
      const newValue = (secondOperand + value).slice(-2);
      setSecondOperand(newValue.padStart(2, '0'));
      setDisplay(`${firstOperand} ${operator} ${newValue.padStart(2, '0')}`);
    }
  };

  const handleOperator = (op) => {
    if (!firstOperand) return;
    const operatorSymbol = {
      plus: '+'
    }[op];
    
    setOperator(operatorSymbol);
    setSecondOperand('00');
    setDisplay(`${firstOperand.padStart(2, '0')} ${operatorSymbol} 00`);
  };

  const performCalculation = () => {
    if (!operator || !secondOperand) return;

    try {
      let result;
      switch(operator) {
        case '+':
          result = addHex(firstOperand, secondOperand);
          break;
        default:
          return;
      }

      setDisplay(result.padStart(4, '0'));
      setFirstOperand(result);
      setOperator('');
      setSecondOperand('00');
    } catch (error) {
      console.error('Calculation error:', error);
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('00');
    setFirstOperand('');
    setOperator('');
    setSecondOperand('00');
  };

  const handleButtonClick = (value) => {
    switch (value) {
      case 'clear':
        handleClear();
        break;
      case 'equals':
        performCalculation();
        break;
      case 'plus':
        handleOperator(value);
        break;
      default:
        if (isValidHex(value)) handleNumberInput(value);
    }
  };

  return (
    <div className="calculator-container" data-cy="calculator">
      <div className="calculator">
        <div className="display" data-cy="display">
          {display}
        </div>

        <div className="button-grid">
          {hexButtons.map((btn) => (
            <button
              key={btn}
              className={`button ${btn === 'clear' ? 'clear-button' : ''} ${btn === 'equals' ? 'equals-button' : ''}`}
              onClick={() => handleButtonClick(btn)}
              data-cy={`button-${btn}`}
            >
              {btn === 'plus' ? '+' : btn === 'subtract' ? '−' : 
               btn === 'multiply' ? '×' : btn === 'divide' ? '÷' : 
               btn === 'equals' ? '=' : btn === 'clear' ? 'CLR' : btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;