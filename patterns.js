
const filled = (char, size) => char.repeat(size);

const hollowLine = size => {
  if (size === 1) {
    return "*";
  }
  return `*${filled(" ", size - 2)}*`;
};

const repeatSize = function (size) {
  const result = [];
  for (let row = 1; row <= size; row++) {
    result.push(row);
  }

  return result;
}

const repeatRC = function (rs, cs) {
  if (cs === 0) return [];

  const result = [];
  for (let row = 1; row <= rs; row++) {
    result.push(cs);
  }

  return result;
}

const hollowTriangle = function (size) {
  const result = [];

  result.push(size.slice(0, -1).map(x => hollowLine(x)));
  result.push(filled("*", size[size.length - 1]));

  return result.flat();
}

const triangle = function (size)  {
  return size.map(x => filled("*", x));
}

const chooseChar = (index, size) => {
  const chars = "*- ";
  return chars[index % size];
}

const alternatingRectangle = function (size) {
  return size.map((x, index) => filled(chooseChar(index, 2), x));
}

const spacedAlternatingRectangle = function (size) {
  return size.map((x, index) => filled(chooseChar(index, 3), x));
}

const hollowRectangle = function (size) {
  const pattern = [];

  pattern.push(filled("*", size[0]));
  pattern.push(size.slice(1, -1).map(x => hollowLine(x)));
  pattern.push(filled("*", size[size.length - 1]));

  return pattern.flat();
}

const filledRectangle = function (size) {
  return size.map(x => filled("*", x));
}

function applyStyles(style, size) {
  return style(size).join("\n");
}

function testCasesOfFilledRect() {
  console.log("\n--- FILLED RECT ---\n");

  console.log(applyStyles(filledRectangle, repeatRC(0, 3)), "\n");
  console.log(applyStyles(filledRectangle, repeatRC(3, 0)), "\n");
  console.log(applyStyles(filledRectangle, repeatRC(5, 3)), "\n");
  console.log(applyStyles(filledRectangle, repeatRC(1, 2)), "\n");
}
function testCasesOfHollowRect() {
  console.log("\n--- HOLLOW RECT ---\n");

  console.log(applyStyles(hollowRectangle, repeatRC(0, 4)), "\n");
  console.log(applyStyles(hollowRectangle, repeatRC(4, 0)), "\n");
  console.log(applyStyles(hollowRectangle, repeatRC(4, 4)), "\n");
  console.log(applyStyles(hollowRectangle, repeatRC(1, 1)), "\n");
  console.log(applyStyles(hollowRectangle, repeatRC(2, 2)), "\n");
  console.log(applyStyles(hollowRectangle, repeatRC(10, 10)), "\n");
}
function testCasesOfAlternatingRect() {
  console.log("\n--- ALTERNATING RECT ---\n");

  console.log(applyStyles(alternatingRectangle, repeatRC(2, 2)), "\n");
  console.log(applyStyles(alternatingRectangle, repeatRC(10, 5)), "\n");
}
function testCasesOfSpacedAlternatingRect() {
  console.log("\n--- SPACED ALTERNATING RECT ---\n");

  console.log(applyStyles(spacedAlternatingRectangle, repeatRC(0, 0)), "\n");
  console.log(applyStyles(spacedAlternatingRectangle, repeatRC(10, 5)), "\n");
  console.log(applyStyles(spacedAlternatingRectangle, repeatRC(2, 5)), "\n");
}
function testCasesOfTriangle() {
  console.log("\n--- TRIANGLE---\n");

  console.log(applyStyles(triangle, repeatSize(5)), "\n");
  console.log(applyStyles(triangle, repeatSize(1)), "\n");
  console.log(applyStyles(triangle, repeatSize(2)), "\n");
}

function testCasesOfHollowTriangle() {
  console.log("\n--- HOLLOW TRIANGLE ---\n");
  console.log(applyStyles(hollowTriangle, repeatSize(0)), "\n");
  console.log(applyStyles(hollowTriangle, repeatSize(5)), "\n");
  console.log(applyStyles(hollowTriangle, repeatSize(1)), "\n");
  console.log(applyStyles(hollowTriangle, repeatSize(2)), "\n");
}

function testAll() {
  testCasesOfFilledRect();
  testCasesOfHollowRect();
  testCasesOfAlternatingRect();
  testCasesOfSpacedAlternatingRect();
  testCasesOfTriangle();
  testCasesOfHollowTriangle();
}

testAll();
