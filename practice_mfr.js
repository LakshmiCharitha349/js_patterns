console.log("--- Usage of Map Filter Reduce Fns --- ");

//1. Festival ribbon count

const countOf = (count, string) => string === "blue" ? count + 1 : count;

const reduce = (reducer, data) => {
  let reducedElement = 0;
  for (let index = 0; index < data.length; index++) {
    reducedElement = reducer(reducedElement, data[index]);
  }

  return reducedElement;
};

function isEqual(array1, array2) {
  if (!Array.isArray(array1)) {
    return array1 === array2;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function displayMessage(data, result, expected, gist) {
  const isPassed = isEqual(result, expected);
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    const inputFrag = `\ninput: ${data}\n`;
    const actualFragment = `Result: ${result}\n`;
    const expectedFragment = `Expected: ${expected}`;
    message += inputFrag + actualFragment + expectedFragment;
  }

  console.log(message);
}

function testOperations(type, operation, data, expected, gist) {
  const result = type(operation, data);

  displayMessage(data, result, expected, gist);
}



function tests() {

  testOperations(reduce, countOf, ["red", "blue", "red", "green", "red", "blue"], 2, "an array");
}

tests();

