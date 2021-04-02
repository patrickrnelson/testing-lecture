/**
* Adds two numbers together and returns the sum of their values
*/
function sum(numberOne, numberTwo) {
  if(numberOne === undefined || numberTwo === undefined) {
    throw new Error("You're missing an argument")
  }

  return Number(numberOne) + Number(numberTwo);
}

module.exports = sum;
