const root = require("../");

describe("End to end tests", () => {
  it("should match sample request to response", () => {
    const request = require("./samples/request.json");
    const response = require("./samples/response.json");

    expect(root(request)).toMatchObject(response);
  });

  it("should match error snapshot", () => {
    expect(
      root({
        payload: [{}]
      })
    ).toMatchSnapshot();
  });
});
