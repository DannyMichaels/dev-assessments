# Test #1 - Simple JSON Manipulation

The objective of this task is to assess your knowledge of JSON data manipulation.

There's an array of objects containing "The Simpsons" characters and their catchphrase in the `test_data.json` file.

```
[
  {
    "first_name": "Homer",
    "last_name": "Simpson",
    "catchphrase": "Doh!"
  },
  {
    "first_name": "Bart",
    "last_name": "Simpson",
    "catchphrase": "Ay Carumba"
  },
  ...
]
```

<!-- create a new property, called example, this properties value should be the first name + last name says "{catchphrase here}" -->

Your task will be to add an new property to each object that combines the other properties into a new string, then return the new data. The results should now match what's in the `expected_output.json` file:

```
[
  {
    "first_name": "Homer",
    "last_name": "Simpson",
    "catchphrase": "Doh!",
    "example": "Homer Simpson says Doh!"
  },
  {
    "first_name": "Bart",
    "last_name": "Simpson",
    "catchphrase": "Ay Carumba",
    "example": "Bart Simpson says Ay Carumba"
  },
  ...
]
```

## Instructions

Open up the `index.js` file. Write your code there.

Note: You are not limited to writing the entirety of the code in `index.js`, feel free to break the code out into modules.

## Testing your Solution

Check out the `index.spec.js` file for the assertion our test suite runs to check solution. To run the test script in your terminal:

```bash
# From the Project Root (Recommended)
$: npm test

# Or, to run it specifically from this test's folder
$: ../node_modules/.bin/mocha index.spec.js

```

## Hints and notes to help you out

- Don't know how to load JSON files? Google is a <i>require</i>-ment =)
- Lookup the different ways of iterating through an Array using JavaScript
