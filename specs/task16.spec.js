var assert = require("assert");
var out = require("../src/task16");
describe("ASSESSMENT 16 #start_test", function() {
  it("Should return 'true'", function() {
    assert.deepEqual(out([1, 2, 3, 4, 5], 5), true);
  });
  it("Should return 'false'", function() {
    assert.deepEqual(out([2, 3, 4, 5, 6], 9), false);
  });
  it("Should return 'true'", function() {
    assert.deepEqual(out([3, 5, 7, 9], 9), true);
  });
  it("Should return 'false'", function() {
    assert.deepEqual(out([90, 80, 70, 60], 10), false);
  });
  it("Should return true #end_test", function() {
    assert.deepEqual(out([50, 80, 90, 100, 110], 110), true);
  });
});
