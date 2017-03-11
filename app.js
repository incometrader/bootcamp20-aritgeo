const aritGeo = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  const subtractionVal = arr[1] - arr[0];
  const divisionVal = arr[1] / arr[0];
  let arithmetic = true;
  let geometric = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== subtractionVal) {
      arithmetic = false;
    }
    if (arr[i + 1] / arr[i] !== divisionVal) {
      geometric = false;
    }
  }
  if (arithmetic === true) {
    return 'Arithmetic';
  }
  if (geometric === true) {
    return 'Geometric';
  }
  return -1;
};
module.exports = aritGeo;
