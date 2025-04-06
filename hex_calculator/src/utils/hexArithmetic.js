import { formatHexOutput } from "./hexFormat";


export const addHex = (hex1, hex2) => {
  const num1 = parseInt(hex1, 16);
  const num2 = parseInt(hex2, 16);
  const sum = num1 + num2;
  return formatHexOutput(sum.toString(16));
};
  
export const subtractHex = (hex1, hex2) => {
  const a = parseInt(hex1, 16);
  const b = parseInt(hex2, 16);
  if (b > a) throw new Error("Negative results not allowed!");
  return formatHexOutput((a - b).toString(16));
};


export const multiplyHex = (hex1, hex2) => {
  const num1 = parseInt(hex1, 16);
  const num2 = parseInt(hex2, 16);
  const product = (num1 * num2) % 0x10000; // Ensure 4-digit max
  return formatHexOutput(product.toString(16));
};

export const divideHex = (hex1, hex2) => {
  const num1 = parseInt(hex1, 16);
  const num2 = parseInt(hex2, 16);
  
  if (num2 === 0) throw new Error('Division by zero');
  
  const result = Math.floor(num1 / num2);
  return formatHexOutput(result.toString(16));
};