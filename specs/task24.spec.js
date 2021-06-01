const chai = require("chai");
const expect = chai.expect;
const ex1 = require("../src/task24");

describe("BFS #start_test", () => {
  it("should traverse", () => {
    let output = ex1(
      [[0, 1, 0, 0], [0, 1, 1, 1], [1, 0, 0, 1], [0, 0, 1, 0]],
      4,
      2
    );
    expect(output).to.deep.equal([2, 0, 3, 1]);
  });
  it("should traverse", () => {
    let output = ex1(
      [[0, 1, 0, 0], [0, 1, 1, 1], [1, 0, 0, 1], [0, 0, 1, 0]],
      4,
      1
    );
    expect(output[0]).to.equal(1);
  });
  it("should traverse #end_test", () => {
    let output = ex1(
      [[0, 1, 0, 0], [0, 1, 1, 1], [1, 0, 0, 1], [0, 0, 1, 0]],
      4,
      1
    );
    expect(output[3]).to.equal(0);
  });
});
