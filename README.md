# MongoDB $in operator with array of objects
This example demonstrates an incorrect usage of the `$in` operator in MongoDB when querying with an array of objects. The `$in` operator is designed to work with an array of scalar values (e.g., numbers, strings). Attempting to use it with an array of objects will not yield the expected results.

## Bug
The `bug.js` file contains the incorrect query.  The query attempts to find documents where the `field` matches either `{value:1}` or `{value:2}`. This will not return any documents unless the field itself is an object with the structure {value: 1} or {value:2}.

## Solution
The `bugSolution.js` file shows the correct approach using the `$or` operator to achieve the desired outcome. The `$or` operator is well-suited for querying documents based on multiple conditions, where any one condition can result in a match.