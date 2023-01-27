
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resMatrix = matrix;
  let resArr = [];

  for (i in resMatrix) {
    if ( i % 2 != 0) {
    resMatrix[i].reverse();
    }
  }

  for (j in resMatrix) {
    for (k in resMatrix[j]) {
     resArr.push(resMatrix[j][k]);
    }
 
}

  return resArr;
}
