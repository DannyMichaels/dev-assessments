"use strict";

/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence. The function should then only return the elements where
 * the last name is "Simpson".
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */

const test1 = require("../test_1/index");

module.exports = function test2() {
  let results = test1().filter((simpson) => simpson.last_name === "Simpson");

  return results;
};
