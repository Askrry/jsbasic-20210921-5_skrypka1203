function factorial(n) {
  let factorial = 1;
  for (; n > 1; n--) {
    factorial = n * factorial;
  }
  return factorial;

}

