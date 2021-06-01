var assert = require("assert");
var out = require("../src/task18");
describe("ASSESSMENT 18", function() {
  it("Should return [1,2,3,6] #start_test", function() {
    assert.deepEqual(out([1, 2, 3], [1, 2, 6]), [1, 2, 3, 6]);
  });
  it("Should return [2,3,4,5,6]", function() {
    assert.deepEqual(out([4, 5, 6], [2, 3, 4]), [4, 5, 6, 2, 3]);
  });
  it("Should return [3,5,7,8]", function() {
    assert.deepEqual(out([3, 5, 7], [3, 5, 8]), [3, 5, 7, 8]);
  });
  it("Should return [90,80,50]", function() {
    assert.deepEqual(out([90, 80, 50], [90, 80, 50]), [90, 80, 50]);
  });
  it("Should return [1,2,3,4,5,6] #end_test", function() {
    assert.deepEqual(out([1, 2, 3], [4, 5, 6]), [1, 2, 3, 4, 5, 6]);
  });
});
