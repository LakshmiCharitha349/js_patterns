const data = [2, 1, 2, 10, 30];
const largest2Elements = (result, number) => {
  if (number >= result[0]) {
    result[1] = result[0];
    result[0] = number;
  }
  
  return result;
};

console.log(data.reduce(largest2Elements, [data[0]]));
