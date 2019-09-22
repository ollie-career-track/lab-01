
/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
const isString = input => {
  return typeof input === 'string';
};

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
const isNumber = input => {
  return isNaN(input) ? false : typeof input === 'number';
};

/**
 * Is this an array?
 * @param input
 * @returns {boolean}
 */
const isArray = input => {
  return input instanceof Array;
};

/**
 * Is this an object?
 * @param input
 * @returns {boolean}
 */
const isObject = input => {
  return isArray(input) ? false : typeof input === 'object';
};

/**
 * Is this a boolean?
 * @param input
 * @returns {boolean}
 */
const isBoolean = input => {
  return typeof input === 'boolean';
};

/**
 * Is this a function?
 * @param input
 * @returns {boolean}
 */
const isFunction = input => {
  return typeof input === 'function';
};

/**
 * Is this an array of strings?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfStrings = (input) => {
  return input.every(isString);
};

/**
 * Is this an array of numbers?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfNumbers = (input) => {
  return input.every(isNumber);
};

/**
 * Is this an array of objects?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfObjects = (input) => {
  return input.every(isObject);
};

/**
 * Is this an array of booleans?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfBooleans = (input) => {
  return input.every(isBoolean);
};

/**
 * Based on a set of rules, what is correct validator?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param rules
 * @returns {boolean}
 */
const getValidator = (rules) => {
  const validator = {
    string: isString,
    number: isNumber,
    array: isArray,
    object: isObject,
    boolean: isBoolean,
    function: isFunction,
    arrayOfStrings: isArrayOfStrings,
    arrayOfNumbers: isArrayOfNumbers,
    arrayOfObjects: isArrayOfObjects,
    arrayOfBooleans: isArrayOfBooleans
  };
  return validator[rules];
};

class TypeError extends Error {
  constructor(inputType, casterType) {
    super(`Cannot coerce ${inputType} to type ${casterType}.`);
    this.inputType = inputType;
    this.casterType = casterType;
  }
}

const stringCastor = (input) => {
  if(isString(input)) {
    return input;
  }
  else if(isNumber(input)) {
    return String(input);
  }
  else if(isBoolean(input)) {
    return String(input);
  }
  else {
    throw new TypeError(input, 'string');
  }
};

const numberCastor = (input) => {
  if(isNumber(input)) {
    return input;
  }
  if(isString(input)) {
    if(isNumber(Number(input))) {
      return Number(input);
    }
    else {
      throw new TypeError(input, 'number');
    }
  }
  else {
    throw new TypeError(input, 'number');
  }
};

const booleanCastor = (input) => {
  if(isBoolean(input)) {
    return input;
  }
  if(isString(input)) {
    if(input === 'true' || input === 'false') {
      return input === 'true' ? true : false;
    }
    else {
      throw new TypeError(input, 'boolean');
    }
  }
  else if(isNumber(Number(input))) {
    if(Number(input) === 1 || Number(input) === 0) {
      return Number(input) === 1 ? true : false;
    }
    else {
      throw new TypeError(input, 'boolean');
    }
  }
  else {
    throw new TypeError(input, 'boolean');
  }
};

module.exports = {
  isString,
  isNumber,
  isArray,
  isObject,
  isBoolean,
  isFunction,

  isArrayOfStrings,
  isArrayOfNumbers,
  isArrayOfObjects,
  isArrayOfBooleans,

  getValidator,

  stringCastor,
  numberCastor,
  booleanCastor
};

// instanceof typeof