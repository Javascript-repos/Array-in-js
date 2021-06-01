var assert = require("assert");
var out = require("../src/task01");
describe("ASSESSMENT 1 #start_test", function() {
  it("Should return [1,2]", function() {
    assert.deepEqual(out([1, 2, 3, 4], 2), [1, 2]);
  });
  it("Should return [5,9,11]", function() {
    assert.deepEqual(out([5, 9, 11, 4], 3), [5, 9, 11]);
  });
  it("Should return [8]", function() {
    assert.deepEqual(out([8, 2, 3, 4, 1111], 1), [8]);
  });
  it("Should return [99,1]", function() {
    assert.deepEqual(out([99, 1], 2), [99, 1]);
  });
  it("Should return [101,102,103] #end_test #end_test", function() {
    assert.deepEqual(out([101, 102, 103, 104, 105, 106, 107], 3), [
      101,
      102,
      103
    ]);
  });
});
