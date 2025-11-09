
const filled = (char, size) => char.repeat(size);

const hollowLine = size => {
  if (size === 1) {
    return "*";
  }
  return `*${filled(" ", size - 2)}*`;
};

const repeatSize = (size) => {
  const result = [];
  for (let row = 1; row <= size; row++) {
    result.push(row);
  }

  return result;
}

const repeatRC = (rs, cs) => {
  const result = [];
  for (let row = 1; row <= rs; row++) {
    result.push(cs);
  }

  return result;
}

const repeatSizeOfHollow = (rs, cs) => {
  if (rs === 0 || cs === 0) {
    return [];
  }

  if (rs === 1) {
    return [cs];
  }

  return [cs, repeatRC(rs - 2, cs), cs];
}

const hollowTriangle = (size) => {
  const result = [];

  result.push(size.slice(0, -1).map(x => hollowLine(x)));
  result.push(filled("*", size[size.length - 1]));

  return result.flat();
}

const triangle = (size) => {
  return size.map(x => filled("*", x));
}

const chooseChar = (index, size) => {
  const chars = "*- ";
  return chars[index % size];
}

const alternatingRectangle = (size) => {
  return size.map((x, index) => filled(chooseChar(index, 2), x));
}

const spacedAlternatingRectangle = (size) => {
  return size.map((x, index) => filled(chooseChar(index, 3), x));
}

const hollowRectangle = size => {
  if (size.length <= 1) {
    return [filled("*", size[0])];
  }

  const pattern = [];
  pattern.push(filled("*", size[0]));
  pattern.push(size[1].map(x => hollowLine(x)));
  pattern.push(filled("*", size[2]));

  return pattern.flat();
}

const filledRectangle = size => {
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

  console.log(applyStyles(hollowRectangle, repeatSizeOfHollow(0, 4)), "\n");
  console.log(applyStyles(hollowRectangle, repeatSizeOfHollow(4, 0)), "\n");
  console.log(applyStyles(hollowRectangle, repeatSizeOfHollow(4, 4)), "\n");
  console.log(applyStyles(hollowRectangle, repeatSizeOfHollow(1, 1)), "\n");
  console.log(applyStyles(hollowRectangle, repeatSizeOfHollow(2, 2)), "\n");
  console.log(applyStyles(hollowRectangle, repeatSizeOfHollow(10, 10)), "\n");
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
