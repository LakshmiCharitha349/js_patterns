
const reduce = (predicator,data,intialValue) => {
  return data.flatMap(x => x).reduce(predicator,intialValue);
};

const countOf = (data,word,count) => {
  return data.flatMap(x => x).reduce((count,x) => (x === word) ? count + 1 : count,0);
};

const filter = (predicator,data) =>{
  return data.flatMap(x => x).filter(predicator);
}

const some = (data,word) =>{
  return data.flatMap(x => x).some(x => x === word);
}

const every = (predicator,data) => {
  return data.flatMap(x => x).every(predicator);
}

const isNotDuplicate = function (element, index, list) {
  if (list.indexOf(element) === index) {
    return true;
  }

  return false;
}


const count = function (count, number) {
  return count + number;
}

const isBelow32 = (weather) => weather < 32;

const isUnique = (color,index,list) => { 
  if(list.indexOf(color) === list.lastIndexOf(color)) {  
    return true;
  }
  return false;
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

function testOperations(result, expected, gist) {
  displayMessage(result, expected, gist);
}


function testsOfRibbonCount() {
  console.log("\n--- RIBBON COUNT ---\n");

  testOperations(countOf(["red", "blue", "red", "green", "red", "blue"],"blue",0),2, "an array");
  testOperations(countOf(["red", "red", "green", "red"],"blue", 0),0, "an array");
}

function testsStargazingLog() {
  console.log("\n--- STARGAZING LOG---\n");

  testOperations(filter(isNotDuplicate,[["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]]),
    ["Orion", "Leo", "Taurus", "Gemini"], "list of names");
}


function testsOfRemoveDuplicate() {
  console.log("\n--- REMOVE DUPLICATE BIRDS ---\n");

  testOperations(filter(isNotDuplicate,["sparrow", "crow", "parrot", "crow"]),
    ["sparrow", "crow", "parrot"], "list of birds"
  );

}

function testsOfAttendenceCheck() {
  console.log("\n--- ATTENDENCE CHECK ---\n");

  testOperations(filter(isNotDuplicate,[["nani", "neel", "ravi", "asha"], ["neel", "meera"], ["neel"]]),
    ["nani", "neel", "ravi", "asha", "meera"], "list of students"
  );

}

function testsOfCandyCount() {
  console.log("\n--- CANDY COUNT ---\n");

  testOperations(reduce(count,[[5, 3], [1, 3, 2], [3, 2]],0,),19, "listof candies added");

}

function testsOfMusicNotes() {
  console.log("\n--- MUSIC NOTES OF DO ---\n");

  testOperations(some([["mi", "fa", "so"], ["do", "mi"], ["fa"]],"do"),true, "listof music notes"
  );

  testOperations(some([["mi", "fa", "so"], ["fa", "mi"], ["fa"]],"do"),false, "listof music notes"
  );

}
function testsOfFitnessTracker() {
  console.log("\n--- FITNESS TRACKER MILES ---\n");

  testOperations(reduce(count,[[2, 3, 2],[4],[1, 1]],0),13, "list of runner logs");

  testOperations(reduce(count,[[1,5,0]],0), 6, "listof runner logs" );

}

function testsOfWeather() {
  console.log("\n--- WEATHER VALIDATIONx ---\n");

  testOperations(every(isBelow32,[[22, 23],[25, 24, 22],[29]]),
    true, "listof temperaues"
  );

  testOperations(every(isBelow32,[[22, 35],[25, 24, 22],[29]]),
    false, "listof temperaues > 32"
  );

}

function testsOfColor() {
  console.log("\n--- UNIQUE COLORS ---\n");

  testOperations(filter(isUnique,[["blue", "yellow"],["yellow", "green"],["blue"]]),
    ["green"], "list of paints"
  );

  testOperations(filter(isUnique,[["blue","red"],["white","red"],["red"]]),
    ["blue","white"], "list of paints"
  );

}

function testsOfCountDune() {
  console.log("\n--- COUNT DUNE---\n");

  testOperations(countOf(["dune","foundation","dune"],"dune",0),2, "list of books");
  
  testOperations(countOf(["story","foundation","fairy tales"],"dune",0),0, "list of books");
}

function testsOfLunchBox() {
  console.log("\n--- LUNCH BOX ---\n");

  testOperations(filter(isNotDuplicate,[[ "lentils", "rice"], ["curd"], ["curd","lentils"]]),
    ["lentils", "rice", "curd"], "list of ingridents"
  );

}

function testsOfMusicNotesOfSo() {
  console.log("\n--- MUSIC NOTES OF SO ---\n");

  testOperations(some([["mi", "fa", "so"], ["do", "mi"], ["fa"]],"so"),true, "listof music notes"
  );
}

function testsOfCrateTotals() {
  console.log("\n--- CRATE TOTALS ---\n");

  testOperations(reduce(count,[[4,6], [1, 3, 2], [5]],0,),21, "listof weigths");

}

function testsOfPostalRecords() {
  console.log("\n--- UNIQUE POST RECORDS ---\n");

  testOperations(filter(isUnique,["small","big","small","medium"]),
    ["big","medium"], "list of records"
  );
}

function testsOfWildLifeCount() {
  console.log("\n--- COUNT DEERS---\n");

  testOperations(countOf(["deer", "deer", "lion", "rabbit", "deer"],"deer",0),3, "an array");
  testOperations(countOf(["rabbit", "lion", "tiger", "lion"],"deer", 0),0, "an array");
}

function testsStudyGroup() {
  console.log("\n--- STUDY GROUP---\n");

  testOperations(filter(isNotDuplicate,[[1,2,3], [3], [3,4,1]]),
    [1,2,3,4], "list of chapters");
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
  testsOfLunchBox();
  testsOfMusicNotesOfSo();
  testsOfCrateTotals();
  testsOfPostalRecords();
  testsOfWildLifeCount();
  testsStudyGroup();
}

testAll();

