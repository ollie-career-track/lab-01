
class CastError extends Error {
  constructor(expectedType, providedValue) {
    super(`make up meaningful message`);
    this.expectedType = expectedType;
    this.providedValue = providedValue;
  }
}

class ModelError extends Error {
  constructor(errors) {
    super('This model has schema errors');
    this.errors = errors;
  }
}


module.exports = {
  CastError,
  ModelError
};