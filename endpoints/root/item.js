const config = require("../../config");
const { isValidSize } = require("./logo");

module.exports = function parseItem(item) {
  // Requirement 3: The thumbnail is a url selected from the payload item's list
  // of logos no larger than 128x128 but no smaller than 64x64.
  const chosenLogo = item.logos.find(logo => isValidSize(logo, config.logo));

  return {
    // Requirement 1: Where name and count match their respective properties from
    // the payload
    name: item.name,
    count: item.count,

    thumbnail: chosenLogo ? chosenLogo.url : null
  };
};
