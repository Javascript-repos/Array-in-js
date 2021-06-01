var assert = require("assert");
var assesment = require("../src/task05");
describe("Array5 #start_test", function() {
  it(" after sorting", function() {
    assert.deepEqual(assesment([1, 4, 3, 4]), [1, 3, 4, 4]);
  });
  it(" value after sorting", function() {
    assert.deepEqual(assesment([1, 4, 3, 5]), [1, 3, 4, 5]);
  });
  it(" value after sorting", function() {
    assert.deepEqual(assesment([1, 4, 3, 5, 4]), [1, 3, 4, 4, 5]);
  });
  it("already sorted input", function() {
    assert.deepEqual(assesment([1, 2, 4, 5, 6]), [1, 2, 4, 5, 6]);
  });
  it("bigger input #end_test", function() {
    assert.deepEqual(assesment([4, 89, 12, 9, 66, 78, 82]), [
      4,
      9,
      12,
      66,
      78,
      82,
      89
    ]);
  });
});
