const middle = function(array) {
  let midArray = [];
  if (array.length <= 2) {
    return midArray;
  } else if (array.length % 2 === 0) {
    let midEven = array.slice((array.length / 2) - 1, (array.length / 2) + 1);
    midArray = midEven;
  } else {
    let midOdd = array[(array.length - 1) / 2];
    midArray.push(midOdd);
  }
  console.log(midArray)
  return midArray;
};

middle([1, 2, 3, 4])

module.exports = middle;