const sum = (data,total = 0) => {
  return data.flatMap(x => x).reduce((total,element) => total + element,total);
};

const countOf = (data,word) => {
  return data.flatMap(x => x).reduce((count,x) => (x === word) ? count + 1 : count,0);
};

const join = function (data) {
 return data.flatMap(x => x).reduce((result,string) =>  result.concat(string));
}

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

function testsOfCount() {
  testOperations(countOf(["red", "blue", "red", "green", "red", "blue"],"blue"),
    2, "1. list of ribbons"
  );
  
  testOperations(countOf(["dune","foundation","dune"],"dune"),2,
   "10. list of books in library"
  );
  
  testOperations(countOf(["deer", "deer", "lion", "rabbit", "deer"],"deer"),
    3, "15.list of animals"
  );
  
  testOperations(countOf(["chocolate", "vennila", ["chocolate"], ["vennila", "chocolate"]],
    "chocolate"),3, "list of ice cream flavours"
  );

  testOperations(countOf(["track3", "track1", "track2", "track1"],"track1"),
    2, "35. list of tracks"
  );

  testOperations(countOf([["orange","mango","banana"], ["mango", "banana"], ["apple"]],
    "banana"),2, "51. list of fruit log"
  );

  testOperations(join([["sky", "blue"],["night"],["sky","dark"]],""),
    "skybluenightskydark", " 52. list of poetry words joined"
  );
}

function testCasesOfSum() {
   testOperations(sum([[10,20], [10], [15,10]]),65, "listof exersice total");
  testOperations(sum([[12,10], [5], [8,7]]),42, "listof pages read");
  testOperations(sum([[4, 3],[2],[3, 1]]),13, "listof fruit weights");
  testOperations(sum([[2,3,2],[1],[2]]),10, "39. listof gym counts");
  testOperations(sum([[6,4],[3,2]]),15, "34. listof lap counts");
  testOperations(sum([[1,2,3],[1,2]]),9, "41. listof candies");
  testOperations(sum([[10,12],[15]]),37, "44. listof passengers");
  testOperations(sum([[3,5],[2,1]]),11, "45. listof grocerry tally");
  testOperations(sum([[1,1,2],[2,1]]),7, "45. listof coins");
  testOperations(sum([[1,2,1], [3], [2]]),9, "listof watering amount");
  testOperations(sum([[3,2], [1], [4]]),10, "listof watering amount");
  testOperations(sum([[4,6], [1, 3, 2], [5]]),21, "13.listof vegetable crate");
  testOperations(sum([[2,3], [1], [2]]),8, "listof pens handed");
  testOperations(sum([[5, 3], [1, 3, 2], [3, 2]],0,),19, "5. list of candies added");
  testOperations(sum([[2, 3, 2],[4],[1, 1]],0),13, "8. list of runner logs");
 
}

testsOfCount();
testCasesOfSum();
