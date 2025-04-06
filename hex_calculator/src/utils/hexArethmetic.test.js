import { addHex, subtractHex, multiplyHex, divideHex } from './hexArithmetic';

// ---- Addition ----
describe('Hex Addition', () => {
  test('Adds 1A + B = 25', () => expect(addHex('1A', 'B')).toBe('0025')); // 26 + 11 = 37 (0x25)
  test('Adds FF + 1 = 100', () => expect(addHex('FF', '1')).toBe('0100')); // 255 + 1 = 256 (0x100)
  test('Truncates to 4 digits (FFFF + 2 = 0001)', () => expect(addHex('FFFF', '2')).toBe('0001')); // Overflow
});

// ---- Subtraction ----
describe('Hex Subtraction', () => {
  test('Subtracts A - 1 = 9', () => expect(subtractHex('A', '1')).toBe('0009')); // 10 - 1 = 9
  test('Throws error for negative results', () => {
    expect(() => subtractHex('5', 'A')).toThrow('Negative results not allowed');
  });
  test('Subtracts FF - FE = 1', () => expect(subtractHex('FF', 'FE')).toBe('0001'));
});

// ---- Multiplication ----
describe('Hex Multiplication', () => {
  test('Multiplies 2 * 3 = 6', () => expect(multiplyHex('2', '3')).toBe('0006'));
  test('Multiplies FF * 2 = 1FE', () => expect(multiplyHex('FF', '2')).toBe('01FE')); // 255 * 2 = 510 (0x1FE)
  test('Truncates to 4 digits (FFFE * 10 = FFE0)', () => expect(multiplyHex('FFFE', '10')).toBe('FFE0'));
});

// ---- Division ----
describe('Hex Division', () => {
  test('Divides 1E / 5 = 6', () => expect(divideHex('1E', '5')).toBe('0006')); // 30 / 5 = 6
  test('Performs integer division (B / 2 = 5)', () => expect(divideHex('B', '2')).toBe('0005')); // 11 / 2 = 5.5 → 5
  test('Throws error for division by zero', () => {
    expect(() => divideHex('A', '0')).toThrow('Division by zero');
  });
});  