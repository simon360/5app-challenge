const parsePayload = require("../payload");
const parseItem = require("../item");

// For this test, swap out parseItem for the identity function.
// We don't want to test parseItem's functionality by mistake.
jest.mock("../item", () => jest.fn(item => item));

describe("payload", () => {
  it("should map each filtered item through parseItem", () => {
    parsePayload([
      {
        count: 3
      },
      {
        count: 14
      },
      {
        count: 1
      }
    ]);

    // Two calls. Should not be called when count > 1
    expect(parseItem).toHaveBeenCalledTimes(2);
  });

  it("should remove items with counts <= 1", () => {
    expect(
      parsePayload([
        {
          count: 0
        },
        {
          count: -1
        },
        {
          count: 1
        },
        {
          count: 2
        }
      ])
    ).toMatchSnapshot();
  });
});
