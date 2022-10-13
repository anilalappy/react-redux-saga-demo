export const insertionSort = (insertionArray: Number[]) => {
  for (let i = 1; i < insertionArray.length; i++) {
    let currentValue = insertionArray[i];
    let j;
    for (
      j = i - 1;
      insertionArray[j] >= 0 && insertionArray[j] > currentValue;
      j--
    ) {
      console.log("insertionArray>>",insertionArray[j + 1],  insertionArray[j], j);
      insertionArray[j + 1] = insertionArray[j];
    }
    insertionArray[j + 1] = currentValue;
  }
  return insertionArray
};
