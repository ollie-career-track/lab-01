/* import and use validators */

/**
 * Create a model schema
 * @param {object} schema - the schema to apply
 * tomodels
*/

/**
* Run validation on the supplied model 
* @param {object} model - the model to validate
* @throws {ModelError} throws if model does not conform to schema
* @returns {object} - validated data record
*/

const { ModelError } = require('./Errors');
const { getCaster } = require('./validator');

class Schema {
  constructor(schema) {
    this.schema = schema;
  }

  validate(model) {
    const data = {};
    const errors = [];

    
    
  }
}

module.exports = Schema;