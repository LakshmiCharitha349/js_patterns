// Insertion sort

const data = [50, 40, 30, 20, 10, 3, 4, 2];

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

const mergeSort = function (numbers) {
  if (numbers.length <= 1) {
    return numbers;
  }

  const mid = Math.floor(numbers.length / 2);
  const leftArray = mergeSort(numbers.slice(0, mid));
  const rightArray = mergeSort(numbers.slice(mid));

  return merge(leftArray, rightArray);
};

const merge = (left, right) => {
  const sortedArray = [];
  let i = 0, j = 0;

  for (; i < left.length && j < right.length;) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i++]);
    } else {
      sortedArray.push(right[j++]);
    }
  }

  while (j < right.length) {
    sortedArray.push(right[j++]);
  }
  while (i < left.length) {
    sortedArray.push(left[i++]);
  }

  return sortedArray;
};

console.log(mergeSort(data));
