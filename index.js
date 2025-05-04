const flattenArray = (nestedArr) => {
  const flat = [];
  const handleFlat = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        handleFlat(arr[i]);
      } else {
        flat.push(arr[i]);
      }
    }
  };
  handleFlat(nestedArr);
  return flat;
};

const arr = [1, [2, 3, [4, 5, 6]], 7, [8]];

const ans = flattenArray(arr);

console.log(ans);
