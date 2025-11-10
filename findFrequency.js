const data = [23, 24, 23, 24, 25];

const calculateFrequency = (result, number) => { // frequence
  const entry = result.find((x) => x[0] === number);
  if (!entry) {
    result.push([number, 1]);
    return result;
  }
  entry[1]++;
  return result;
};

const frequency = data.reduce(calculateFrequency, []);
console.log(frequency);
