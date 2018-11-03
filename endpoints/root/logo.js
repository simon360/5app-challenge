const format = /^([0-9]+)x([0-9]+)+$/;

module.exports = {
  isValidSize: (logo, { maxHeight, maxWidth, minHeight, minWidth }) => {
    const size = logo.size;
    const match = size.match(format);

    if (!match) {
      // Not expected that we'll reach this. It should be handled by
      // validate.js, but we'll throw here for debugging purposes.
      throw new Error("Expected logo size in format: ^[0-9]+x[0-9]+$");
    }

    const [_, heightString, widthString] = match;

    const height = parseFloat(heightString);
    const width = parseFloat(widthString);

    return !(
      height > maxHeight ||
      height < minHeight ||
      width > maxWidth ||
      width < minWidth
    );
  }
};
