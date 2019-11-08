const validator = require('../lib/validator.js');

describe('validator module', () => {
  
  const str = 'yes';
  const num = 1;
  const arr = ['a'];
  const obj = { x: 'y' };
  const func = () => {};
  const bool = false;

  describe('performs basic validation of', () => {

    it('strings', () => {
      expect(validator.isString(str)).toBeTruthy();
      expect(validator.isString(num)).toBeFalsy();
      expect(validator.isString(arr)).toBeFalsy();
      expect(validator.isString(obj)).toBeFalsy();
      expect(validator.isString(func)).toBeFalsy();
      expect(validator.isString(bool)).toBeFalsy();
    });
    
    it('numbers', () => {
      expect(validator.isNumber(str)).toBeFalsy();
      expect(validator.isNumber(num)).toBeTruthy();
      expect(validator.isNumber(arr)).toBeFalsy();
      expect(validator.isNumber(obj)).toBeFalsy();
      expect(validator.isNumber(func)).toBeFalsy();
      expect(validator.isNumber(bool)).toBeFalsy();
    });

    it('arrays', () => {
      expect(validator.isArray(str)).toBeFalsy();
      expect(validator.isArray(num)).toBeFalsy();
      expect(validator.isArray(arr)).toBeTruthy();
      expect(validator.isArray(obj)).toBeFalsy();
      expect(validator.isArray(func)).toBeFalsy();
      expect(validator.isArray(bool)).toBeFalsy();
    });

    it('objects', () => {
      expect(validator.isObject(str)).toBeFalsy();
      expect(validator.isObject(num)).toBeFalsy();
      expect(validator.isObject(arr)).toBeFalsy();
      expect(validator.isObject(obj)).toBeTruthy();
      expect(validator.isObject(func)).toBeFalsy();
      expect(validator.isObject(bool)).toBeFalsy();
    });

    it('booleans', () => {
      expect(validator.isBoolean(str)).toBeFalsy();
      expect(validator.isBoolean(num)).toBeFalsy();
      expect(validator.isBoolean(arr)).toBeFalsy();
      expect(validator.isBoolean(obj)).toBeFalsy();
      expect(validator.isBoolean(func)).toBeFalsy();
      expect(validator.isBoolean(bool)).toBeTruthy();
    });

    it('functions', () => {
      expect(validator.isFunction(str)).toBeFalsy();
      expect(validator.isFunction(num)).toBeFalsy();
      expect(validator.isFunction(arr)).toBeFalsy();
      expect(validator.isFunction(obj)).toBeFalsy();
      expect(validator.isFunction(func)).toBeTruthy();
      expect(validator.isFunction(bool)).toBeFalsy();
    });
  });

  describe('performs array validation of', () => {

    const arrayOfStrings = ['a', 'b', 'c'];
    const arrayOfNumbers = [1, 2, 3];
    const arrayOfObjects = [{}, {}, {}];
    const arrayOfBooleans = [true, false, true];

    it('strings', () => {
      expect(validator.isArrayOfStrings(arrayOfStrings)).toBeTruthy();
      expect(validator.isArrayOfStrings(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfStrings(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfStrings(arrayOfBooleans)).toBeFalsy();
    });

    it('numbers', () => {
      expect(validator.isArrayOfNumbers(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfNumbers(arrayOfNumbers)).toBeTruthy();
      expect(validator.isArrayOfNumbers(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfNumbers(arrayOfBooleans)).toBeFalsy();
    });

    it('objects', () => {
      expect(validator.isArrayOfObjects(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfObjects(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfObjects(arrayOfObjects)).toBeTruthy();
      expect(validator.isArrayOfObjects(arrayOfBooleans)).toBeFalsy();
    });

    it('booleans', () => {
      expect(validator.isArrayOfBooleans(arrayOfStrings)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfBooleans(arrayOfBooleans)).toBeTruthy();
    });
  });

  describe('get validator for', () => {

    it('strings', () => {
      // TODO: pass getValidator the rules
      expect(validator.getValidator('string')).toBe(validator.isString);
    });
    
    it('numbers', () => {
      expect(validator.getValidator('number')).toBe(validator.isNumber);
    });
    
    it('arrays', () => {
      expect(validator.getValidator('array')).toBe(validator.isArray);
    });
    
    it('objects', () => {
      expect(validator.getValidator('object')).toBe(validator.isObject);
    });
    
    it('booleans', () => {
      expect(validator.getValidator('boolean')).toBe(validator.isBoolean);
    });
    
    it('functions', () => {
      expect(validator.getValidator('function')).toBe(validator.isFunction);
    });
    
    it('array of strings', () => {
      expect(validator.getValidator('arrayOfStrings')).toBe(validator.isArrayOfStrings);
    });
    
    it('array of numbers', () => {
      expect(validator.getValidator('arrayOfNumbers')).toBe(validator.isArrayOfNumbers);  
    });
    
    it('array of objects', () => {
      expect(validator.getValidator('arrayOfObjects')).toBe(validator.isArrayOfObjects);  
    });
    
    it('array of booleans', () => {
      expect(validator.getValidator('arrayOfBooleans')).toBe(validator.isArrayOfBooleans);  
    });
  });

  describe('performs casting to', () => {
    describe('strings', () => {
      it('returns strings', () => {
        expect(validator.stringCastor(str)).toBe(str);
      });

      it('coerces numbers to strings', () => {
        expect(validator.stringCastor(num)).toBe('1');
      });

      it('coerces booleans to strings', () => {
        expect(validator.stringCastor(bool)).toBe('false');
      });

      it('throws error for objects', () => {
        expect(() => {
          validator.stringCastor(obj);
        }).toThrow(validator.typeError);
      });
      
      it('throws error for arrays', () => {
        expect(() => {
          validator.stringCastor(arr);
        }).toThrow(validator.typeError);
      });
    });
    
    describe('numbers', () => {
      const validStr = '8';

      it('returns numbers', () => {
        expect(validator.numberCastor(num)).toBe(num);
      });

      it('coerces valid strings to numbers', () => {
        expect(validator.numberCastor(validStr)).toBe(8);
      });
      
      it('throws error for invalid strings', () => {
        expect(() => {
          validator.numberCastor(str);
        }).toThrow(validator.typeError);
      });
      
      it('throws error for booleans', () => {
        expect(() => {
          validator.numberCastor(bool);
        }).toThrow(validator.typeError);
      });
      
      it('throws error for objects', () => {
        expect(() => {
          validator.numberCastor(obj);
        }).toThrow(validator.typeError);
      });
      
      it('throws error for arrays', () => {
        expect(() => {
          validator.numberCastor(arr);
        }).toThrow(validator.typeError);
      });
    });
    
    describe('booleans', () => {
      const validStr = 'true';
      const invalidNumber = 88;

      it('returns booleans', () => {
        expect(validator.booleanCastor(bool)).toBe(bool);
      });
      
      it('coerces valid strings to booleans', () => {
        expect(validator.booleanCastor(validStr)).toBe(true);
      });
      
      it('throws error for invalid strings', () => {
        expect(() => {
          validator.booleanCastor(str);
        }).toThrow(validator.typeError);
      });
      
      it('coerces valid numbers to booleans', () => {
        expect(validator.booleanCastor(num)).toBe(true);
      });
      
      it('throws error for invalid numbers', () => {
        expect(() => {
          validator.booleanCastor(invalidNumber);
        }).toThrow(validator.typeError);
      });
      
      it('throws error for objects', () => {
        expect(() => {
          validator.booleanCastor(obj);
        }).toThrow(validator.typeError);
      });
      
      it('throws error for arrays', () => {
        expect(() => {
          validator.booleanCastor(arr);
        }).toThrow(validator.typeError);
      }); 
    });
  });
});