const { isValidSize } = require("../logo");

describe("logo", () => {
  describe("isValidSize", () => {
    const logoSizes = {
      maxHeight: 128,
      maxWidth: 128,
      minHeight: 64,
      minWidth: 64
    };

    const createLogo = (width, height) => ({ size: `${width}x${height}` });

    const testDimensions = (width, height, expected) =>
      expect(isValidSize(createLogo(width, height), logoSizes)).toBe(expected);

    it("should accept middle-of-range logo", () => {
      testDimensions(100, 100, true);
    });

    it("should accept width on boundary", () => {
      testDimensions(logoSizes.minWidth, 100, true);
      testDimensions(logoSizes.maxWidth, 100, true);
    });

    it("should reject width outside boundary", () => {
      testDimensions(logoSizes.minWidth - 1, 100, false);
      testDimensions(logoSizes.maxWidth + 1, 100, false);
    });

    it("should accept height on boundary", () => {
      testDimensions(100, logoSizes.minHeight, true);
      testDimensions(100, logoSizes.maxHeight, true);
    });

    it("should reject height outside boundary", () => {
      testDimensions(100, logoSizes.minHeight - 1, false);
      testDimensions(100, logoSizes.maxHeight + 1, false);
    });
  });
});
