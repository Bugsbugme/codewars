function paperwork(n, m) {
  let copies;
  if (n <= 0 || m <= 0) {
    copies = 0;
  } else {
    copies = n * m;
  }
  return copies;
}
