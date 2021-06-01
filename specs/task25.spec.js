const chai = require("chai");
const expect = chai.expect;
const ex1 = require("../src/task25");

describe("DFS #start_test", () => {
  it("should traverse", () => {
    let output = ex1(
      [[0, 1, 0, 0], [0, 1, 1, 1], [1, 0, 0, 1], [0, 0, 1, 0]],
      4,
      3
    );
    expect(output[0]).to.equal(3);
  });
  it("should traverse", () => {
    let output = ex1(
      [[0, 1, 0, 0], [0, 1, 1, 1], [1, 0, 0, 1], [0, 0, 1, 0]],
      4,
      3
    );
    expect(output.slice(1, 4)).to.deep.not.equal([1, 0, 2]);
  });
  it("should traverse", () => {
    let output = ex1(
      [[0, 1, 0, 0], [0, 1, 1, 1], [1, 0, 0, 1], [0, 0, 1, 0]],
      4,
      3
    );
    expect(output.slice(1, 4)).to.deep.not.equal([0, 2, 1]);
  });
  it("should traverse", () => {
    let output = ex1(
      [[0, 1, 0, 0], [0, 1, 1, 1], [1, 0, 0, 1], [0, 0, 1, 0]],
      4,
      3
    );
    expect(output.slice(1, 4)).to.deep.not.equal([0, 1, 2]);
  });
  it("should traverse", () => {
    let output = ex1(
      [[0, 1, 0, 0], [0, 1, 1, 1], [1, 0, 0, 1], [0, 0, 1, 0]],
      4,
      1
    );
    expect(output[0]).to.equal(1);
  });
  it("should traverse", () => {
    let output = ex1(
      [[0, 1, 0, 0], [0, 1, 1, 1], [1, 0, 0, 1], [0, 0, 1, 0]],
      4,
      1
    );
    expect(output.slice(1, 4)).to.deep.not.equal([2, 3, 0]);
  });
  it("should traverse", () => {
    let output = ex1(
      [[0, 1, 0, 0], [0, 1, 1, 1], [1, 0, 0, 1], [0, 0, 1, 0]],
      4,
      1
    );
    expect(output.slice(1, 4)).to.deep.not.equal([3, 0, 2]);
  });
  it("should traverse", () => {
    let output = ex1(
      [[0, 1, 0, 0], [0, 1, 1, 1], [1, 0, 0, 1], [0, 0, 1, 0]],
      4,
      1
    );
    expect(output.slice(1, 4)).to.deep.not.equal([0, 3, 2]);
  });
  it("should traverse #end_test", () => {
    let output = ex1(
      [[0, 1, 0, 0], [0, 1, 1, 1], [1, 0, 0, 1], [0, 0, 1, 0]],
      4,
      1
    );
    expect(output.slice(1, 4)).to.deep.not.equal([0, 2, 3]);
  });
});
