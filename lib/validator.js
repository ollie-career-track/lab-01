
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
  return typeof input === 'number';
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

// what are these castors taking?
  // they implement the is type functions
  // they take an input that is the value on the key of the object
  // an error message

const stringCastor = () => {

};
const booleanCastor = () => {

};
const numberCastor = () => {

};
const dateCastor = () => {

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
  booleanCastor,
  numberCastor,
  dateCastor
};

// change imports to include new stuff