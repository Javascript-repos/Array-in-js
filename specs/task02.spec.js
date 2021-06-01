var assert = require("assert");
var out = require("../src/task02");
describe("ASSESSMENT 2 #start_test", function() {
  it("Should return [3,4]", function() {
    assert.deepEqual(out([1, 2, 3, 4], 2), [3, 4]);
  });
  it("Should return [9,11,4]", function() {
    assert.deepEqual(out([5, 9, 11, 4], 3), [9, 11, 4]);
  });
  it("Should return [1111]", function() {
    assert.deepEqual(out([8, 2, 3, 4, 1111], 1), [1111]);
  });
  it("Should return [99,1]", function() {
    assert.deepEqual(out([99, 1], 2), [99, 1]);
  });
  it("Should return [105,106,107] #end_test", function() {
    assert.deepEqual(out([101, 102, 103, 104, 105, 106, 107], 3), [
      105,
      106,
      107
    ]);
  });
});
