const Ajv = require("ajv");
const schema = require("./schema.json");

module.exports = function validate(data) {
  const validator = new Ajv();
  const valid = validator.validate(schema, data);

  if (!valid) {
    return validator.errors;
  }

  return null;
};
