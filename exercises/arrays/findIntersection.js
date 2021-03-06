// Find the intersection of two arrays.
// An intersection would be the common elements that exists within both arrays.
// In this case, these elements should be unique!
// var firstArray = [2, 2, 4, 1];
// var secondArray = [1, 2, 0, 2];

// intersection(firstArray, secondArray); // [2, 1]

function intersection(firstArray, secondArray) {
  const arrayMap = {};
  const intersectionArray = [];

  firstArray.forEach(element => {
    arrayMap[element] = 1;
  });

  secondArray.forEach(element => {
    if (arrayMap[element]) {
      intersectionArray.push(element);
      arrayMap[element]++;
    }
  });

  return intersectionArray;
}

const intersection = (array1, array2) => {
    const intersectionArray = [];

    array1.filter(element => {
        if (array2.includes(element)) {
            intersectionArray.push(element);
            array1.splice(array1.indexOf(element), 1);
        }
    });

    return intersectionArray;
}
