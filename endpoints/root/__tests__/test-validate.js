const validate = require("../validate");

const getSample = () => require("./samples/request.json");

const createItem = () => ({ name: "test item", count: 4, logos: [] });
const createLogo = () => ({ url: "http://www.example.com/", size: "16x16" });

describe("validate()", () => {
  it("should succeed on provided sample", () => {
    expect(validate(getSample())).toMatchSnapshot();
  });

  it("should succeed using generated sample", () => {
    expect(validate({ payload: [createItem()] })).toMatchSnapshot();
  });

  it("should fail on missing payload", () => {
    expect(validate({})).toMatchSnapshot();
  });

  it("should fail on missing item name", () => {
    const item = createItem();

    delete item.name;

    expect(validate({ payload: [item] })).toMatchSnapshot();
  });

  it("should fail when item name is not a string", () => {
    const item = createItem();

    item.name = 152;

    expect(validate({ payload: [item] })).toMatchSnapshot();
  });

  it("should fail on missing item count", () => {
    const item = createItem();

    delete item.count;

    expect(validate({ payload: [item] })).toMatchSnapshot();
  });

  it("should fail when count is not a number", () => {
    const item = createItem();

    item.count = "4";

    expect(validate({ payload: [item] })).toMatchSnapshot();
  });

  it("should fail with missing logos", () => {
    const item = createItem();

    delete item.logos;

    expect(validate({ payload: [item] })).toMatchSnapshot();
  });

  it("should fail with non-array logos", () => {
    const item = createItem();

    item.logos = "test";

    expect(validate({ payload: [item] })).toMatchSnapshot();
  });

  it("should succeed with valid logo specified", () => {
    const item = createItem();
    const logo = createLogo();

    item.logos = [logo];

    expect(validate({ payload: [item] })).toMatchSnapshot();
  });

  it("should fail when logo url is missing", () => {
    const item = createItem();
    const logo = createLogo();

    delete logo.url;

    item.logos = [logo];

    expect(validate({ payload: [item] })).toMatchSnapshot();
  });

  it("should fail when logo url is not a string", () => {
    const item = createItem();
    const logo = createLogo();

    logo.url = 1412;

    item.logos = [logo];

    expect(validate({ payload: [item] })).toMatchSnapshot();
  });

  it("should fail when logo size is missing", () => {
    const item = createItem();
    const logo = createLogo();

    delete logo.size;

    item.logos = [logo];

    expect(validate({ payload: [item] })).toMatchSnapshot();
  });

  it("should fail when logo size is not a string", () => {
    const item = createItem();
    const logo = createLogo();

    logo.size = 16;

    item.logos = [logo];

    expect(validate({ payload: [item] })).toMatchSnapshot();
  });

  it("should fail when logo size does not match expected format", () => {
    const item = createItem();
    const logo = createLogo();

    logo.size = "not a size";

    item.logos = [logo];

    expect(validate({ payload: [item] })).toMatchSnapshot();
  });
});
