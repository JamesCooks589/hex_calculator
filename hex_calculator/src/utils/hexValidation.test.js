import { isValidHex } from './hexValidation';

describe('Hex Input Validation', () => {  
    test('Rejects inputs longer than 2 digits', () => {  
      expect(isValidHex('ABC')).toBe(false); // 3 digits → ❌  
    });  
  
    test('Accepts valid 2-digit hex', () => {  
      expect(isValidHex('1F')).toBe(true); // ✅  
    });  
  });  