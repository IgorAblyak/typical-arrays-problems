
exports.min = function min (array) {
  let minNumber;
  if (!array || array.length === 0) {
    return 0;
  } 
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  let maxNumber;
  if (!array || array.length === 0) {
    return 0;
  } 
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  let sum = 0;
  let avgNumber;
  if (!array || array.length === 0) {
    return 0;
  } else {
    for (let item of array) {
      sum += item;
    }
    avgNumber = sum / array.length;
  }
  return avgNumber;
}