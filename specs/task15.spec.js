var assert = require("assert");
var out = require("../src/task15");
describe("ASSESSMENT 15 #start_test", function() {
  it("Should return 7", function() {
    assert.deepEqual(out([1, 2, 3, 4, 5, 6, 7], 0), 7);
  });
  it("Should return 7", function() {
    assert.deepEqual(out([4, 5, 6, 2, 3, 7], 0), 7);
  });
  it("Should return 8", function() {
    assert.deepEqual(out([3, 5, 7, 8, 9], 1), 8);
  });
  it("Should return 80", function() {
    assert.deepEqual(out([90, 80, 100], 2), 80);
  });
  it("Should return 1 #end_test", function() {
    assert.deepEqual(out([1, 2, 3, 4, 5, 6], 5), 1);
  });
});
