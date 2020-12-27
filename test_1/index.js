"use strict";

let allSimpsons = require("./test_data.json");
/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence.
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
// "first_name": "Seymour",
// "last_name": "Skinner",
// "catchphrase": "Simpson!"
module.exports = function test1() {
  let results;
  // actual usage of map function is that you map an object from one type to another type
  //  we want to create a new array of simpsons with these properties, we use the spread operator to get the existing properties.
  // and then we create a new property and we append it to the existing object.
  results = allSimpsons.map((simpson) => ({
    ...simpson,
    example: `${simpson.first_name} ${simpson.last_name} says ${simpson.catchphrase}`,
  }));
  // Write your code here.  The pre-written lines above and below are just suggestions, feel free to delete
  // them and start fresh.

  return results;
};
