var assert = require("assert");
var assesment = require("../src/task04");
describe("ASSESSMENT 4 #start_test", function() {
  it("it should give 'a' as max duplicate", function() {
    assert.deepEqual(assesment([1, 2, "a", "e", 3, "a", 5, "a", 4]), ["a", 3]);
  });

  it("should give 'e' as max duplicate", function() {
    assert.deepEqual(assesment([1, 2, "e", "e", 3, "e", 5, "a", 4]), ["e", 3]);
  });

  it("it should give 2 as max duplicate", function() {
    assert.deepEqual(assesment([1, 2, "a", "e", 3, "a", 2, "a", 2]), [2, 3]);
  });

  it("it should give n as max duplicate", function() {
    assert.deepEqual(assesment(["k", "o", "n", "f", "i", "n", "i", "t", "y"]), [
      "n",
      2
    ]);
  });

  it("it should give 5 as max duplicate #end_test", function() {
    assert.deepEqual(assesment([5, 2, "a", "e", 5, "a", 5, "a", 4]), [5, 3]);
  });
});
