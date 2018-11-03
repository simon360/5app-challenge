const parseItem = require("./item");

module.exports = function transformPayload(payload) {
  // Requirement 2: The payload is filtered, so only items with a count
  // greater than 1 are returned.
  const filteredByCount = payload.filter(item => item.count > 1);

  return filteredByCount.map(parseItem);
};
