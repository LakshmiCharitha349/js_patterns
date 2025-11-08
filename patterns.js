
const filled = (char, size) => char.repeat(size);
const hollowLine = size => `*${filled(" ", size - 2)}*`;
const underLine = x => filled("-", x);

const repeatRC = (rs, cs) => {
  const array = [];
  for (let row = 1; row <= rs; row++) {
    array.push(cs);
  }

  return array;
}

const repeatInput = (rs, cs) => {
  const array = [];
  array.push(cs);
  array.push(repeatRC(rs - 2, cs));
  array.push(cs);
  return array;
}

const hollowRectangle = size => {
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

function generatePatterns() {
  console.log("--- Generate patterns ---");

  console.log(applyStyles(filledRectangle, repeatRC(5, 3)), "\n");
  console.log(applyStyles(filledRectangle, repeatRC(1, 2)), "\n");
  console.log(applyStyles(hollowRectangle, repeatInput(4, 4)), "\n");
  console.log(applyStyles(hollowRectangle, repeatInput(2, 2)), "\n");
}

generatePatterns();
