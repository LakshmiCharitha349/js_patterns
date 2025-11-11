// Insertion sort

const data = [4, 3, 2, 3, 1];

const insertionSort = (numbers) => {
  for (let i = 1; i < numbers.length; i++) {
    let j = i - 1;
    const key = numbers[i];

    while (numbers[j] > key && j >= 0) {
      numbers[j + 1] = numbers[j];
      j--;
    }

    numbers[j + 1] = key;
  }

  return numbers;
};

console.log(insertionSort(data));
