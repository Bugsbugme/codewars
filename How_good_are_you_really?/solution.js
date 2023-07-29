function betterThanAverage(classPoints, yourPoints) {
  let total = 0;
  for (let index = 0; index < classPoints.length; index++) {
    total + classPoints[index];
  }
  let average = total / classPoints.length;
  if (average < yourPoints) {
    return true;
  } else {
    return false;
  }
}
