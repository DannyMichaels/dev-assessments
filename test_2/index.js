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
// we do this so we can get the results from test 1
// our task will be to filter the output from your first test so that only characters with the `last_name` of "Simpson" will be returned

// way 1 require
const test1 = require("../test_1/index");

// way 2 require
// let allCharacters = require("./test_data.json");

module.exports = function test2() {
  // 1 liner way of doing it
  let results = test1().filter((simpson) => simpson.last_name === "Simpson");

  // 2nd way of doing it
  // let results2 = allCharacters.filter(
  //   (character) => character.last_name === "Simpson"
  // );

  // results2 = results2.map((character) => ({
  //   ...character,
  //   example: `${character.first_name} ${character.last_name} says ${character.catchphrase}`,
  // }));

  return results;
  // return results2;
};
