var assert = require("assert");
var out = require("../src/task12");
describe("ASSESSMENT 12 #start_test", function() {
  it("Should return [3,5,7,9,11]", function() {
    assert.deepEqual(out([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]), [3, 5, 7, 9, 11]);
  });
  it("Should return [13,25,46,36,57]", function() {
    assert.deepEqual(out([11, 2, 3, 34, 56], [2, 23, 43, 2, 1]), [
      13,
      25,
      46,
      36,
      57
    ]);
  });
  it("Should return [12,5,5,5,7,10]", function() {
    assert.deepEqual(out([3, 1, 3, 4, 5, 7], [9, 4, 2, 1, 2, 3]), [
      12,
      5,
      5,
      5,
      7,
      10
    ]);
  });
  it("Should return [12,25,7,6,10,14]", function() {
    assert.deepEqual(out([11, 23, 4, 2, 5, 8], [1, 2, 3, 4, 5, 6]), [
      12,
      25,
      7,
      6,
      10,
      14
    ]);
  });
  it("Should return[15,25,7,6,10,16] #end_test", function() {
    assert.deepEqual(out([14, 23, 4, 2, 5, 8], [1, 2, 3, 4, 5, 8]), [
      15,
      25,
      7,
      6,
      10,
      16
    ]);
  });
});
