var assert = require("assert");
var out = require("../src/task13");
describe("ASSESSMENT 18 #start_test", function() {
  it("Should return [-1,0,1,2,3,4]", function() {
    assert.deepEqual(out(-1, 6), [-1, 0, 1, 2, 3, 4]);
  });
  it("Should return [4,5,6,7,8]", function() {
    assert.deepEqual(out(4, 5), [4, 5, 6, 7, 8]);
  });
  it("Should return [0,1]", function() {
    assert.deepEqual(out(0, 2), [0, 1]);
  });
  it("Should return [90,91,92]", function() {
    assert.deepEqual(out(90, 3), [90, 91, 92]);
  });
  it("Should return [1,2,3,4,5,6] #end_test", function() {
    assert.deepEqual(out(1, 3), [1, 2, 3]);
  });
});
