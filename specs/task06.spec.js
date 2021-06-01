var assert = require("assert");
var assesment = require("../src/task06");
describe("Array6 #start_test", function() {
  it("  sorting (decreasing)", function() {
    assert.deepEqual(assesment([1, 4, 3, -5]), [4, 3, 1, -5]);
  });

  it("decreasing way of sorting", function() {
    assert.deepEqual(assesment([1, 4, 3, 2]), [4, 3, 2, 1]);
  });

  it("sorting with some value as same", function() {
    assert.deepEqual(assesment([1, 4, 3, 5, 4]), [5, 4, 4, 3, 1]);
  });
  it("already sorted input", function() {
    assert.deepEqual(assesment([6, 5, 4, 3, 2, 1]), [6, 5, 4, 3, 2, 1]);
  });
  it("bigger input #end_test", function() {
    assert.deepEqual(assesment([4, 89, 12, 9, 66, 78, 82]), [
      89,
      82,
      78,
      66,
      12,
      9,
      4
    ]);
  });
});
