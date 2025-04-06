import { isValidHex } from './hexValidation';

// describe('Hex Input Validation', () => {
//   // Length checks
//   test('Rejects empty input', () => expect(isValidHex('')).toBe(false));
//   test('Accepts 1-digit input', () => expect(isValidHex('A')).toBe(true));
//   test('Accepts 2-digit input', () => expect(isValidHex('1F')).toBe(true));
//   test('Rejects 3-digit input', () => expect(isValidHex('ABC')).toBe(false));

//   // Character checks
//   test('Rejects non-hex characters (G)', () => expect(isValidHex('G1')).toBe(false));
//   test('Rejects symbols', () => expect(isValidHex('@2')).toBe(false));
//   test('Accepts lowercase letters', () => expect(isValidHex('a9')).toBe(true));

//   // Edge cases
//   test('Accepts min value (00)', () => expect(isValidHex('00')).toBe(true));
//   test('Accepts max value (FF)', () => expect(isValidHex('FF')).toBe(true));
// }); 