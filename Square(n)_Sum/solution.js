function squareSum(numbers) {
  let sum = 0;

  numbers.forEach((i) => {
    sum += i * i;
  });

  return sum;
}
