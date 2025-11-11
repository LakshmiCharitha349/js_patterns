const isAllPositive = (data) => {
  return data.flatMap((x) => x).every((number) => number > 0);
};

const isBelow = function (data, value) {
  return data.flatMap((x) => x).every((x) => x < value);
};

function displayMessage(result, expected, gist) {
  const isPassed = result === expected;
  const resultSymbol = isPassed ? "✅" : "❌";
  let message = resultSymbol + gist;

  if (!isPassed) {
    //const inputFrag = `\ninput: ${data}\n`;
    const actualFragment = `Result: ${result}\n`;
    const expectedFragment = `Expected: ${expected}`;
    message += actualFragment + expectedFragment;
  }

  console.log(message);
}

function testOperations(result, expected, gist) {
  displayMessage(result, expected, gist);
}

function testsOfEvery() {
  testOperations(
    isBelow([[22, 23], [25, 24, 22], [29]], 32),
    true,
    "7. listof temperaues",
  );
  testOperations(
    isAllPositive([[2, 5], [3, 2, 1], [6]]),
    true,
    "29. listof rainfalls",
  );
  testOperations(
    isBelow([[2, 5], [3, 2, 1], [6]], 50),
    true,
    "29. listof rainfalls below 50",
  );

  testOperations(
    isBelow([[110, 115], [118], [109]], 120),
    true,
    "33 .listof readings below 120",
  );
}

testsOfEvery();
