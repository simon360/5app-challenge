const parsePayload = require("./payload");
const validate = require("./validate");

module.exports = payload => {
  const validation = validate(payload);

  if (validation) {
    return {
      errors: validation
    };
  }

  return {
    response: parsePayload(payload.payload)
  };
};
