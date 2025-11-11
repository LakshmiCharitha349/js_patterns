const unique = (data) => {
  return data
    .flatMap((x) => x)
    .reduce((result, element) => {
      if (!result.includes(element)) {
        result.push(element);
      }

      return result;
    }, []);
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

function testsOfFindUnique() {
  testOperations(unique([["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]]), [
    "Orion",
    "Leo",
    "Taurus",
    "Gemini",
  ], "list of stargazing log");

  testOperations(unique(["sparrow", "crow", "parrot", "crow"]), [
    "sparrow",
    "crow",
    "parrot",
  ], "3. list of birds");

  testOperations(
    unique([["nani", "neel", "ravi", "asha"], ["neel", "meera"], ["neel"]]),
    ["nani", "neel", "ravi", "asha", "meera"],
    "4.list of students attendences",
  );

  testOperations(unique([["blue", "yellow"], ["yellow", "green"], ["blue"]]), [
    "blue",
    "yellow",
    "green",
  ], "9. list of workshop colors used");

  testOperations(unique([["blue", "red"], ["white", "red"], ["red"]]), [
    "blue",
    "red",
    "white",
  ], "list of paints");

  testOperations(unique([["lentils", "rice"], ["curd"], ["curd", "lentils"]]), [
    "lentils",
    "rice",
    "curd",
  ], "11.list of lunch box ingridents");

  testOperations(
    unique([["orange", "mango", "banana"], ["mango", "banana"], ["apple"]]),
    ["orange", "mango", "banana", "apple"],
    "list of fruits",
  );

  testOperations(
    unique([[1, 2, 3], [3], [3, 4, 1]]),
    [1, 2, 3, 4],
    "list of chapters",
  );

  testOperations(unique(["small", "big", "small", "medium"]), [
    "small",
    "big",
    "medium",
  ], "14. list of postal records");

  testOperations(
    unique(["A", "B", "C", "A", "B"]),
    ["A", "B", "C"],
    "list of signs",
  );

  testOperations(
    unique(["A", "B", ["C", "A"], ["A"]]),
    ["A", "B", "C"],
    "list of stastion names",
  );

  testOperations(unique([["rose", "lilly"], ["tulip"], ["rose", "jasmine"]]), [
    "rose",
    "lilly",
    "tulip",
    "jasmine",
  ], "list of flowers");

  testOperations(unique([["idly", "vada"], ["vada", "upma"]]), [
    "idly",
    "vada",
    "upma",
  ], " 31. list of snacks");

  testOperations(unique([["sunset", "bird"], ["river"], ["sunset"]]), [
    "sunset",
    "bird",
    "river",
  ], " 32. list of themes");

  testOperations(unique([["cheese", "bread"], ["tomato"], ["bread"]]), [
    "cheese",
    "bread",
    "tomato",
  ], " 36. list of ingridents");
  testOperations(unique([["sky", "blue"], ["night"], ["sky", "dark"]]), [
    "sky",
    "blue",
    "night",
    "dark",
  ], " 37. list of words of poetry");
  testOperations(unique([["toy", "sticker"], ["candy", "sticker"]]), [
    "toy",
    "sticker",
    "candy",
  ], " 38. list of gift items");

  testOperations(unique([["tom", "jerry"], ["jerry", "spike"]]), [
    "tom",
    "jerry",
    "spike",
  ], " 42. list of participants");
  testOperations(unique([["vega", "sirius"], ["vega", "rizel"]]), [
    "vega",
    "sirius",
    "rizel",
  ], " 43. list of stars");
  testOperations(unique([["mint", "ginger"], ["lemon"], ["mint"]]), [
    "mint",
    "ginger",
    "lemon",
  ], " 46. list of tea flavours");
  testOperations(unique([["pencil", "charcoal"], ["ink"], ["pencil"]]), [
    "pencil",
    "charcoal",
    "ink",
  ], " 48. list of drawing tools");
  testOperations(unique([["salt", "pepper"], ["turmeric"], ["salt"]]), [
    "salt",
    "pepper",
    "turmeric",
    "salt",
  ], " 50. list of spices");
}

function testAll() {
  testsOfFindUnique();
}

testAll();
