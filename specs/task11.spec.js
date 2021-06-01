var assert = require("assert");
var out = require("../src/task11");
describe("ASSESSMENT 11 #start_test", function() {
  it("Should return [2004,2008,2012]", function() {
    assert.deepEqual(out(2001, 2012), [2004, 2008, 2012]);
  });
  it("Should return [2000,2004]", function() {
    assert.deepEqual(out(1997, 2005), [2000, 2004]);
  });
  it("Should return [2052,2056,2060,2064]", function() {
    assert.deepEqual(out(2050, 2065), [2052, 2056, 2060, 2064]);
  });
  it("Should return [1600]", function() {
    assert.deepEqual(out(1599, 1600), [1600]);
  });
  it("Should return [1200,1204,1208] #end_test", function() {
    assert.deepEqual(out(1200, 1210), [1200, 1204, 1208]);
  });
});
