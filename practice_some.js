const isMatch = (data, word) => {
  return data.flatMap((element) => element).some((element) => element === word);
};

const isAbove = (data, limit) => {
  return data.flatMap((x) => x).some((x) => x > limit);
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

function testsOfSome() {
  testOperations(
    isMatch([["step", "tap"], ["turn", "step"]], "turn"),
    true,
    "listof music notes",
  );
  testOperations(
    isMatch([["mi", "fa", "so"], ["do", "mi"], ["fa"]], "so"),
    true,
    "2.listof harmony review notes : so",
  );
  testOperations(
    isMatch([["mi", "fa", "so"], ["do", "mi"], ["fa"]], "do"),
    true,
    "6. listof music notes : do",
  );

  testOperations(
    isMatch([["mi", "fa", "so"], ["fa", "mi"], ["fa"]], "do"),
    false,
    "listof music notes",
  );
  testOperations(
    isAbove([[5, 6], [7], [6]], 7),
    false,
    "40. listof measurments",
  );
  testOperations(
    isMatch([[2, 3], [1], [4, 2]], 4),
    true,
    "47. listof photography values",
  );
  testOperations(
    isMatch([["sky", "blue"], ["night"], ["sky", "dark"]], "excellent"),
    false,
    " 53. list of poetry words find out :excellent",
  );
}

testsOfSome();
