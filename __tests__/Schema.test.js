// What are my imports?

const validator = require('../lib/validator.js');
const Schema = require('../lib/Schema');

describe('Schema module', () => {

  describe('Schema class', () => {
    const personSchema = {
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      hair: {
        type: Object,
        required: true
      },
      favoriteFoods: {
        type: Array,
        required: true
      },
      married: {
        type: Boolean,
        required: true
      },
      kids: {
        type: Number,
        required: true
      }
    };

    const schema = new Schema(personSchema);

    it('validates a correct model', () => {
      const person = {
        firstName: 'Tessa',
        lastName: 'Test',
        hair: {
          type: 'fluffy',
          color: 'pastel'
        },
        favoriteFoods: [
          'biscuits',
          'grapes',
          'burritos'
        ],
        married: true,
        kids: 4
      };

      const data = schema.validate(person);

      expect(data).toEqual(person);
    });

    it.skip('removes extra fields', () => {
      // person obj with extra data
      // create data with schema.validate
      // assert data is equal to person?
    });
  });
  
  describe.skip('validate method on Schema class', () => {
    // object.entries?
    // array.every?
    // uses getCastor
  
    // calls correct castor for each schema field
    // stores returned value to new object
    // returns the object
  });
  
  describe.skip('castor functions', () => {

    const str = 'yes';
    const bool = true;
    const num = 8;
    const date = new Date;

    it('returns input if correct type', () => {
      expect(validator.stringCastor(str)).toBeTruthy();
      expect(validator.booleanCastor(bool)).toBeTruthy();
      expect(validator.numberCastor(num)).toBeTruthy();
      expect(validator.dateCastor(date)).toBeTruthy();
    });

    it('coerces type if applicable', () => {

    });

    it(`throws an error if type can't be coerced`, () => {

    });
  });
});