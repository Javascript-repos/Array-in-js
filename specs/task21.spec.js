const chai = require("chai");
const expect = chai.expect;
const ex1 = require("../src/task21");

describe("ASSESSMENT 21 #start_test", () => {
  it("should find number and return true or false", () => {
    let output = ex1([1, 2, 3, 4], 1, 0, 4);
    expect(output).to.equal(true);
  });
  it("should find number and return true or false", () => {
    let output = ex1([1, 2, 3, 4, 5], 6, 0, 4);
    expect(output).to.equal(false);
  });
  it("should find number and return true or false #end_test", () => {
    let output = ex1([1, 2, 3, 4], 2, 0, 4);
    expect(output).to.equal(true);
  });
});
