var assert = require("assert");
var out = require("../src/task17");
describe("ASSESSMENT 17 #start_test", function() {
  it("Should return [1,2,3,4]", function() {
    assert.deepEqual(out([1, 2, 3, 4, 5], 5), [1, 2, 3, 4]);
  });
  it("Should return 'false'", function() {
    assert.deepEqual(out([2, 3, 4, 5, 6], 9), false);
  });
  it("Should return [3,5,7]", function() {
    assert.deepEqual(out([3, 5, 7, 9], 9), [3, 5, 7]);
  });
  it("Should return 'false'", function() {
    assert.deepEqual(out([90, 80, 70, 60], 10), false);
  });
  it("Should return false #end_test", function() {
    assert.deepEqual(out([50, 80, 90, 100, 110], 120), false);
  });
});
