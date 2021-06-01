const matrix = require("../src/task22");
const chai = require("chai");
const expect = chai.expect;

describe("ASSESSMENT 22 #start_test", () => {
  it("create a sorted array", () => {
    let output = matrix([2, 4, 7, 1, 3, 8, 9]);
    expect(output).to.deep.equal([1, 9, 2, 8, 3, 7, 4]);
  });

  it("create a sorted array", () => {
    let output = matrix([4, 8, 0, 2, 3, 1, 6, 7, 45, 44, 23, 54, 76, 12]);
    expect(output).to.deep.equal([
      0,
      76,
      1,
      54,
      2,
      45,
      3,
      44,
      4,
      23,
      6,
      12,
      7,
      8
    ]);
  });

  it("create a sorted array #end_test", () => {
    let output = matrix([12, 34, 45, 3, 12, 34, 122, 888, 675, 34]);
    expect(output).to.deep.equal([3, 888, 12, 675, 12, 122, 34, 45, 34, 34]);
  });
});
