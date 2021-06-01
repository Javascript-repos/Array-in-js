var assert = require("assert");
var out = require("../src/task19");
describe("ASSESSMENT 19", function() {
  it("Should return [1,2,3,6] #start_test", function() {
    assert.deepEqual(out([1, 2, 3, 4, 5, 6, 7], 13), [5, 6]);
  });
  it("Should return [2,3,4,5,6]", function() {
    assert.deepEqual(out([4, 5, 6, 2, 3, 4], 5), [3, 4]);
  });
  it("Should return [3,5,7,8]", function() {
    assert.deepEqual(out([3, 5, 7, 8, 9], 15), [2, 3]);
  });
  it("Should return [90,80,50]", function() {
    assert.deepEqual(out([90, 80, 100], 180), [1, 2]);
  });
  it("Should return [1,2,3,4,5,6] #end_test", function() {
    assert.deepEqual(out([1, 2, 3, 4, 5, 6], 11), [4, 5]);
  });
});
