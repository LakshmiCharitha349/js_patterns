const splitOddsEvens = {
  even: [],
  odd: [],
};

const arrangeNumbers = (numbers, splitOddsEvens) => {
  return numbers.reduce((result, number) => {
    const key = number % 2 === 0 ? "even" : "odd";
    result[key].push(number);
    return result;
  }, splitOddsEvens);
};

const data = [3, 4, 2, 1, 5, 6, 7];
console.table(arrangeNumbers(data, splitOddsEvens));
