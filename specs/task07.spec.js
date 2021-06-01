var assert = require("assert");
var assesment = require("../src/task07");
describe("Array7 #start_test", function() {
  it("sum of squares", function() {
    assert.equal(assesment([0, 1, 2, 3]), 14);
  });
  it("sum of squares", function() {
    assert.equal(assesment([0, 1, 2, 3, 5]), 39);
  });

  it("sum of squares", function() {
    assert.equal(assesment([0, 1, 2]), 5);
  });

  it("sum of squares", function() {
    assert.equal(assesment([0, 1, 2, 3, 3]), 23);
  });
  it("sum of squares #end_test", function() {
    assert.equal(assesment([0]), 0);
  });
});
