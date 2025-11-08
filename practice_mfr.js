//1. Festival ribbon count

const countOf = function (count, string) {
  return string === "blue" ? count + 1 : count;
}
//2. Stargazing log
//3. birdwatchimg duplicate removal
//4.Attendence check

const isNotDuplicate = function (element, index, list) {
  if (list.indexOf(element) === index) {
    return true;
  }

  return false;
}

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

function displayMessage(result, expected, gist) {
  const isPassed = isEqual(result, expected);
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

function testOperations(actual, expected, gist) {
  displayMessage(actual, expected, gist);
}


function testsOfRibbonCount() {
  console.log("\n--- RIBBON COUNT ---\n");

  testOperations(["red", "blue", "red", "green", "red", "blue"].reduce(countOf, 0), 2, "an array");
  testOperations(["red", "red", "green", "red"].reduce(countOf, 0), 0, "an array");
}

function testsStargazingLog() {
  console.log("\n--- REMOVE DUPLICATE ---\n");

  testOperations([["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]].flat().filter(isNotDuplicate),
    ["Orion", "Leo", "Taurus", "Gemini"], "list of names")
}


function testsOfRemoveDuplicate() {
  console.log("\n--- REMOVE DUPLICATE ---\n");

  testOperations(
    ["sparrow", "crow", "parrot", "crow"].filter(isNotDuplicate),
    ["sparrow", "crow", "parrot"], "list of birds"
  );

}
function testsOfAttendenceCheck() {
  console.log("\n--- ATTENDENCE CHECK ---\n");

  testOperations(
    [["nani", "neel", "ravi", "asha"], ["neel", "meera"], ["neel"]].flat().filter(isNotDuplicate),
    ["nani", "neel", "ravi", "asha", "meera"], "list of students"
  );

}

function testAll() {
  testsOfRibbonCount();
  testsOfRemoveDuplicate();
  testsStargazingLog();
  testsOfAttendenceCheck();
}

testAll();

