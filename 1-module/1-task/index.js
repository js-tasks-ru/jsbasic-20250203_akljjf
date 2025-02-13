function factorial(n) {
  let result = 1;

  if (n === 0 || n === 1) {
    return result;
  } else if (n > 1) {
    let i = n;

    while (i > 0) {
      result = result * i;
      i = i - 1;
    }
  }
  return result;
}
