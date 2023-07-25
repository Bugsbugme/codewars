function findNeedle(haystack) {
  let haystack = [];

  index = haystack.findIndex((element) => element === "needle");

  return `found needle at position ${index}`;
}
