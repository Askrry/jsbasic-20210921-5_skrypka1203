function getMinMax(str) {

  let minMax = str.split(' ').filter(number => {
    if (isFinite(number)) {
      return +number;
    }
  }
  );

  let result = {
    min: Math.min(...minMax),
    max: Math.max(...minMax)
  };

  return result;
}
