const matrix = require("../src/task23");
const chai = require("chai");
const expect = chai.expect;

describe("ASSESSMENT 23 #start_test", () => {
  it("create a sorted array", () => {
    let output = matrix([2, 4, 7, 1, 3, 8, 9], 23);
    expect(output).to.deep.equal([9, 8, 7, 4, 3, 2, 1]);
  });

  it("create a sorted array", () => {
    let output = matrix([4, 8, 0, 2, 3, 1, 6, 7, 45, 44, 23, 54, 76, 12], 34);
    expect(output).to.deep.equal([
      44,
      45,
      23,
      54,
      12,
      8,
      7,
      6,
      4,
      3,
      2,
      1,
      0,
      76
    ]);
  });

  it("create a sorted array #end_test", () => {
    let output = matrix([12, 34, 45, 3, 12, 34, 122, 888, 675, 34], 32);
    expect(output).to.deep.equal([34, 34, 34, 45, 12, 12, 3, 122, 675, 888]);
  });
});
