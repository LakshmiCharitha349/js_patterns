const data = [23, 24, 23, 24, 25];

const calculateFrequency = (result, number) => { // frequencey
  if (!(number in result)) {
    result[number] = 0;
  }

  result[number]++;
  return result;
};

const frequency = data.reduce(calculateFrequency, {});
console.table(frequency);
