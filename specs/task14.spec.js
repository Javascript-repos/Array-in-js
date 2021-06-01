var assert = require("assert");
var out = require("../src/task14");
describe("ASSESSMENT 14 #start_test", function() {
  it("Should return [30,20,10,40,50]", function() {
    assert.deepEqual(out([10, 20, 30, 40, 50], 0, 2), [20, 30, 10, 40, 50]);
  });
  it("Should return [30,40,50,20,60]", function() {
    assert.deepEqual(out([20, 30, 40, 50, 60], 0, 3), [30, 40, 50, 20, 60]);
  });
  it("Should return [50,70,90,30]", function() {
    assert.deepEqual(out([30, 50, 70, 90], 0, 3), [50, 70, 90, 30]);
  });
  it("Should return [80,90,70,60]", function() {
    assert.deepEqual(out([90, 80, 70, 60], 0, 1), [80, 90, 70, 60]);
  });
  it("Should return [80,90,100,50,110] #end_test", function() {
    assert.deepEqual(out([50, 80, 90, 100, 110], 0, 3), [80, 90, 100, 50, 110]);
  });
});
