var assert = require("assert");
var assesment = require("../src/task09");
describe("Array9 #start_test", function() {
  it("removing duplicate numbers", function() {
    assert.deepEqual(assesment([1, 2, 2, 4, 3, 4, 7, 8, 7, 5, 6]), [2, 4, 7]);
  });
  it("one more test", function() {
    assert.deepEqual(assesment([1, 2, 2, 4, 3, 4, 7, 8, 5, 6]), [2, 4]);
  });
  it("no duplicate numbers", function() {
    assert.deepEqual(assesment([1, 2, 4, 3, 8, 7, 5, 6]), []);
  });
  it("no duplicate numbers", function() {
    assert.deepEqual(assesment([1, 2, 4, 3, 8, 7, 5, 6, 6]), [6]);
  });
  it("no duplicate numbers #end_test", function() {
    assert.deepEqual(assesment([1, 2, 4, 3, 2, 8, 7, 4, 5, 6, 1, 6]), [
      1,
      2,
      4,
      6
    ]);
  });
});
