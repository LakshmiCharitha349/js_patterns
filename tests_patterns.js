import * as allFns from "./patterns.js";

function testCasesOfFilledRect() {
  console.log("\n--- FILLED RECT ---\n");

  console.log(
    allFns.applyStyles(allFns.filledRectangle, allFns.repeatRC(0, 3)),
    "\n",
  );
  console.log(
    allFns.applyStyles(allFns.filledRectangle, allFns.repeatRC(3, 0)),
    "\n",
  );
  console.log(
    allFns.applyStyles(allFns.filledRectangle, allFns.repeatRC(5, 3)),
    "\n",
  );
  console.log(
    allFns.applyStyles(allFns.filledRectangle, allFns.repeatRC(1, 2)),
    "\n",
  );
}

function testCasesOfHollowRect() {
  console.log("\n--- HOLLOW RECT ---\n");

  console.log(
    allFns.applyStyles(allFns.hollowRectangle, allFns.repeatHollow(0, 4)),
    "\n",
  );
  console.log(
    allFns.applyStyles(allFns.hollowRectangle, allFns.repeatHollow(4, 0)),
    "\n",
  );
  console.log(
    allFns.applyStyles(allFns.hollowRectangle, allFns.repeatHollow(4, 4)),
    "\n",
  );
  console.log(
    allFns.applyStyles(allFns.hollowRectangle, allFns.repeatHollow(1, 1)),
    "\n",
  );
  console.log(
    allFns.applyStyles(allFns.hollowRectangle, allFns.repeatHollow(2, 2)),
    "\n",
  );
  console.log(
    allFns.applyStyles(allFns.hollowRectangle, allFns.repeatHollow(10, 10)),
    "\n",
  );
}

function testCasesOfAlternatingRect() {
  console.log("\n--- ALTERNATING RECT ---\n");

  console.log(
    allFns.applyStyles(allFns.alternatingRectangle, allFns.repeatRC(2, 2)),
    "\n",
  );
  console.log(
    allFns.applyStyles(allFns.alternatingRectangle, allFns.repeatRC(10, 5)),
    "\n",
  );
}

function testCasesOfSpacedAlternatingRect() {
  console.log("\n--- SPACED ALTERNATING RECT ---\n");

  console.log(
    allFns.applyStyles(
      allFns.spacedAlternatingRectangle,
      allFns.repeatRC(0, 0),
    ),
    "\n",
  );
  console.log(
    allFns.applyStyles(
      allFns.spacedAlternatingRectangle,
      allFns.repeatRC(10, 5),
    ),
    "\n",
  );
  console.log(
    allFns.applyStyles(
      allFns.spacedAlternatingRectangle,
      allFns.repeatRC(2, 5),
    ),
    "\n",
  );
}

function testCasesOfTriangle() {
  console.log("\n--- TRIANGLE---\n");

  console.log(allFns.applyStyles(allFns.triangle, allFns.repeatSize(5)), "\n");
  console.log(allFns.applyStyles(allFns.triangle, allFns.repeatSize(1)), "\n");
  console.log(allFns.applyStyles(allFns.triangle, allFns.repeatSize(2)), "\n");
}

function testCasesOfHollowTriangle() {
  console.log("\n--- HOLLOW TRIANGLE ---\n");
  console.log(
    allFns.applyStyles(allFns.hollowTriangle, allFns.repeatSize(0)),
    "\n",
  );
  console.log(
    allFns.applyStyles(allFns.hollowTriangle, allFns.repeatSize(5)),
    "\n",
  );
  console.log(
    allFns.applyStyles(allFns.hollowTriangle, allFns.repeatSize(1)),
    "\n",
  );
  console.log(
    allFns.applyStyles(allFns.hollowTriangle, allFns.repeatSize(2)),
    "\n",
  );
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
