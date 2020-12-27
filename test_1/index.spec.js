"use strict";

const chai = require("chai");
const expect = chai.expect;

// test suite
// Moka is a testing framework...
// Chai allows you to write the test cases (assertion library)

describe("Test 1 - Simple Example", () => {
  const test1 = require("./index");

  // "it" represents the test case
  it("Results should match expected_output.json", () => {
    const expectedOutput = require("./expected_output");
    const results = test1();
    expect(results).to.deep.equal(expectedOutput); // this is a functionality that is provided by Chai.
    // Moka is executing these test cases
  });
});
