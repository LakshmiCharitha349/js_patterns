//1. Festival ribbon count

const countBlue = function (count, string) {
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

//5. candy jar stocking

const countOf = function (count, number) {
  return count + number;
}

//6. Music notes

const isMusicDo = (note) => note === "do";

//7. Weather validation

const isBelow32 = (weather) => weather < 32;

//9. Art workshop color variety

const isUnique = (color,index,list) => { 
  if(list.indexOf(color) === list.lastIndexOf(color)) {  
    return true;
  }
  return false;
};

//10 count dune

const countDune = function (count, string) {
  return string === "dune" ? count + 1 : count;
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

  testOperations(["red", "blue", "red", "green", "red", "blue"].reduce(countBlue, 0), 2, "an array");
  testOperations(["red", "red", "green", "red"].reduce(countBlue, 0), 0, "an array");
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

function testsOfCandyCount() {
  console.log("\n--- CANDY COUNT ---\n");

  testOperations(
    [[5, 3], [1, 3, 2], [3, 2]].flat().reduce(countOf),
    19, "listof candies added"
  );

}

function testsOfMusicNotes() {
  console.log("\n--- MUSIC NOTES ---\n");

  testOperations(
    [["mi", "fa", "so"], ["do", "mi"], ["fa"]].flat().some(isMusicDo),
    true, "listof music notes"
  );

  testOperations(
    [["mi", "fa", "so"], ["fa", "mi"], ["fa"]].flat().some(isMusicDo),
    false, "listof music notes"
  );

}
function testsOfFitnessTracker() {
  console.log("\n--- FITNESS TRACKER MILES ---\n");

  testOperations(
    [[2, 3, 2],[4],[1, 1]].flat().reduce(countOf),
    13, "list of runner logs"
  );

  testOperations(
    [[1,5,0]].flat().reduce(countOf),
    6, "listof runner logs"
  );

}

function testsOfWeather() {
  console.log("\n--- WEATHER VALIDATIONx ---\n");

  testOperations(
    [[22, 23],[25, 24, 22],[29]].flat().every(isBelow32),
    true, "listof temperaues"
  );

  testOperations(
    [[22, 35],[25, 24, 22],[29]].flat().every(isBelow32),
    false, "listof temperaues > 32"
  );

}

function testsOfColor() {
  console.log("\n--- WEATHER VALIDATIONx ---\n");

  testOperations(
    [["blue", "yellow"],["yellow", "green"],["blue"]].flat().filter(isUnique),
    ["green"], "list of paints"
  );

  testOperations(
    [["blue","red"],["white","red"],["red"]].flat().filter(isUnique),
    ["blue","white"], "list of paints"
  );

}

function testsOfCountDune() {
  console.log("\n--- REMOVE DUPLICATE ---\n");

  testOperations(
    ["dune","foundation","dune"].reduce(countDune,0),
    2, "list of books"
  );
  
  testOperations(
    ["story","foundation","fairy tales"].reduce(countDune,0),
    0, "list of books"
  );
}


function testAll() {
  testsOfRibbonCount();
  testsOfRemoveDuplicate();
  testsStargazingLog();
  testsOfAttendenceCheck();
  testsOfCandyCount();
  testsOfMusicNotes();
  testsOfWeather();
  testsOfFitnessTracker();
  testsOfColor();
  testsOfCountDune();
}

testAll();

