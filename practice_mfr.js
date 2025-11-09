
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

const isUnique = (color,index,list) => list.indexOf(color) === list.lastIndexOf(color);

const isPositive = (number) => number > 0;

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

function testsOfEvery() {
  testOperations(every(isBelow32,[[22, 23],[25, 24, 22],[29]]),
    true, "listof temperaues"
  );
  testOperations(every(isPositive,[[2,5],[3,2,1],[6]]),
    true, "listof numbers"
  );

  
}

function testsOfSome() {
  testOperations(some([["step","tap"], ["turn","step"]],"turn"),true, "listof music notes");
  testOperations(some([["mi", "fa", "so"], ["do", "mi"], ["fa"]],"so"),true, "listof music notes"
  );
  testOperations(some([["mi", "fa", "so"], ["do", "mi"], ["fa"]],"do"),true, "listof music notes"
  );

  testOperations(some([["mi", "fa", "so"], ["fa", "mi"], ["fa"]],"do"),false, "listof music notes"
  );
}

function testsOfCount() {
  testOperations(countOf(["red", "blue", "red", "green", "red", "blue"],"blue",0),2, "an array");
  testOperations(countOf(["red", "red", "green", "red"],"blue", 0),0, "an array");
  testOperations(reduce(count,[[5, 3], [1, 3, 2], [3, 2]],0,),19, "listof candies added");

   testOperations(reduce(count,[[2, 3, 2],[4],[1, 1]],0),13, "list of runner logs");

   testOperations(reduce(count,[[1,5,0]],0), 6, "listof runner logs" );
   testOperations(countOf(["dune","foundation","dune"],"dune",0),2, "list of books");
  
  testOperations(countOf(["story","foundation","fairy tales"],"dune",0),0, "list of books");
  testOperations(reduce(count,[[1,2,1], [3], [2]],0,),9, "listof watering amount");
  testOperations(reduce(count,[[3,2], [1], [4]],0,),10, "listof watering amount");
  testOperations(countOf(["deer", "deer", "lion", "rabbit", "deer"],"deer",0),3, "an array");
  testOperations(countOf(["rabbit", "lion", "tiger", "lion"],"deer", 0),0, "an array");
  testOperations(reduce(count,[[4,6], [1, 3, 2], [5]],0),21, "listof weigths");
  testOperations(reduce(count,[[2,3], [1], [2]],0),8, "listof pens handed");
  testOperations(countOf(["chocolate", "vennila", ["chocolate"], ["vennila", "chocolate"]],
    "chocolate",0),3, "list of ice cream flavours"
  );
  testOperations(reduce(count,[[10,20], [10], [15,10]],0,),65, "listof exersice count");
  testOperations(reduce(count,[[12,10], [5], [8,7]],0,),42, "listof pages read");
}

function testsOfFindUnique() {
  testOperations(filter(isNotDuplicate,[["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]]),
    ["Orion", "Leo", "Taurus", "Gemini"], "list of names");

  testOperations(filter(isNotDuplicate,["sparrow", "crow", "parrot", "crow"]),
    ["sparrow", "crow", "parrot"], "list of birds"
  );

  testOperations(filter(isNotDuplicate,[["nani", "neel", "ravi", "asha"], ["neel", "meera"], ["neel"]]),
    ["nani", "neel", "ravi", "asha", "meera"], "list of students"
  );


   testOperations(filter(isUnique,[["blue", "yellow"],["yellow", "green"],["blue"]]),
    ["green"], "list of paints"
  );

  testOperations(filter(isUnique,[["blue","red"],["white","red"],["red"]]),
    ["blue","white"], "list of paints"
  );

  testOperations(filter(isNotDuplicate,[[ "lentils", "rice"], ["curd"], ["curd","lentils"]]),
    ["lentils", "rice", "curd"], "list of ingridents"
  );

  testOperations(filter(isNotDuplicate,[["orange","mango","banana"], ["mango", "banana"], ["apple"]]),
    ["orange", "mango", "banana", "apple"], "list of fruits"
  );

  testOperations(filter(isNotDuplicate,[[1,2,3], [3], [3,4,1]]),
    [1,2,3,4], "list of chapters");

    testOperations(filter(isUnique,["small","big","small","medium"]),
    ["big","medium"], "list of records"
  );

  testOperations(filter(isNotDuplicate,["A","B","C","A","B"]),
    ["A","B","C"], "list of signs"
  );

  testOperations(filter(isNotDuplicate,["A","B",["C","A"],["A"]]),
    ["A","B","C"], "list of stastion names"
  );

  testOperations(filter(isNotDuplicate,[[ "rose", "lilly"], ["tulip"], ["rose","jasmine"]]),
    ["rose", "lilly", "tulip","jasmine"], "list of flowers"
  );
  
}




function testAll() {
 testsOfEvery();
 testsOfSome();
 testsOfFindUnique();
 testsOfCount();
}

testAll();

