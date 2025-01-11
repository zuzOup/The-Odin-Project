function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const left = mergeSort(arr.slice(Math.floor(arr.length / 2), arr.length));
  let i = 0;

  const right = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  let j = 0;

  let mergeArr = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergeArr.push(left[i]);
      i++;
    } else {
      mergeArr.push(right[j]);
      j++;
    }
  }

  return mergeArr.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([79, 100, 105, 110]));
