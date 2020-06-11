
const bubbleSort = (array) => {
  let isSort = false;
  for (let i = 0; i < array.length; i++) {
    for (let z = 0; z < array.length; z++) {
      if (array[z] > array[z + 1]) {
        let newArr = array[z];
        array[z] = array[z + 1];
        array[z + 1] = newArr;
        isSort = true;
      }
    }
  }
  if (isSort) {
    return array
  }
}

module.exports = {
  bubbleSort
};