const matrix = require("../src/task26");
const chai = require("chai");
const expect = chai.expect;

describe("ASSESSMENT 26 #start_test", () => {
  it("multipy two matrices", () => {
    let output = matrix(
      [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4]],
      [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4]],
      4
    );
    expect(output).to.deep.equal([
      [10, 10, 10, 10],
      [20, 20, 20, 20],
      [30, 30, 30, 30],
      [40, 40, 40, 40]
    ]);
  });
  it("multipy two matrices", () => {
    let output = matrix(
      [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [5, 5, 5, 5]],
      [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [5, 5, 5, 5]],
      4
    );
    expect(output).to.deep.equal([
      [11, 11, 11, 11],
      [22, 22, 22, 22],
      [33, 33, 33, 33],
      [55, 55, 55, 55]
    ]);
  });
  it("multipy two matrices #end_test", () => {
    let output = matrix(
      [[1, 2, 1, 5], [1, 6, 2, 5], [2, 9, 11, 32], [1, 0, 0, 4]],
      [[1, 1, 1, 1], [2, 5, 0, 1], [3, 3, 3, 3], [44, 4, 6, 5]],
      4
    );
    expect(output).to.deep.equal([
      [228, 34, 34, 31],
      [239, 57, 37, 38],
      [1461, 208, 227, 204],
      [177, 17, 25, 21]
    ]);
  });
});
