function fibs(num) {
  if (num === 0) return [];
  if (num === 1) return [0];

  let arr = [0, 1];

  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr;
}

// console.log(fibs(2));

function fibsRec(num) {
  if (num === 0) return [];
  if (num === 1) return [0];

  const arr = fibsRec(num - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}

// console.log(fibsRec(7));

