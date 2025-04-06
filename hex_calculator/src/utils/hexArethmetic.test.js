import { addHex, subtractHex } from './hexArithmetic';

describe('Hex Addition', () => {  
    test('Adds 1A + B = 25 (26 + 11 = 37)', () => {  
      expect(addHex('1A', 'B')).toBe('25');  
    });  
  
    test('Prevents negative results', () => {  
      expect(() => subtractHex('A', 'B')).toThrow('No negatives allowed!');  
    });
    
    
  });  