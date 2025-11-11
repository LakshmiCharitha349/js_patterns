const filled = (char, size) => char.repeat(size);

const hollowLine = (size) => {
  if (size === 1) {
    return "*";
  }
  return `*${filled(" ", size - 2)}*`;
};

export const repeatSize = function (size) {
  const result = [];
  for (let row = 1; row <= size; row++) {
    result.push(row);
  }

  return result;
};

export const repeatRC = function (rs, cs) {
  if (cs === 0) return [];

  const result = [];
  for (let row = 1; row <= rs; row++) {
    result.push(cs);
  }

  return result;
};

export const repeatHollow = (rs, cs) => {
  if (cs === 0 || rs === 0) {
    return [];
  }
  return [cs, repeatRC(rs - 2, cs), cs];
};

export const hollowTriangle = function (size) {
  const result = [];
  result.push(size.slice(0, -1).map((x) => hollowLine(x)));
  result.push(filled("*", size[size.length - 1]));

  return result.flat();
};

export const triangle = function (size) {
  return size.map((x) => filled("*", x));
};

const chooseChar = (index, size) => {
  const chars = "*- ";
  return chars[index % size];
};

export const alternatingRectangle = function (size) {
  return size.map((x, index) => filled(chooseChar(index, 2), x));
};

export const spacedAlternatingRectangle = function (size) {
  return size.map((x, index) => filled(chooseChar(index, 3), x));
};

export const hollowRectangle = function (size) {
  return size.map((element) => {
    if (Array.isArray(element)) {
      return element.map((x) => hollowLine(x));
    }

    return filled("*", element);
  }).flatMap((x) => x);

  // pattern.push(filled("*", size[0]));
  // pattern.push(size.slice(1, -1).map(x => hollowLine(x)));
  // pattern.push(filled("*", size[size.length - 1]));

  // return pattern.flat();
};

export const filledRectangle = function (size) {
  return size.map((x) => filled("*", x));
};

export function applyStyles(style, size) {
  return style(size).join("\n");
}
