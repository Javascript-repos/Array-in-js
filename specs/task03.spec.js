var assert = require("assert");
var out = require("../src/task03");
describe("ASSESSMENT 3 #start_test", function() {
  it("Should return 2-4-45678", function() {
    assert.deepEqual(out("2445678"), "2-4-45678");
  });
  it("Should return 2", function() {
    assert.deepEqual(out("2"), "2");
  });
  it("Should return 6-2", function() {
    assert.deepEqual(out("62"), "6-2");
  });
  it("Should return 297654-2", function() {
    assert.deepEqual(out("2976542"), "297654-2");
  });
  it("Should return 2-4-6-8 #end_test", function() {
    assert.deepEqual(out("2468"), "2-4-6-8");
  });
});
