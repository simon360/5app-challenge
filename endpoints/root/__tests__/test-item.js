const parseItem = require("../item");
const { isValidSize } = require("../logo");

jest.mock("../logo", () => ({
  isValidSize: jest.fn(() => true)
}));

describe("item", () => {
  const createItem = () => ({
    count: 4,
    name: "test name",
    logos: []
  });

  it("should keep count and name properties", () => {
    const item = createItem();

    expect(parseItem(item).count).toBe(item.count);
    expect(parseItem(item).name).toBe(item.name);
  });

  it("should take the URL of first valid logo", () => {
    const item = createItem();

    item.logos = [
      {
        size: "test size",
        url: "test url"
      },
      {
        size: "don't use this",
        url: "don't use this"
      }
    ];

    expect(parseItem(item).thumbnail).toBe(item.logos[0].url);
  });

  it("should set thumbnail to null if none found", () => {
    const item = createItem();

    expect(parseItem(item).thumbnail).toBe(null);
  });
});
