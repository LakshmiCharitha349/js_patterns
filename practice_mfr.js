//1. Festival ribbon count

const countOf = function (count, string) {
  return string === "blue" ? count + 1 : count;
}

//3. birdwatchimg duplicate removal

const isNotDuplicate = function (bird,index,list) {
    if(list.indexOf(bird) === index) {
      return true;
    }
    
  return false;
} 

// const data = [["Orion", "Leo"],
// ["Taurus"],
// ["Orion", "Gemini"]]
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
    message += inputFrag + actualFragment + expectedFragment;
  }

  console.log(message);
}

function testOperations( actual, expected, gist) {
  displayMessage( actual, expected, gist);
}


function testsOfRibbonCount() {
  console.log("\n--- RIBBON COUNT ---\n");

  testOperations(["red", "blue", "red", "green", "red", "blue"].reduce(countOf,0),2, "an array");
  testOperations(["red","red", "green", "red"].reduce(countOf,0),0, "an array");
}

function testsOfRemoveDuplicate() {
  console.log("\n--- REMOVE DUPLICATE ---\n");

  testOperations(["sparrow","crow","parrot","crow"].filter(isNotDuplicate),
  ["sparrow","crow","parrot"],"list of birds")
}

function testAll() {
  testsOfRibbonCount();
  testsOfRemoveDuplicate();
}

testAll();

