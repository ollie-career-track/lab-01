const Schema = require('../lib/Schema');
const ModelError = require('../lib/Errors');

describe.skip('Schema', () => {

  const schema = new Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    married: {
      type: Boolean,
      required: false
    },
    kids: {
      type: Number,
      required: false
    }
  });

  it('validates a correct model', () => {
    const model = {
      firstName: 'Tia',
      lastName: 'Test',
      married: true,
      kids: 2
    };

    const result = schema.validate(model);

    expect(result).toEqual(model);
  });

  it('ignores properties not on schema', () => {
    const model = {
      firstName: 'Tia',
      lastName: 'Test',
      married: 1,
      kids: '2',
      uneeded: 'get rid of this'
    };

    const result = schema.validate(model);

    expect(result).toEqual(model);
  });

  it('empty fields are ommitted if missing', () => {
    const model = {
      firstName: 'Tia',
      lastName: 'Test',
    };

    const result = schema.validate(model);

    expect(Object.keys(result).length).toBe(1);
    expect(result).toEqual(model);
  });

  it('casts property values to correct type', () => {
    const model = {
      firstName: 'Tia',
      lastName: 'Test',
      married: 1,
      kids: '2'
    };

    const result = schema.validate(model);

    expect(result).toEqual({
      firstName: 'Tia',
      lastName: 'Test',
      married: true,
      kids: 2
    });
  });

  it('throws model error on missing required field', () => {
    const model = {};

    expect(() => {
      schema.validate(model);
    }).toThrow(ModelError);
  });

  it('throws error on uncastable type', () => {
    const model = {
      firstName: 'Tia',
      lastName: 'Test',
      married: 8,
      kids: true
    };

    expect(() => {
      schema.validate(model);
    }).toThrow(ModelError);
  });
});