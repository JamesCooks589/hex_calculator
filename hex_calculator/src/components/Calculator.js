// src/components/Calculator.js
import React, { useState } from 'react';
import { 
  addHex, 
  subtractHex, 
  multiplyHex, 
  divideHex
} from '../utils/hexArithmetic';
import { isValidHex } from '../utils/hexValidation';
import '../styles/Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0000');
  const [firstOperand, setFirstOperand] = useState('');
  const [operator, setOperator] = useState('');
  const [isNewNumber, setIsNewNumber] = useState(false); // Track if a new number is being entered

  const hexButtons = [
    '7', '8', '9', '÷',
    '4', '5', '6', '×',
    '1', '2', '3', '−',
    '0', 'A', 'B', '+',
    'C', 'D', 'E', '=',
    'F', 'CLR'
  ];

  const getCurrentValue = () => {
    return display.replace(/^0+/, '') || '0';
  };

  const handleNumberInput = (value) => {
    const currentValue = isNewNumber ? '' : getCurrentValue(); // Clear input if starting a new number
    setIsNewNumber(false); // Reset the flag

    // Limit input to 2 characters
    if (currentValue.length >= 2) return;

    const newValue = currentValue + value;
    setDisplay(newValue.padStart(4, '0'));
  };

  const handleOperator = (op) => {
    const currentValue = getCurrentValue();

    if (!isValidHex(currentValue)) return;

    setFirstOperand(currentValue);
    setOperator(op);
    setIsNewNumber(true); // Set flag to start a new number
    setDisplay(`${currentValue} ${op}`); // Show the operator in the display
  };

  const performCalculation = () => {
    if (!operator || !firstOperand) return;

    try {
      let result;
      const secondOperand = getCurrentValue();

      switch (operator) {
        case '+':
          result = addHex(firstOperand, secondOperand);
          break;
        case '−':
          result = subtractHex(firstOperand, secondOperand);
          break;
        case '×':
          result = multiplyHex(firstOperand, secondOperand);
          break;
        case '÷':
          result = divideHex(firstOperand, secondOperand);
          break;
        default:
          return;
      }

      setDisplay(result.padStart(4, '0'));
    } catch (error) {
      setDisplay('ERR ');
      setTimeout(() => setDisplay('0000'), 1500);
    }

    setOperator('');
    setFirstOperand('');
    setIsNewNumber(true); // Prepare for a new calculation
  };

  const handleClear = () => {
    setDisplay('0000');
    setFirstOperand('');
    setOperator('');
    setIsNewNumber(false);
  };

  const handleButtonClick = (value) => {
    switch (value) {
      case 'CLR':
        handleClear();
        break;
      case '=':
        performCalculation();
        break;
      case '+':
      case '−':
      case '×':
      case '÷':
        handleOperator(value);
        break;
      default:
        handleNumberInput(value);
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
              className={`button ${btn === 'CLR' ? 'clear-button' : ''} ${btn === '=' ? 'equals-button' : ''}`}
              onClick={() => handleButtonClick(btn)}
              data-cy={`button-${btn}`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;