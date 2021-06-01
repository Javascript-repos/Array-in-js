var assert = require("assert");
var assesment = require("../src/task08");
describe("Array8 #start_test", function() {
  it("sum of squares", function() {
    assert.deepEqual(assesment([0, 1, 2, 3]), [6, 0]);
  });
  it("sum of squares", function() {
    assert.deepEqual(assesment([10, 1, 2, 3]), [16, 60]);
  });
  it("sum of squares", function() {
    assert.deepEqual(assesment([1, 2, 3, 7]), [13, 42]);
  });
  it("sum of squares with negative values", function() {
    assert.deepEqual(assesment([0, 1, 2, -3]), [0, 0]);
  });
  it("sum of squares #end_test", function() {
    assert.deepEqual(assesment([1, 2, 3, 1]), [7, 6]);
  });
});
