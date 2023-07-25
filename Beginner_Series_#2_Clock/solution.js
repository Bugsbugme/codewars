function past(h, m, s) {
  s = s * 1000;
  m = m * 60 * 1000;
  h = h * 60 * 60 * 1000;

  return h + m + s;
}
