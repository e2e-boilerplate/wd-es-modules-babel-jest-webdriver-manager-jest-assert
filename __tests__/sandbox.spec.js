const wd = require("wd");
const config = require("../config");

const url = "https://e2e-boilerplate.github.io/sandbox/";

describe("Sandbox", () => {
  let browser;

  beforeEach(function fn() {
    browser = wd.promiseChainRemote();
    return config(url, browser);
  });

  afterEach(() => {
    return browser.quit();
  });

  it("should be on Sandbox", async () => {
    const title = await browser.title();
    expect(title).toEqual("Sandbox");
  });

  it("should have a page header", async () => {
    const header = await browser.elementByTagName("h1").text();
    expect(header).toEqual("Sandbox");
  });
});
