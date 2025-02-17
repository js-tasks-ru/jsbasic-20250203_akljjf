function getMinMax(str) {
  let result = {};

  const toParts = str.split(" ");

  const toNumbers = toParts
    .map((item) => Number(item))
    .filter((item) => !isNaN(item));

  result.min = Math.min(...toNumbers);
  result.max = Math.max(...toNumbers);

  return result;
}
