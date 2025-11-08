
console.log("--- Generate patterns ---");

const filled = (char, size) => char.repeat(size);
const hollowLine = size => `*${filled(" ", size - 2)}*`;

const repeatRC = (rs, cs) => {
  const array = [];
  for (let row = 1; row <= rs; row++) {
    array.push(cs);
  }

  return array;
}

const filledRectangle = input => {
  return input.map(x => filled("*", x));
}

function applyStyles(style, rows, clms) {
  return style(repeatRC(rows, clms));
}

function generatePatterns() {

  console.log(applyStyles(filledRectangle, 5, 3));
  console.log(applyStyles(filledRectangle, 1, 2));
}


generatePatterns();
