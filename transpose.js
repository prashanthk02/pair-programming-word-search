const transpose = function(matrix) {
  const innerLength = matrix[0].length;

  const newMatrix = [];
  for (let i = 0; i < innerLength; i++ ) {
    newMatrix[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      newMatrix[i].push(matrix[j][i]);
    };
  };

  return newMatrix;
};

module.exports = transpose;